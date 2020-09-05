const router = require('express').Router();
const imageRouter = require('./image').router;
const infoRouter = require('./info').router;

router.use('/info', infoRouter);
router.use('/image', imageRouter);

exports.router = router;