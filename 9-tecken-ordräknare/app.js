document.querySelector('textarea').addEventListener('input', function (event) {
    console.log(event.target.value);
    const div = document.querySelector("#div")
    const str = `${event.target.value.length}`;
    div.innerHTML = str;
});