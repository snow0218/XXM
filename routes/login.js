var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/loginPage', function(req, res, next) {
  console.info("恭喜你进来了")
  // res.send('respond with a resource');
    var id=req.query.id;
  if (id==1){
      res.render('login', {});
  }else{
      res.render('error',{});
  }

});
router.post('/login', function(req, res, next) {
    console.info("come on")
    // res.send('respond with a resource');
    var userName=req.body.userName;
    var password=req.body.password;
    if (userName=="gq" && password=="gq"){
        res.render('success',{username:userName,password:password});
    }else{
        res.render('error',{});
    }

});
module.exports = router;
