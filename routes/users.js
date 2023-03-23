import express from 'express';

const router = express.Router();


// Mock Database 
let users = []

// Get all user details 
router.get('/', (req , res) => {
    res.send(users);
});

// Add User 
router.post('/', (req, res) => {
    console.log(req.body)

    const user= req.body;

    users.push(user);

    res.send(`Welcome to the gang ${user.firstName} Hola`)
});

// Update User

// router.patch('/' , (req, res) => {

//     const user = users.find((user) => user.iD === req.params.iD);

// user.age = req.body.age;
// });

//Delete User

router.delete('/:iD' , (req, res) => {
    const { iD } = req.params;

    users = users.filter((user) => user.iD !== iD);
    
    res.send(`User deleted ${iD}`);

});

// Search User 
router.get('/:iD' , (req , res) => {
    const { iD } = req.params;
    
    const userFound = users.find((user) => user.iD === iD);

    res.send(userFound)
})
export default router;