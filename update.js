
const axios = require('axios');


function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

async function getTemp(location) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=349564031cddd40d3d10cd1f6ab39d82&units=metric"

    const datos =[]
    try {
        const response = await axios.get(url);
        datos[0] = response.data.main.temp; datos[1] = response.data.main.temp_min;
        datos[2] = response.data.main.temp_max;
        return datos;
    } catch (error) {
      console.error("\nHa habido un error contactando a la API");
    }
  }

async function update(model, option, location){

    if (option === 'Add City'){
        datos = await getTemp(location)
        if (model[0].Name === " "){
            model.pop()
        }
        m = {
            Name: location,
            Temp: datos[0],
            Min: datos[1],
            Max: datos[2],
        }
        model.push(m)
        return model
    }
    else if (option=== "Update City"){ 
        datos = await getTemp(location)
        m = {
            Name: location,
            Temp: datos[0],
            Min: datos[1],
            Max: datos[2],
        }

        for (var i = 0; i < model.length; i++){
            if (model[i].Name == location){
                model[i] = m
                break
            } 
        }

        return model
    }
    else if (option === "Delete City"){
        const new_model = []

        for (var i = 0; i < model.length; i++){
            if (model[i].Name !== location){
                new_model.push(model[i]) 
            }
        }

        if (new_model.length == 0){
            new_model.push({ Name: " ",
            Temp: " ",
            Min: " ",
            Max: " ",})
        }
        return new_model
        
    }
}


//Update para parte 1
/*
function update(model, option, location){
    const min = randomNumber(-30, 100)
    const max = randomNumber(min, 100)
    const temp = randomNumber(min, max)

    if (option === "Add City"){
        if (model[0].Name === " "){
            model.pop()
        }

        m = {
            Name: location,
            Temp: getTemp(location),
            Min: getTempMin(location),
            Max: getTempMax(location),
        }
        model.push(m)
    }
    else if (option=== "Update City"){
        
        const min = randomNumber(-30, 100)
        const max = randomNumber(min, 100)
        const temp = randomNumber(min, max)
        
        m = {
            Name: location,
            Min: getTempMin(location),
            Max: getTempMax(location),
            Temp: getTemp(location),
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
*/
module.exports = {
    update
}