fetchQuote()
async function fetchQuote() {
      const res = await fetch('/api/quote');
      let data = await res.json();
      document.querySelector('#parent').innerHTML = `
            <h1>"${data.quote}"</h1>
            <div id="center">
            <div><div id="lines"> </div></div> 
             <p> ${data.author}</p>
             <div><div id="lines"></div></div>
            </div>
      `;
}


