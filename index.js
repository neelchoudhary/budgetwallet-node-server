const express = require('express')
const grpc = require('grpc');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use(
    cors({
        origin: [
            'http://localhost:3000',
        ],
        credentials: true
    })
);

const budgetWalletAPIServerPrd = "neelchoudhary.com:1443"
// const budgetWalletAPIServerLocal = "localhost:50051"


app.use(function (req, res, next) {
    res.locals.grpcHost = budgetWalletAPIServerPrd
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
            extra_creds,
        )
        res.locals.creds = creds;
    } else {
        const creds = grpc.credentials.createSsl(fs.readFileSync('ssl/chain.pem'));
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