
const axios = require('axios');


function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
const database = []

/*
function getTemp(location){
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=349564031cddd40d3d10cd1f6ab39d82&units=metric"
    axios.get(url)
        .then(function (response) {
            // handle success
            return response.data.main.temp
        })
        .catch(function (error) {
            // handle error
            console.log("\nHa habido un error al acceder a la API");
        })
        .then(function () {
            // always executed
        });
}

function getTempMin(location){
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=349564031cddd40d3d10cd1f6ab39d82&units=metric"
    axios.get(url)
        .then(function (response) {
            // handle success
            return response.data.main.temp_min
        })
        .catch(function (error) {
            // handle error
            console.log("\nHa habido un error al acceder a la API");
        })
        .then(function () {
            // always executed
        });
}

function getTempMax(location){
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=349564031cddd40d3d10cd1f6ab39d82&units=metric"
    axios.get(url)
        .then(function (response) {
            // handle success
            return response.data.main.temp_max
        })
        .catch(function (error) {
            // handle error
            console.log("\nHa habido un error al acceder a la API");
        })
        .then(function () {
            // always executed
        });
}
*/
async function getTemp(location) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=349564031cddd40d3d10cd1f6ab39d82&units=metric"
    try {
        const response = await axios.get(url);
        return response.data.main.temp;
    } catch (error) {
      console.error("\nHa habido un error contactando a la API");
    }
  }

async function getTempMax(location) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=349564031cddd40d3d10cd1f6ab39d82&units=metric"
    try {
        const response = await axios.get(url);
        return response.data.main.temp_max;
    } catch (error) {
        console.error("Ha habido un error contactando a la API");
    }
}

async function getTempMin(location) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=349564031cddd40d3d10cd1f6ab39d82&units=metric"
    try {
        const response = await axios.get(url);
        return response.data.main.temp_min;
    } catch (error) {
        console.error("Ha habido un error contactando a la API");
    }
}

function update(model, option, location){
    if (option === 'Add City'){
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
        return model
    }
    else if (option=== "Update City"){ 
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