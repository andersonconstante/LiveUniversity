const express = require('express');

let paginas = 3;


let a = [1,2,3,4,5,6,7,8,9,10];
let b = [1,2,3,4,5,6,7,8];

const router = express.Router();

router.get('/', function(req, res){
    res.render('index', {
        a,
        b
    });
});



module.exports = router;

