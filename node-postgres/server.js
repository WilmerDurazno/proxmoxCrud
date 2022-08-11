const app = require('./src/app');

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log('Ejecutandose en el puerto ', port);
});