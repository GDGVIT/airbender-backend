const router = require('express').Router();
const usersRouter = require('./users').router;
const titleRouter = require('./title').router;

router.use('/users', usersRouter);
router.use('/title', titleRouter);

exports.router = router;