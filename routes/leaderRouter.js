const express = require('express');

const leaderRouter = express.Router();
leaderRouter.use(express.json());

leaderRouter.route('/:leaderId')
    .get((req,res,next) => {
        res.end('will send leader of id: '+ req.params.leaderId +' to you!');
    })
    .post((req,res,next) => {
        res.statusCode = 403;
        res.end('post operation not supported on /leaders/'+ req.params.leaderId);
    })
    .put((req,res,next) => {
        res.write('Updating the leader: ' + req.params.leaderId);
        res.end('will update the leader: ' + req.params.leaderId + 'with name: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req,res,next) => {
        res.end('will delete the leader: ' + req.params.leaderId);
    });

leaderRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.end('will send all the leaders to you!');
    })
    .post((req,res,next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req,res,next) => {
        res.statusCode = 403;
        res.end('put operation not supported on /leaders');
    })
    .delete((req,res,next) => {
        res.end('will delete all the leaders for you!');
    });

module.exports = leaderRouter;