//this function handles routing of requests
module.exports = function (app) {
    //load the controller(s)
    var index = require('../controllers/index.server.controller');
    
    //handle the routing of get request to the route
    //by showing the login screen
    app.get('/', function (req, res) {
        //display login page
        res.render('index', { loginMessage: 'Please login using your my.centennialcollege Eamil:' });

    });
    //the form uses a post request to the same path ('/')
    app.post('/', function (req, res) {
        //use the controller function
        index.displayInfo(req, res);
        
    });

    app.post('/thanks', function (req, res) {
        //use the controller function
        index.thanks(req, res);
        
    });

};
