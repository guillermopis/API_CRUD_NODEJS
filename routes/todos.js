var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET todo listing. */
router.get('/', function (req, res, next) {
    model.Todo.findAll({})
        .then(todos => res.json({
            error: false,
            data: todos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});


/* POST todo. */
router.post('/', function(req, res, next) {
  var {
         title,
         description
         //createdAt,
         //updatedAt
     } = req.body;
     //var title= req.body.title;
    // console.log('el valor de rq= '+ req);
    // console.log('el valor de title es: '+title);
     model.Todo.create({
             title: title,
             description: description
             //createdAt: createdAt,
             //updatedAt: updatedAt
         })
         .then(todo => res.status(201).json({
             error: false,
             data: todo,
             message: 'REgistros ingresados a tabla todos'
         }))
         .catch(error => res.json({
             error: true,
             data: [],
             error: error
         }));
});


/* update todo. */
router.put('/:id', function (req, res, next) {

    const todo_id = req.params.id;

    const { title, description } = req.body;

    model.Todo.update({
            title: title,
            description: description
        }, {
            where: {
                id: todo_id
            }
        })
        .then(todo => res.status(201).json({//La petición ha sido completada y ha resultado en la creación de un nuevo recurso.
            error: false,
            message: 'LA INFORMACION HA SIDO MODIFICADA'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});



router.delete('/:id', function (req, res, next) {
    const todo_id = req.params.id;

    model.Todo.destroy({ where: {
        id: todo_id
    }})

        .then(status => res.status(201).json({
            error: false,
            message: 'REGISTRO ELIMINADO EXITOSAMENTE'
        }))

        .then(status => res.status(202).json({
            error: false,
            message: 'ERROR'
        }))

        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;
