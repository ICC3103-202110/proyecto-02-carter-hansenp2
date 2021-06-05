
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function update(option, location){
    if (option === "Add City"){
        return {
            Name: location,
            Temp: 50,
            Min: 0,
            Max:100,
        }
    }
    else if (option=== "Update City"){
        const min = randomNumber(-30, 100)
        const max = randomNumber(min, 100)
        const temp = randomNumber(min, max)
            return {
                Name: location,
                Min: min,
                Max: max,
                Temp: temp,
            }
        }
    else if (input === 'n'){
        if (FUnit === "Celsius"){
            if (SUnit === "Fahrenheit"){
                transformed_value = C_to_F(value)
            }
            if (SUnit === "Kelvin"){
                transformed_value = C_to_K(value)
            }
        }
        if (FUnit === "Fahrenheit"){
            if (SUnit === "Celsius"){
                transformed_value = F_to_C(value)
            }
            if (SUnit === "Kelvin"){
                transformed_value = F_to_K(value)
            }
        }
        if (FUnit === "Kelvin"){
            if (SUnit === "Celsius"){
                transformed_value = K_to_C(value)
            }
            if (SUnit === "Fahrenheit"){
                transformed_value = K_to_F(value)
            }
        }
        return {
            LeftValue: transformed_value,
            LeftUnit: SUnit,
            RightValue: value,
            RightUnit: FUnit,
            input: "Y",
        }
    }
}

module.exports = {
    update
}