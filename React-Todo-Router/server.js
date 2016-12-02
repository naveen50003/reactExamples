var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
//var express = require('express');
//var app = express();

// app.use('/static',express.static(__dirname + '/dist'));
// app.set('views',__dirname +'/views');
// app.set('view engine','pug');
// app.get('*',function(req,res){
//   //console.log("entered");
//   res.render("index");
// });
// app.get('/todo')
require('babel-register');

// var swig  = require('swig');
// var React = require('react');
// var ReactDOM = require('react-dom/server');
// var Router = require('react-router');
var Hapi  = require('hapi');
var Vision  = require('vision');
var inert = require('inert');
/*app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});*/
//var pug = require('pug');
var tasks = [
    {
      id: 1,
      text: 'TASK1',
      completed: false
    },
    {
      id: 2,
      text: 'TASK2',
      completed: false
    },
]
const internals = {};

const rootHandler = function(request,reply){

    console.log("rootHandler");
    reply.view('index');
}
const jsHandler  = function(request,reply){

    console.log("image Handler");
    reply.file('./dist/main.js');
}

const retreiveTasks = function(request,reply){

    console.log("retreiving Tasks");

    var responseData = {
        tasks : tasks
    }
    reply(responseData);
}

const addTaskHandler  = function(request,reply){

    console.log("adding Task");
    console.log(request);
    tasks.push(request.payload.data);
    console.log(tasks);
    reply("successfully Inserted into server");
}
internals.main  = function(){

  var server  = new Hapi.Server();
  server.connection({
      port:3000
  })
  server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
  // Register Vision to your server instance
  server.register([Vision,inert],function(err){
    if(err){
      console.log('connect Register Vision');
    }

    //Configure template support
    server.views({
        engines:{
          pug:require('pug')
        },
        path:__dirname+'/views',
        compileOptions : {
          pretty:true                 //Stylize errors and messages using color and context
        }
    })

      //ROutes COnfigure
      server.route({
          method:'GET',
          path:'/',
          handler:rootHandler
      })



      server.route({
          method:'GET',
          path:'/getTasks',
          handler:retreiveTasks
      })

      server.route({
          method:'get',
          path:'/addTask',
          handler:addTaskHandler
      })
  })
  server.route({
      method:'GET',
      path:'/main.js',
      handler:jsHandler
  })
}

internals.main();

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
});
// app.listen(3000, 'localhost', function (err) {
//     if (err) {
//         console.log(err);
//     }
//   console.log('Listening at localhost:3000');
// });
