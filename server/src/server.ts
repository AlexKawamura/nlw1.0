import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    "Alexandre",
    "Diego",
    "Daniel",
    "Samuel"
  ]);
});

app.listen(3333);