let router = require('express').Router();

// create the route to handle GET requests to /blog
router.get('/', function(req, res, next) {
    /*
     * All of the code that you want to run
     * when the client makes a GET request
     * to /blog  should go here. In this case
     * we are simply rendering a view.
     */
    res.render('/index');
});

// export the router
module.exports = router;