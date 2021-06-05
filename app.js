const {Input, Value, firstUnit, secondUnit} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        const input = await Input(model)
        const value = await Value(model)
        const FUnit = await firstUnit(model)
        const SUnit = await secondUnit(model)
        //console.log(iB, iT)
        const updatedModel = update(input.input ,value.input, FUnit.input, SUnit.input)
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