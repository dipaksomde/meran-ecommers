const { readUsers, readUsersProfile, register, destroyUsers, deleteUser, updateUser } = require("../controllers/userController")

const router = require("express").Router()

router
    .get("/", readUsers)
    .get("/profile/:userId", readUsersProfile)
    .post("/register", register)
    .put("/:userId", updateUser)
    .delete("/destroy", destroyUsers)
    .delete("/:userId", deleteUser)

    module.exports = router