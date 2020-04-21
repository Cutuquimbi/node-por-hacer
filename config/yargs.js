const descripcion = {
    demand: true,
    alias: 'd'

}
const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Agregar una tarea', {
        descripcion
    })
    .command('listar', 'Imprime en cosola')
    .command('borrar', 'Borra la tarea', {
        descripcion
    })
    .command('actualizar', 'Crea un txt con la tabla', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}