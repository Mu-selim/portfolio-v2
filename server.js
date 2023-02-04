const express = require('express');
const path = require('path');
const cors = require('cors');
const indexRouter = require('./routes/index');
const userAPIRouter = require('./routes/user/index');
const apiRouter = require('./routes/user/APIs/index');

const app = express();

// set up EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set middleware
app.use(cors());
app.use('/public' ,express.static(path.join(__dirname, 'public')));

// set up Rounting
app.use('/', indexRouter);
app.use('/api', userAPIRouter);
app.use('/api/selim', apiRouter);

app.get('*', (req, res)=> {
    res.render('404');
});


const port = 3000 || process.env.PORT;
app.listen(port, (req, res)=> {
    console.log(`Application start: localhost:${port}`);
});