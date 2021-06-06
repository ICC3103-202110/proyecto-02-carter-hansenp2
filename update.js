
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
const database = []

function update(model, option, location){
    if (option === "Add City"){
        m = {
            Name: location,
            Temp: 50,
            Min: 0,
            Max:100,
        }
        model.push(m)
    }
    else if (option=== "Update City"){
        const min = randomNumber(-30, 100)
        const max = randomNumber(min, 100)
        const temp = randomNumber(min, max)

        m = {
            Name: location,
            Min: min,
            Max: max,
            Temp: temp,
        }

        for (var i = 0; i < model.length; i++){
            if (model[i].Name == location){
                model[i] = m
                break
            } 
        }
    }
    else if (option === "Delete City"){
        const index = model.indexOf(location)

        if (index > -1) {
            model.splice(index, 1);
          }
        
        const new_model = []
        for (var i = 0; i < model.length; i++){
            if (model[i].Name !== location){
                new_model.push(model[i]) 
            }
        }

        return new_model
        
    }

    return model
}

module.exports = {
    update
}