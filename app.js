const {view, Options, Location} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        console.log("Hola jose")
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        const option = await Options(model)
        const location = await Location(model)
        const updatedModel = update(model, option.input ,location.input)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}

//comentario extra