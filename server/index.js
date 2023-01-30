const express = require('express');
const app = express()
const connectToDB = require('./database/connectToDb')
const PORT = 3008
const UserSearchBar = require('../server/database/schema/user.model')
connectToDB()

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Test")
})

app.post('/register', async (req, res) => {
    try {
        const {firstName, lastName, email, role, country } = await req.body
        const newUser = new UserSearchBar({
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            country: country
        })
        newUser.save((err, result) => {
            if (err){
                console.log(err);
            }
            else{
                console.log(result)
            }
        })

        res.send(newUser)
    } catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`Running on PORT:${PORT}`);
})