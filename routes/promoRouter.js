const express = require('express');

const promosRouter = express.Router();
promosRouter.use(express.json());

promosRouter.route('/:promoId')
    .get((req,res,next) => {
        res.end('will send promo of id: '+ req.params.promoId +' promo to you!');
    })
    .post((req,res,next) => {
        res.statusCode = 403;
        res.end('post operation not supported on /promotions/'+ req.params.promoId);
    })
    .put((req,res,next) => {
        res.write('Updating the promo: ' + req.params.promoId);
        res.end('will update the promo: ' + req.params.promoId + 'with name: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req,res,next) => {
        res.end('will delete the promo: ' + req.params.promoId);
    });

promosRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.end('will send all the promos to you!');
    })
    .post((req,res,next) => {
        res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req,res,next) => {
        res.statusCode = 403;
        res.end('put operation not supported on /promotions');
    })
    .delete((req,res,next) => {
        res.end('will delete all the promotions for you!');
    });

module.exports = promosRouter;