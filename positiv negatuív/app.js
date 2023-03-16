const div = document.querySelector('#div')
const input = document.querySelector('#input')



function checkNumber() {
    if (input.value > 0) {
        div.append('positiv')
        console.log("positiv");
    }
    else if (input.value < 0) {
        div.append('Negativ')
        console.log('negativ')
    }
    else {
        div.append('Noll')
        console.log('noll')
    }
}




