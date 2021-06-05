const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {printTable} = require('console-table-printer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const Name = model.Name
    const Temp = model.Temp
    const Min = model.Min
    const Max = model.Max
    return [
        {'name': Name, 'temp': Temp, "min": Min, "man": Max},
    ]
}

function Location(model){
    const input = model.input
    const message = 'Location? '
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            //default: 'Y/n',
            /*
            validate: function(value){
                if(value === 'Y' || value === "n"){
                    return true
                } else {
                    return 'Enter either a "Y" or "n"'
                }
            }
            */
        }
    ])
}

function Options(model){
    const {input} = model
    const message = 'Select an option: '
    const choices = ['Add City', 'Update City', 'Delete City']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    Options, 
    Location,
}
