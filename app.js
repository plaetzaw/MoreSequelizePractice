const db = require("./models");

db.categories.findAll().then(results => {
  results.forEach(record => {
    console.log(record.name);
  });
});

db.blogs
  .create({
    title: "how do i shot web",
    body: "like spiderman",
    category: 1,
    author: 1
  })
  .then(blog => {
    console.log(blog);
  });

db.blogs
  .create({
    title: "why is the rum gone",
    body: "we love this because JDepp",
    category: 1,
    author: 1
  })
  .then(blog => {
    console.log(blog);
  });

db.blogs
  .create({
    title: "Who is Daddy",
    body: "And What does he do?",
    category: 1,
    author: 1
  })
  .then(blog => {
    console.log(blog);
  });

db.blogs.findAll({ include: [{ model: db.author }] }).then(() => {
  results.forEach(record => {
    console.log(record.title, record.author.name);
  });
});

// app.get('/', (req, res) => {
//   //database call
//   res.render('index', {
//     results;
//   })
// })
