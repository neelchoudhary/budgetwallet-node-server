const express = require('express')
const grpc = require('grpc');
const fs = require('fs');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function (req, res, next) {
    const jwtToken = fs.readFileSync("./jwtToken.txt", "utf8");
    res.locals.grpcHost = "neelchoudhary.com:1443"
    if (req.originalUrl !== "/api/auth/login" && req.originalUrl !== "/api/auth/signup") {
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