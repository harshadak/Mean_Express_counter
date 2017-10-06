var express = require("express");
var session = require("express-session");

var app = express();

app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    if (request.session.count) {
        request.session.count += 1;
        // console.log(request.session);
        // console.log(request.session.count);
    } else {
        request.session.count = 1;
    }
    response.render('index', {counter: request.session.count});
})

app.post('/', function(request, response) {
    console.log(request.session);
    request.session.count += 1;
    response.redirect('/');
});

app.post('/reset', function(request, response) {
    request.session.count = 0;
    response.redirect('/');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})