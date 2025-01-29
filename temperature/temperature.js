const celcuisEl = document.getElementById("celcuis");
const faraheitEl = document.getElementById("faraheit");
const kelvinEl = document.getElementById("kelvin");

// function that convert

function convert(event) {

    const actualStatus = event.target.value

    switch (event.target.name) {
        case "celcuis":
            faraheitEl.value = ((actualStatus*(9/5))+32).toFixed(2);
            kelvinEl.value = (actualStatus - 273.15).toFixed(2);
            break;
            case "faraheit":
            kelvinEl.value = ((actualStatus-32)*(9/5)+273.15).toFixed(2);
            celcuisEl.value = ((actualStatus-32)*1.8).toFixed(2)
            break;
            case "kelvin":
            faraheitEl.value = ((actualStatus*(9/5))+32).toFixed(2);
            celcuisEl.value = (actualStatus-273.15).toFixed(2);       
            break;
    
        default:
            break;
    }
    
}

