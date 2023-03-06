fetchMessage()
async function fetchMessage() {
      const res = await fetch('/api/messages');
      let data = await res.json();
      console.log(data);
      document.querySelector('#parent').innerHTML = `
            ${data.map(message => `<div><h1>${message.messages} </h1> <p> ${message.timeStamp}</p> </div>`).res.join(``)}
      `;
}

const socket = io()

const send = document.getElementById('btn')

send.addEventListener('click', () => {
      socket.emit('msg', document.getElementById('msg-input').value)
      document.getElementById('msg-input').value = ''
})

socket.on('msg', (msg) => {
      document.getElementById('ul').innerHTML += `<li>${msg}</li>`
})
