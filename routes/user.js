const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth")
const {auth, isStudent, isAdmin} = require("../middlewares/auth");


router.post("/login", login);
router.post("/signup", signup);

//Testing Protected Routes for the single middleware
router.get("/test", auth,(req, res) => {
    res.json({
        success:true,
        message:"Welcome to the Protected route for the Tests",
    });
})
//protected route
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success:true,
        message:"Welcome to the Protected route for the Students",
    });
});

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success:true,
        message:"Welcome to the Protected route for the Admin",
    });
});

module.exports = router;