exports.displayInfo = function (req, res) {

    //get user input using request object
    var username = req.body.username;
    //B added
    var password = req.body.password;
    //make a reference to the session object
    var session = req.session;
   
    //store the username in session object
    session.username = username;
    //B added
    session.password = password;
    console.log("username in session: " + session.username +" "+ session.password);
    //show the display.ejs page and pass username to it
    res.render('display', {
        username: username,
        password:password
    });   

}; //end of function
