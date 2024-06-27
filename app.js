const express = require('express');
const { router: articlesRouter} = require("../routes/articlesRouter.js"); 
const app = express();

/*
PLAN 
1. The endpoints 
2. Test with postman 
3. Implement the client side
    -Login Page
    -Sign up Page
    -Articles Page
    -Articles Details
    -Settings Page- set name and color

4. Add Database 
5. Add weather information on home page
6. deploy

*/


/*
BLOG
{ method } - { route }

ARTICLES ROUTER
*GET - '/articles' - Get all the articles on our blog
*POST - '/aticles' - Create a new article on our blog
*DELETE - '/articles/:id' - Delete an article on our blog
*UPDATE - '/articles/:id' - update an article on our blog

AUTHENTICATION 
* POST - '/auth/login' - Log into our blog
* POST - '/auth/signup' - Sign up on our blog

SETTINGS
* POST - '/settings/color' - Set the color og the blog
* GET - '/settings/color' - Get the color of our blog
* POST - '/settings/name' - Set the name of our blog
* GET -  '/settings/name' - Get the name of our blog
* POST - '/settings/username' - Set a users name 
* GET - '/settings/username' - Get a users name 

WEATHER API FUNCTIONALITY

*/

app.use("/articles", articlesRouter); 

// app.get('/hello', (_req, res) => res.render("index")); 

// app.post("/hello", (_req, res) => {
//     res.send('You just called the post method at "/hello"! \n');
// })

module.exports = { app: app};