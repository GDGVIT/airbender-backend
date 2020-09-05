const router = require('express').Router();
const path = require('path')

router.get("/:username", (req, res) => {
    res.status(200).sendFile(
        path.join(
            __dirname,
            '..',
            '..',
            'users', 
            'avatars', 
            req.params.username + '.png'
        )
    );
});

exports.router = router;