const {view, Options, Locations} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView

        console.clear()
        console.log(title)
        printTable(table)

        //var updatedModel = model
        const option = await Options(model)
        const location = await Locations(model, option.input)
        const updatedModel = await update(model, option.input ,location.input)
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