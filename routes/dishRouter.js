const express = require('express');

const dishRouter = express.Router();
dishRouter.use(express.json());

dishRouter.route('/:dishId')
    .get((req,res,next) => {
        res.end('will send dish of id: '+ req.params.dishId +' dish to you!');
    })
    .post((req,res,next) => {
        res.statusCode = 403;
        res.end('post operation not supported on /dishes/'+ req.params.dishId);
    })
    .put((req,res,next) => {
        res.write('Updating the dish: ' + req.params.dishId);
        res.end('will update the dish: ' + req.params.dishId + 'with name: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req,res,next) => {
        res.end('will delete the dish: ' + req.params.dishId);
    });

dishRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.end('will send all the dishes to you!');
    })
    .post((req,res,next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req,res,next) => {
        res.statusCode = 403;
        res.end('put operation not supported on /dishes');
    })
    .delete((req,res,next) => {
        res.end('will delete all the dishes for you!');
    });

module.exports = dishRouter;