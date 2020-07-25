const express = require('express');
const router = express.Router();

const { AuthServiceClient } = require('./auth_grpc_pb.js');
const { LoginRequest, LoginResponse, LoginUser } = require('./auth_pb.js');


// // get all members
router.get('/', (req, res) => res.json({ Hello: "World" }))

// // get a specific elem
// router.get('/:id', (req, res) => {

//     const found = members.some((member) => member.id === parseInt(req.params.id))
//     if (found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id)))
//     } else {
//         res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
//     }
// })

// login
router.post('/login', (req, res) => {
    const request = new LoginRequest();
    const loginUser = new LoginUser();
    loginUser.setEmail(req.body.email);
    loginUser.setPassword(req.body.password);
    request.setLoginuser(loginUser);
    const client = new AuthServiceClient(res.locals.grpcHost, res.locals.creds);
    client.login(request, function (err, response) {
        if (err) {
            return res.json(err)
        } else {
            return res.json({success: response.getSuccess(), token: response.getToken()})
        }
    });
})

// Todo later
// router.post('/signup', (req, res) => {
//     const client = new AuthServiceClient('neelchoudhary.com:1443',
//         grpc.credentials.createSsl(fs.readFileSync('ssl/chain.pem')));
//     const request = new LoginRequest();
//     const loginUser = new LoginUser();
//     loginUser.setEmail(req.body.email);
//     loginUser.setPassword(req.body.password);
//     request.setLoginuser(loginUser);
//     client.login(request, function (err, response) {
//         if (err) {
//             return res.json(err)
//         } else {
//             return res.json({success: response.getSuccess(), token: response.getToken()})
//         }
//     });
// })



// //update member 
// router.put('/:id', (req, res) => {
//     // chech to see if the member exists
//     const found = members.some((member) => member.id === parseInt(req.params.id))
//     if (found) {
//         const updMember = req.body
//         members.forEach(member => {
//             if (member.id === parseInt(req.params.id)) {
//                 member.name = updMember.name ? updMember.name : member.name;
//                 member.email = updMember.email ? updMember.email : member.email;
//                 res.json({ msg: 'member updated', member })
//             }
//         })

//     } else {
//         res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
//     }
// })

// //Delete member

// router.delete('/:id', (req, res) => {

//     const found = members.some((member) => member.id === parseInt(req.params.id))
//     if (found) {

//         res.json({ msg: 'Member deleted successfully', members: members.filter(member => member.id !== parseInt(req.params.id)) })
//     } else {
//         res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
//     }
// })


module.exports = router;