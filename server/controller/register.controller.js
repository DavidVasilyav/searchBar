const UserSearchBar = require('../database/schema/user.model')


exports.register = async (req, res) => {
    try {
        const {firstName, lastName, email, role, country } = await req.body
        const newUser = UserSearchBar.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            country: country
        })
        console.log(newUser);
        res.send(newUser)
    } catch (err) {
        console.log(err);
    }
}   