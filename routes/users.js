import express from 'express';

const router = express.Router();


// Mock Database 
const users = [
    {
        firstName: "Frezzeee",
        lsatName: "Jazz",
        UserName: "Frezz",
        age: 88,
    },
    {
        firstName: "Frezzeee",
        lsatName: "Jazz",
        UserName: "Frezz",
        age: 87,
    },
    {
        firstName: "Elephant",
        lsatName: "Jazz",
        UserName: "Elee",
        age: 88,
    },
    {
        firstName: "Giraff",
        lsatName: "Jazz",
        UserName: "Gif",
        age: 89,
    }
]


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

router.patch('/' , (req, res) => {
const user = users.find((user) => user.firstName === req.params.firstName);

user.age = req.body.age;
});

//Delete User

// router.delete('/' , (req, res) => {

// });

// Search User 
router.get('/:UserName' , (req , res) => {
    const { UserName } = req.params;
    
    const userFound = users.find((user) => user.UserName === UserName);

    res.send(userFound)
})
export default router;