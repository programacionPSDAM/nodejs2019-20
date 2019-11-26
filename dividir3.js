const dividir = (dividendo, divisor) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout ( () =>{
            if (divisor === 0) {
                return reject (new Error('División por cero'))
            } else {
                return resolve(dividendo / divisor)
            }
        }, 1000)
    })
}
console.log('inicio de programa')
dividir (20 , 3)
    .then ((resultado) => dividir(resultado, 3))
    .then ((resultado) => console.log(resultado))
    .catch ((err) => console.log(err))

dividir (20 , 0)
    .then ((resultado) => console.log(resultado))
    .catch ((err) => console.log(err))
console.log('fin de programa')
