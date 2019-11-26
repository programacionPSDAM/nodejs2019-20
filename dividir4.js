const dividir = ( dividendo , divisor ) => {
    return new Promise (( resolve , reject ) => {
        setTimeout ( () => {
            if ( divisor === 0)
                return reject ( new Error ( 'Division por cero') )
            else
            return resolve ( dividendo / divisor )
        } , 1000)
    })
}
console.log ('Inicio del programa') ;
( async function () {
    try {
        const resultado = await dividir (20 , 3)
        console.log ( await dividir ( resultado , 3) )
    }
    catch ( err ) {
        console.log ( err )
    }
}) () ;

( async function () {
    try {
        console.log ( await dividir (20 , 0) )
    }
    catch ( err ) {
        console.log ( err )
    }
}) ()
    console . log ('Fin de programa')