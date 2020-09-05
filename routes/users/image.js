const router = require('express').Router();

router.get("/:username", (req, res) => {
    res.status(200).sendFile('../../users/avatars/' + req.params.username);
});

module.exports = router;