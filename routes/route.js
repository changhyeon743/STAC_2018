/**
 * Created by janghunlee on 2018. 8. 28..
 */

module.exports = route;

function route(app) {
    app.get('/',(req,res)=>{
        "use strict";
        res.render('splash.html');
    });

    app.get('/check',(req,res)=>{
        "use strict";
        res.render('check.html');
    });

    app.get('/login',(req,res)=>{
        "use strict";
        res.render('login.html')
    });

    app.get('/register/ward',(req,res)=>{
        "use strict";
        res.render("register_normal.html");
    });

    app.get('/register/guardian',(req,res)=>{
        "use strict";
        res.render('register_guardian.html');
    });

    app.get('/main/ward',(req,res)=>{
        "use strict";
        res.render('main_ward.html');
    });

    app.get('/test',(req,res)=>{
        "use strict";
        res.render('test.html');
    });
}