const express = require ('express');
const Admin = require('../models/Admin');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const {JWT_SECRET}=require('../keys')


// router.get('/',(req,res)=>{
//     console.log('ok');
//     res.send('hello')
// })

const maxAge = 3 * 24 * 3600;
const createtokens = (id) => {
    console.log(id)
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: maxAge
    })
}



router.post("/signup", async (req, res) => {
    try {

       
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newAdmin = new Admin({
            username: req.body.username,
            password: hashedPassword,
        });
        const admin = await newAdmin.save();

        console.log(admin);
        const token = createtokens(admin._id)
        // res.cookie('nitmun', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.send(admin)
    } catch (err) {
        res.json(err);
    }

})


// router.post('/',async(req,res)=>{
//     const {username,password} = req.body;
    
     

// })
router.post("/",(req,res)=>{

    const {username,password}= req.body;

    if(!username||!password){
         return res.status(422).json({error:"add username or password"})
    }
    Admin.findOne({username:username})
    .then(savedAdmin=>{
        if(!savedAdmin){
            return res.status(422).json({error:"Invalid username or password"})
        }
        bcrypt.compare(password,savedAdmin.password)
        .then(doMatch=>{
            if(doMatch){
                
                // const token = jwt.sign({_id:savedAdmin._id},JWT_SECRET);
               
                const token = createtokens(savedAdmin._id)
                res.json(token)
                console.log({token})
    
            // res.cookie('nitmun',token,{httpOnly: true, maxAge: maxAge * 1000})
            // res.status(201).render('home')

            }
            else{
                return res.status(422).json({error:"Invalid username or password"})
            }
        }).catch(err=>{
            console.log(err)
        })
    })
})


// router.post("/", async (req, res) => {
//     const {username,password} = req.body
//     try {
//         const user = await Admin.login(username,password)
//         const token = createtokens(user._id)
    
//             res.cookie('nitmun',token,{httpOnly: true, maxAge: maxAge * 1000})
//             res.status(201).render('home')
        
//     } catch (err) {
//         console.log(err);
//         res.status(400).json({error: err})
//     }
// });













module.exports = router
