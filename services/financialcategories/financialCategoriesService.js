const express = require('express');
const router = express.Router()

const { FinancialCategoryServiceClient } = require('./financialCategories_grpc_pb.js');
const { Empty, GetFinancialCategoriesResponse, FinancialCategory } = require('./financialCategories_pb.js');


// getFinancialCategories
router.get('/getFinancialCategories', (req, res) => {
    const request = new Empty();
    const client = new FinancialCategoryServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.getFinancialCategories(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json(response.getFinancialCategoriesList())
        }
    });
})

module.exports = router;

