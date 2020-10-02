var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var participantRouter = require('./routes/participantRouter');
var candidateRouter = require('./routes/candidateRouter');

// Import body parse
let bodyParser = require('body-parser');
// Import mongoose
let mongoose = require('mongoose');

// Connect to mongoose and set connection variable 
mongoose.connect('mongodb://localhost/voting', {useNewUrlParser: true});
var db = mongoose.connection;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Body parse setup to handle post request
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/api/v1/participant', participantRouter);
app.use('/api/v1/candidate', candidateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;