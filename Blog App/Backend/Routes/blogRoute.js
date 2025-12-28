const express = require('express');
const router = express.Router();

const addBlog = require('../Controller/addBlog');
const getBlog = require('../Controller/getBlog');
const deleteBlog = require('../Controller/deleteBlog');
const addComment = require('../Controller/addComment');
const deleteComment = require('../Controller/deleteComment');

router.post('/', addBlog.addBlog);
router.get('/', getBlog.getBlog);
router.delete('/:id', deleteBlog.deleteBlog);

router.post('/:blogId/comments', addComment.addComment);
router.delete('/comments/:id', deleteComment.deleteComment);

module.exports = router;
