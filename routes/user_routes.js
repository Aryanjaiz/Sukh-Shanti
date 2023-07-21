const express=require('express');
const router=express.Router();
const{homepage,gallery,about,contact,usermessage}=require("../controllers/user_controller");

router.route('/home').get(homepage); 
router.route('/').get(homepage);

router.route('/contact').get(contact); 
router.route('/contact').post(usermessage); 
router.route('/about').get(about); 
router.route('/gallery').get(gallery); 

module.exports = router;