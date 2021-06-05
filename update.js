
function C_to_F(value){
    return  parseInt(value)*1.8 + 32
}
function C_to_K(value){
    return parseInt(value) + 273.15
}
function F_to_C(value){
    return (parseInt(value) - 32)*5/9
}
function F_to_K(value){
    return C_to_K(F_to_C(value))
}
function K_to_C(value){
    return  parseInt(value) - 273.15
}
function K_to_F(value){
    return C_to_F(K_to_C(value))
}
function update(input, value, FUnit, SUnit){
    var transformed_value = 0
    if (FUnit === SUnit){
        return {
            LeftValue: value,
            LeftUnit: FUnit,
            RightValue: value,
            RightUnit: SUnit,
            input: "Y",
        }
    }
    if (input === "Y"){
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
                LeftValue: value,
                LeftUnit: FUnit,
                RightValue: transformed_value,
                RightUnit: SUnit,
                input: "Y",
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