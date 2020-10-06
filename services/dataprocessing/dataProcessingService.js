const express = require('express');
const router = express.Router()

const { DataProcessingServiceClient } = require('./dataProcessing_grpc_pb.js');
const { GetAccountDailySnapshotsRequest, GetAccountDailySnapshotsResponse, GetAccountMonthlySnapshotsRequest, GetAccountMonthlySnapshotsResponse, GetCategoryMonthlySnapshotsRequest, Empty } = require('./dataProcessing_pb.js');


// getAccountDailySnapshots
router.get('/getAccountDailySnapshots/:accountid', (req, res) => {
    const request = new GetAccountDailySnapshotsRequest();
    request.setAccountId(req.params.accountid);
    const client = new DataProcessingServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.getAccountDailySnapshots(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getAccountDailySnapshotsList())
        }
    });
})

// getAccountMonthlySnapshots
router.get('/getAccountMonthlySnapshots/:accountid', (req, res) => {
    const request = new GetAccountMonthlySnapshotsRequest();
    request.setAccountId(req.params.accountid);
    const client = new DataProcessingServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.getAccountMonthlySnapshots(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getAccountMonthlySnapshotsList())
        }
    });
})

// getCategoryMonthlySnapshots
router.get('/getCategoryMonthlySnapshots/:categoryid', (req, res) => {
    const request = new GetCategoryMonthlySnapshotsRequest();
    request.setCategoryId(req.params.categoryid);
    const client = new DataProcessingServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.getCategoryMonthlySnapshots(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getAccountMonthlySnapshotsList())
        }
    });
})

// getRecurringTransactions
router.get('/getRecurringTransactions', (req, res) => {
    const request = new Empty();
    const client = new DataProcessingServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.getRecurringTransactions(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getRecurringTransactionsList())
        }
    });
})

// findRecurringTransactions
router.post('/findRecurringTransactions', (req, res) => {
    const request = new Empty();
    const client = new DataProcessingServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.findRecurringTransactions(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getSuccess())
        }
    });
})

module.exports = router;

