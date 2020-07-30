const express = require('express');
const router = express.Router()

const { PlaidFinancesServiceClient } = require('./plaidFinances_grpc_pb.js');
const { LinkFinancialInstitutionRequest, UpdateFinancialInstitutionRequest, UpdateFinancialAccountsRequest, RemoveFinancialInstitutionRequest, AddHistoricalFinancialTransactionsRequest, AddFinancialTransactionsRequest, Empty } = require('./plaidFinances_pb.js');


// getLinkToken
router.get('/getLinkToken', (req, res) => {
    const request = new Empty();

    const client = new PlaidFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.linkToken(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json({linkToken: response.getLinktoken()})
        }
    });
})


// linkFinancialInstitution
router.post('/linkFinancialInstitution', (req, res) => {
    const request = new LinkFinancialInstitutionRequest();
    request.setPublicToken(req.body.publicToken);
    request.setPlaidInstitutionId(req.body.plaidInstitutionId);

    const client = new PlaidFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.linkFinancialInstitution(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getSuccess())
        }
    });
})

// updateFinancialInstitution
router.post('/updateFinancialInstitution/:itemId', (req, res) => {
    const request = new UpdateFinancialInstitutionRequest();
    request.setItemId(req.params.itemId);

    const client = new PlaidFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.updateFinancialInstitution(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getSuccess())
        }
    });
})

// updateFinancialAccounts
router.post('/updateFinancialAccounts/:itemId', (req, res) => {
    const request = new UpdateFinancialAccountsRequest();
    request.setItemId(req.params.itemId);

    const client = new PlaidFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.updateFinancialAccounts(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getSuccess())
        }
    });
})

// removeFinancialInstitution
router.post('/removeFinancialInstitution', (req, res) => {
    const request = new RemoveFinancialInstitutionRequest();
    request.setItemId(req.body.itemId);
    
    const client = new PlaidFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.removeFinancialInstitution(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getSuccess())
        }
    });
})

// addHistoricalFinancialTransactions
router.post('/addHistoricalFinancialTransactions', (req, res) => {
    const request = new AddHistoricalFinancialTransactionsRequest();
    request.setUserId(req.body.userId);
    request.setItemId(req.body.itemId);
    request.setPlaidItemId(req.body.plaidItemId);

    const client = new PlaidFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.addHistoricalFinancialTransactions(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getNewtransactions())
        }
    });
})

// addFinancialTransactions
router.post('/addFinancialTransactions', (req, res) => {
    const request = new AddFinancialTransactionsRequest();
    request.setUserId(req.body.userId);
    request.setItemId(req.body.itemId);
    request.setPlaidItemId(req.body.plaidItemId);

    const client = new PlaidFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.addFinancialTransactions(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getNewtransactions())
        }
    });
})

module.exports = router;

