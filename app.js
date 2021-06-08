const {view, Options, Add_Location, Update_Location, Delete_Location, All_Locations} = require('./view')
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
        var location = " "
        const option = await Options(model)
        if(option.input == 'Add City'){
            location = await Add_Location(model)
        }
        else if (option.input == 'Update City'){
            location = await All_Locations(model)
            //location = await Update_Location(model)
        }
        else if (option.input == 'Delete City'){
            location = await All_Locations(model)
            //location = await Delete_Location(model)
        }

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