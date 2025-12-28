const Blog = require('./blogModel');
const Comment = require('./commentModel');

Blog.hasMany(Comment, { foreignKey: 'blogId', onDelete: 'CASCADE' });
Comment.belongsTo(Blog, { foreignKey: 'blogId' });

module.exports = { Blog, Comment };
