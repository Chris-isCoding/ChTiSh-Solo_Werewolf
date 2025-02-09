const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { ModuleFilenameHelpers } = require('webpack');
const port = 3000;


// const userController = require('./controllers/userController');
// const cookieController = require('./controllers/cookieController');
// const sessionController = require('./controllers/sessionController');




// The default 'master username' for PostgreSQL is postgres
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


//global error handling
app.use((err, req, res, next) => {
const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
};
const errorObj = Object.assign({}, defaultErr, err);
console.log(errorObj.log);
return res.status(errorObj.status).json(errorObj.message);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;