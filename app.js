var SwaggerRestify = require('swagger-restify-mw');
var restify = require('restify');
var app = restify.createServer();

var config = {
    'appRoot': __dirname,
    'port': process.env.PORT || 31337
};

app.use(restify.CORS());

SwaggerRestify.create(config, function (err, swaggerRestify) {
    if (err) {
        throw new Error(err);
    }

    swaggerRestify.register(app);

    var port = config.port;
    app.listen(port, function () {
        console.log('server started on port %s', config.port);
    });
});
