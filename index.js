const express = require('express')
const grpc = require('grpc');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const { reset } = require('nodemon');

const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'https://budgetwallet.neelchoudhary.com',
        ],
        credentials: true
    })
);

const budgetWalletAPIServerPrd = "https://neelchoudhary.com:1443"
// const budgetWalletAPIServerLocal = "localhost:50051"


app.use(function (req, res, next) {
    res.locals.grpcHost = budgetWalletAPIServerPrd
    // res.locals.grpcHost = budgetWalletAPIServerLocal
    const options = {
        'grpc.ssl_target_name_override': 'neelchoudhary.com',
        'grpc.default_authority': 'neelchoudhary.com',
    };
    res.locals.options = options
    if (req.originalUrl !== "/api/auth/login" && req.originalUrl !== "/api/auth/signup") {
        // const jwtToken = fs.readFileSync("./jwtToken.txt", "utf8");
        const jwtToken = req.cookies.token || '';
        if (!jwtToken) {
            return res.status(401).json('Auth error')
        }
        const meta = new grpc.Metadata();
        meta.add('authorization', `Bearer ${jwtToken}`);
        const extra_creds = grpc.credentials.createFromMetadataGenerator(
            function (url, callback) {
                callback(null, meta);
            }
        )
        const creds = grpc.credentials.combineChannelCredentials(
            grpc.credentials.createSsl(fs.readFileSync('ssl/chain.pem')),
            // grpc.credentials.createSsl(fs.readFileSync('ssl/server.crt')),
            extra_creds,
        )
        res.locals.creds = creds;
    } else {
        const creds = grpc.credentials.createSsl(fs.readFileSync('ssl/chain.pem'));
        // const creds = grpc.credentials.createSsl(fs.readFileSync('ssl/server.crt'));
        res.locals.creds = creds;
    }
    next();
});

app.use('/api/auth', require('./services/auth/authService'))
app.use('/api/userfinances', require('./services/userfinances/userFinancesService'))
app.use('/api/plaidfinances', require('./services/plaidfinances/plaidFinancesService'))
app.use('/api/financialcategories', require('./services/financialcategories/financialCategoriesService'))
app.use('/api/dataprocessing', require('./services/dataprocessing/dataProcessingService'))

const PORT = 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));

// npm start & node index are gonna run the server without nodemon
// npm run dev will run with nodemon 