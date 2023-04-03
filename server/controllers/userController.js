
const Users = require("./../model/Users")
const bcrypt = require("bcrypt")


exports.register = async (req, res) => {
    try {
        const {password} = req.body
        const hashPass = bcrypt.hashSync(password, 10)
        const result = await Users.create({...req.body, password : hashPass})
        
        res.josn({
            message : "User Register Success"
        })
    } catch (error) {
        console.log("UserContoller.js +> register")
        console.log(error);
        res.stutus(400).josn({
            message : "Error" + error
        })
    }
}
exports.readUsers = async (req, res) => {
    try {
        res.josn({
            message : "All User Fetch Success"
        })
    } catch (error) {
        console.log("UserContoller.js +> ReadUsers")
        console.log(error);
        res.stutus(400).josn({
            message : "Error" + error
        })
    }
}
exports.readUsersProfile = async (req, res) => {
    try {
        const {userId} = req.prams
        const {result} = await Users.findById(userId)
        res.josn({
            message : " User Proflie Fetch Success"
        })
    } catch (error) {
        console.log("UserContoller.js +> ReadUsersProfile")
        console.log(error);
        res.stutus(400).josn({
            message : "Error" + error
        })
    }
}
exports.updateUser = async (req, res) => {
    try {
        const {UserId} = req.params
        const result = await Users.findByIdAndUpdate(UserId, req.body, {new : true})
        res.josn({
            message : " User update Fetch Success"
        })
    } catch (error) {
        console.log("UserContoller.js +> updateUser")
        console.log(error);
        res.stutus(400).josn({
            message : "Error" + error
        })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const {userId} = req.params
        const result = await Users.findByIdAndDelete(userId)
        res.josn({
            message : " User deleteUser Fetch Success",
            result
        })
    } catch (error) {
        console.log("UserContoller.js +> deleteUser")
        console.log(error);
        res.stutus(400).josn({
            message : "Error" + error
        })
    }
}
exports.destroyUsers = async (req, res) => {
    try {
        const result = await Users.deleteMany()
        res.josn({
            message : " User destroyUsers Fetch Success",
         result
        })
    } catch (error) {
        console.log("UserContoller.js +> destroyUsers")
        console.log(error);
        res.stutus(400).josn({
            message : "Error" + error
        })
    }
}