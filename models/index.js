const User = require("./User");
const Post = require("./Post");

// create associations

//User can have many post
User.hasMany(Post, {
  foreignKey: 'user_id'
});

//A post belongs to one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post };
