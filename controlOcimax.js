let credencial = prompt('¿Buenas tardes, tiene su credencial de vacunación? (si/no)').toLocaleLowerCase()

if (credencial === 'si') {
    console.log('*** Usted, está autorizada para comprar la entrada ***')
} else {
    console.log('*** Usted NO, está autorizada para comprar la entrada ***')
}
