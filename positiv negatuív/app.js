let parent = document.querySelector('#parent')

document.querySelector('button').addEventListener('click', () => {
    let input = document.querySelector('input').value
    if (input > 0) {
        parent.innerHTML = `<h1 class="green">Detta är positiv</h1>`
        document.getElementById('h1').style.color = "green"
    } else if (input == 0) {
        parent.innerHTML = `<h1 class="blue">Detta är noll</h1>`
        document.getElementById('h1').style.color = "blue"
    } else {
        parent.innerHTML = `<h1 class="red">Detta är negativ</h1>`
        document.getElementById('h1').style.color = "red"
    }
})




