const router = require('express').Router();
const path = require('path')
const fs = require('fs');

router.get("/:username", (req, res) => {
    let file_path = path.join(
        __dirname,
        '..',
        '..',
        'users', 
        'avatars', 
        req.params.username + '.png'
    );
    
    let s = fs.createReadStream(file_path);

    s.on('open', () => {
        res.set('Content-Type', 'image/png');
        res.status(200);
        s.pipe(res);
    });

    s.on('error', () => {
        res.status(404).end("Image not found")
    });
});

exports.router = router;