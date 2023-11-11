const express = require('express');

const { loginRoutes, userRouter, categorieRouter, postRouter } = require('./routes');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/user', userRouter);

app.use('/categories', categorieRouter);

app.use('/post', postRouter);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
