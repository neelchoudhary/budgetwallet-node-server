const express = require('express');
const router = express.Router();

const { UserFinancesServiceClient } = require('./userFinances_grpc_pb.js');
const { GetFinancialInstitutionsRequest, GetFinancialAccountsRequest, ToggleFinancialAccountRequest, GetFinancialTransactionsRequest } = require('./userFinances_pb.js');


// getFinancialInstitutions
router.get('/getFinancialInstitutions', (req, res) => {
    const request = new GetFinancialInstitutionsRequest();
    const client = new UserFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.getFinancialInstitutions(request, function (err, response) {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.json(response.getFinancialInstitutionsList())
        }
    });
})

// getFinancialAccounts
router.get('/getFinancialAccounts/:id', (req, res) => {
    const request = new GetFinancialAccountsRequest();
    request.setItemId(req.params.id)

    const client = new UserFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.getFinancialAccounts(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getFinancialAccountsList())
        }
    });
})

// getFinancialAccounts
router.post('/toggleFinancialAccount', (req, res) => {
    const request = new ToggleFinancialAccountRequest();
    request.setItemId(req.body.itemId)
    request.setAccountId(req.body.accountId)
    request.setSelected(req.body.selected === 'true' ? true : false)

    const client = new UserFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.toggleFinancialAccount(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getSuccess())
        }
    });
})

// getFinancialAccounts
router.get('/getFinancialTransactions', (req, res) => {
    const request = new Empty();

    const client = new UserFinancesServiceClient(res.locals.grpcHost, res.locals.creds);
    client.getFinancialTransactions(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getFinancialTransactionsList())
        }
    });
})

module.exports = router;

