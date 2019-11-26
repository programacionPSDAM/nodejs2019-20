const http = require ( "http" )
const server = http.createServer ()
server.on ( "request" , ( req , res ) => {
    res.statusCode = 200
    res.setHeader ( 'Content-Type' , 'text/plain')
    res.end ( 'Hola Mundo\n')
})
server . listen (4000)