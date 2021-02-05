exports.displayInfo = function (req, res) {

    //get user input using request object
    let username = req.body.username;
    //B added
    let password = req.body.password;
    //make a reference to the session object

    
    let session = req.session;
   
    //store the username in session object
    session.username = username;
    //B added
    session.password = password;
    console.log("username in session: " + session.username +" "+ session.password);
    //show the display.ejs page and pass username to it
    res.render('display', {
        username: username,
        password: password,
        
    });   

}; //end of function
exports.thanks = function (req, res) {

    //get user input using request object
    let username = req.body.username;
   
    let comment = req.body.comment;
    //make a reference to the session object
    let session = req.session;
    //store the username in session object
    session.username = username;
    //B added
    session.comment = comment;
    
    //show the display.ejs page and pass username to it
    res.render('thanks', {
        username: username,
        comment: comment
        
    });   

}; //end of function