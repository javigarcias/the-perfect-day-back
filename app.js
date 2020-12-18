const express = require('express');
const usersRouter = require('./routes/users');
const commercesRouter = require('./routes/commerces');
const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/users', usersRouter);
app.use('/commerces', commercesRouter);



app.listen(PORT, () => console.log('Server running on port ' + PORT));