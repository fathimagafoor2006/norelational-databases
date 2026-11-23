const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");

// Load seed data from the JSON files in data/
const usersData = require("./data/users.json");
const postsData = require("./data/posts.json");

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/blog_db";

async function main() {
  await mongoose.connect(URI);

  // TODO: delete all existing documents from the users collection
  // Hint: User.deleteMany({})
  await User.deleteMany({});
  // TODO: delete all existing documents from the posts collection
  await Post.deleteMany({});
  // TODO: insert all users from usersData into the database
  // Hint: User.insertMany(usersData)
  const insertedUsers = await User.insertMany(usersData);
  // TODO: insert all posts from postsData into the database
  const insertedPosts = await Post.insertMany(postsData);
  // TODO: log how many users and posts were inserted
  // Hint: User.countDocuments() returns the total count
  console.log(`Inserted ${insertedUsers.length} users`);
  console.log(`Inserted ${insertedPosts.length} posts`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
