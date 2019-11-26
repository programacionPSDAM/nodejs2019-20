const dividir = (dividendo, divisor, callback) => {
    setTimeout( () => {
        if (divisor === 0) {
            return callback (new Error ('División por cero'))
        } else  {
            return callback (null, dividendo / divisor)
        }
    }, 1000)
}

console.log('inicio de programa')
dividir (20 , 3, (err , data) => {
    if (err) {
        console.log(err)
    } else {
        dividir (data, 3, (err, resultado) =>{
            if (err) console.log(err)
            else console.log(resultado)
        })
    }
})
dividir (20 , 0, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    } 
})
console.log('Fin de programa')



