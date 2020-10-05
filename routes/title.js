const router = require('express').Router()
const title = require('../title.json')

router.get("/", (req, res) => {
    res.status(200).json(title)
});

exports.router = router;