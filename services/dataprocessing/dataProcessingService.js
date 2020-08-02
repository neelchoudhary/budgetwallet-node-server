const express = require('express');
const router = express.Router()

const { DataProcessingServiceClient } = require('./dataProcessing_grpc_pb.js');
const { GetAccountDailySnapshotsRequest, GetAccountDailySnapshotsResponse, GetAccountMonthlySnapshotsRequest, GetAccountMonthlySnapshotsResponse, GetCategoryMonthlySnapshotsRequest } = require('./dataProcessing_pb.js');


// getAccountDailySnapshots
router.get('/getAccountDailySnapshots/:accountid', (req, res) => {
    const request = new GetAccountDailySnapshotsRequest();
    request.setAccountId(req.params.accountid);
    const client = new DataProcessingServiceClient(res.locals.grpcHost, res.locals.creds);
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
    const client = new DataProcessingServiceClient(res.locals.grpcHost, res.locals.creds);
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
    const client = new DataProcessingServiceClient(res.locals.grpcHost, res.locals.creds);
    client.getCategoryMonthlySnapshots(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getAccountMonthlySnapshotsList())
        }
    });
})

module.exports = router;

