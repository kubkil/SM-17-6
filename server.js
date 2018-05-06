const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('log');
});

// OTWORZENIE STRONY PO KLIKNIĘCIU NA LOG W PUG
app.get('/auth/google', (req, res) => {
  res.render('logged');
});

app.listen(3000);
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});