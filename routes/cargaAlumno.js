var express = require('express');
var router = express.Router();
var  request  = require('ajax-request');
var Request = require("request");

router.get('/', function(req, res, next) {
Request.get("http://localhost:3000/agregarParticipante/null", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    //console.dir(JSON.parse(body));
  var data= JSON.parse(body);
  console.log(data);
    res.render('alumno/index',
    {
      title: 'PARTICIPANTES',
      data
    });
  });
});

module.exports = router;
