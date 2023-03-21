let parent = document.querySelector('#parent')

document.querySelector('button').addEventListener('click', () => {
    let input = document.querySelector('input').value
    if (input == 0) {
        parent.innerHTML = `<h1 class="green">Ange en giltig ålder</h1>`
    } else if (input < 13) {
        parent.innerHTML = `<h1 class="blue">Du är ett barn</h1>`
    } else if (input < 20) {
        parent.innerHTML = `<h1 class="red">Du är en tonåring</h1>`
    }
    else if (input < 64) {
        parent.innerHTML = `<h1 class="red">Du är Vuxen</h1>`
    }
    else if (input > 65) {
        parent.innerHTML = `<h1 class="red">Du är Gamal</h1>`
    }

})




