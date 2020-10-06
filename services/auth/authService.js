const express = require('express');
const router = express.Router();

const { AuthServiceClient } = require('./auth_grpc_pb.js');
const { LoginRequest, LoginUser, SignupRequest, SignUpUser, Empty } = require('./auth_pb.js');

// const { FinancialCategoryServiceClient } = require('../financialcategories/financialCategories_grpc_pb.js');
// const { Empty } = require('../financialcategories/financialCategories_pb.js');

// login
router.post('/login', (req, res) => {
    const request = new LoginRequest();
    const loginUser = new LoginUser();
    loginUser.setEmail(req.body.email);
    loginUser.setPassword(req.body.password);
    request.setLoginuser(loginUser);
    const client = new AuthServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.login(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.cookie('token', response.getToken(), {
                httpOnly: true,
                sameSite: "lax",
                // secure: true,
            }).json({ success: response.getSuccess() });
        }
    });
})

// logout
router.post('/logout', (req, res) => {
    return res.clearCookie('token').json({ success: "true" });
})

// signup
router.post('/signup', (req, res) => {
    const request = new SignupRequest();
    const signupUser = new SignUpUser();
    signupUser.setFullname(req.body.fullname);
    signupUser.setEmail(req.body.email);
    signupUser.setPassword(req.body.password)
    request.setSignupuser(signupUser);
    const client = new AuthServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.signup(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json({ success: response.getSuccess() })
        }
    });
})


// verifyAuth
router.post('/verifyAuth', (req, res) => {
    const request = new Empty();
    const client = new AuthServiceClient(res.locals.grpcHost, res.locals.creds, res.locals.options);
    client.verifyAuth(request, function (err, response) {
        if (err) {
            return res.json({success: false})
        } else {
            return res.json({success: response.getSuccess()})
        }
    });
})


module.exports = router;