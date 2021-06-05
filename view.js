const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {printTable} = require('console-table-printer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Unit Convertor App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const leftT = model.LeftValue
    const leftV = model.LeftUnit
    const rightT = model.RightValue
    const rightV = model.RightUnit
    return [
        {leftValue: leftT, leftUnit: leftV, rightValue: rightT, rightUnit: rightV},
    ]
}

function Input(model){
    const input = model.input
    const message = 'Left temperature is source? '
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: 'Y/n',
            validate: function(value){
                if(value === 'Y' || value === "n"){
                    return true
                } else {
                    return 'Enter either a "Y" or "n"'
                }
            }
        }
    ])
}

function Value(model){
    const input = model.inputB
    const message = 'Temperature value to convert? '
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input,
            validate: function(value){
                if(parseInt(value) || value === '0'){
                    return true
                } else {
                    return 'The temperature value must be an integer'
                }
            }
        }
    ])
}

function firstUnit(model){
    const {input} = model
    const message = 'From?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}

function secondUnit(model){
    const {input} = model
    const message = 'To?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
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
    Input,
    Value,
    firstUnit,
    secondUnit,
}
