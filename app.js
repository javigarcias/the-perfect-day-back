const express = require('express');
const usersRouter = require('./routes/users');
const commercesRouter = require('./routes/commerces');
const eventsRouter = require('./routes/events');
const opinionsRouter = require('./routes/opinion');
const cors=require('./middleware/cors');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(cors);

app.use('/users', usersRouter);
app.use('/commerces', commercesRouter);
app.use('/events', eventsRouter);
app.use('/opinions', opinionsRouter);




app.listen(PORT, () => console.log('Server running on port ' + PORT));