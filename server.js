'use strict';
const Hapi=require('hapi');
const Hoek=require('hoek');
const Settings=require('./settings');
const server = new Hapi.Server({ port: Settings.port });

//server.connection({ port: Settings.port });


const Routes=require('./lib/routes');

server.route(Routes);

// server.route({
//     method:'GET',
//     path:'/',
//     handler:(request,reply)=>{
//         reply('Hello world!!!')
//     }
// });
server.start((err) => {

    Hoek.assert(!err, err);
    
    console.log(`Server running at: ${server.info.uri}`);
    
    });
