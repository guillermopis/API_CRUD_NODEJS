var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET todo listing. */
router.get('/:id', function (req, res, next) {
  const todo_id = req.params.id;
  console.log("todo_id = "+todo_id);
  if(todo_id == 'null'){
    console.log("todo_id es NULL");
    model.modelo.findAll({})
    .then(apiPeticiones => res.json({
      error: false,
        data: apiPeticiones
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
  }else{
    console.log("todo_id no es NULL");

      model.modelo.findAll({ where: {
          id: todo_id
      }})
      .then(apiPeticiones => res.json({
        error: false,
          data: apiPeticiones
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
  }


});

/* POST todo. */
router.post('/', function(req, res, next) {
  var {
         nombre,
         carnet,
         facultad,
         ciclo,
         evento,
         categoria
     } = req.body;
     model.modelo.create({
             nombre: nombre,
             carnet: carnet,
             facultad: facultad,
             ciclo: ciclo,
             evento: evento,
             categoria: categoria
         })
         .then(todo => res.status(201).json({
             error: false,
             data: todo,
             message: 'REgistros ingresados a tabla modelos'
         }))
         .catch(error => res.json({
             error: true,
             data: [],
             error: error
         }));
});


//delete method
router.delete('/:id', function (req, res, next) {
    const todo_id = req.params.id;

    model.modelo.destroy({ where: {
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

//update method
router.put('/:id', function (req, res, next) {
    const todo_id = req.params.id;
    const { nombre,carnet,facultad, ciclo,evento, categoria } = req.body;
    model.modelo.update({
            nombre: nombre,
            carnet: carnet,
            facultad: facultad,
            ciclo: ciclo,
            evento: evento,
            categoria: categoria
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
module.exports = router;
