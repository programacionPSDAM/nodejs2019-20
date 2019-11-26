const fs = require ('fs') 
console.log ('antes de llamar a read del fichero') 
const archivo = fs.readFile ( '/etc/passw', 'utf8', (err, datos) => {
    if (err) throw err
    console.log(datos)
}) 
console.log ('después de llamar a read del fichero') 