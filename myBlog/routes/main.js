const express = require('express');
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs"
const Post = require('../models/Post');
const asyncHandler = require('express-async-handler');

router.get(
    ['/', '/home'], 
    asyncHandler(async (req, res) => {
        const locals = { title: 'home' };
        const data = await Post.find();
        res.render("index", {locals, data, layout: mainLayout})
    })
);

router.get('/about', (req, res) => {
    const locals = { title: 'about' };
    res.render("about", {locals, layout: mainLayout})
});

router.get('/post/:id', asyncHandler(async (req, res) => {
    const data = await Post.findOne({ _id: req.params.id });
    res.render('post', {data, layout: mainLayout});
}))

module.exports = router;

// Post.insertMany([
//     {
//         title: '제목1',
//         body:'내용 - 1'
//     },
//     {
//         title: '제목2',
//         body:'내용 - 2'
//     },
//     {
//         title: '제목3',
//         body:'내용 - 3'
//     },
//     {
//         title: '제목4',
//         body:'내용 - 4'
//     },
//     {
//         title: '제목5',
//         body:'내용 - 5'
//     },
// ]);