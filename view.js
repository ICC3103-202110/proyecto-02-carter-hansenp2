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
    const printing_list = []
    for (var i = 0; i < model.length; i++){
        var Name = model[i].Name
        var Temp = model[i].Temp
        var Min = model[i].Min
        var Max = model[i].Max
        var m = {'name': Name, 'temp': Temp, "min": Min, "max": Max}

        printing_list.push(m)
    }
   return printing_list
}

function Locations(model, option){
    const input = model;
    var m
    if (option === 'Add City'){
        m= 'Location?'
        return inquirer.prompt([
            {
                name: 'input',
                type: 'input',
                default: m,
                message: m,
            
                validate: function(value){
                    if (parseInt(value)){
                        return "La ciudad no puede ser un número. Intenta denuevo."
                    }
                    return true
                }
                    /*
                    for (var i = 0; i<model.length; i++){
                        if(value === model[i].Name){
                            return true
                        }
                    }
                    return 'La ciudad que ingresaste no existe'
                    }
                    */
                
            }
        ])
    }
    else {
        m = option
        const choices = []
        for (var i = 0; i< input.length; i++){
            choices.push(input[i].Name)
        }
        return inquirer.prompt([
            {
                name: 'input',
                type: 'list',
                default : m,
                message : m,
                choices: choices,
                validate: function(value){
                    if (parseInt(value)){
                        return "La ciudad no puede ser un número. Intenta denuevo."
                    }
                    return true
                }
            }
        ])
    }
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
    Locations,
}
