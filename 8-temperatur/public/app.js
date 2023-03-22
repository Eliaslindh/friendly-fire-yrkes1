fetchTemp()

document.querySelector('#select').addEventListener('change', () => {
  fetchTemp()
})


async function fetchTemp() {
  let select = document.querySelector('select').value
  const res = await fetch(`/api/temperature/${select}`);
  let data = await res.json();

  displayTemp(data)
  function displayTemp(data) {
    document.querySelector('#temperature').innerHTML = `
        <table>
          <tr">
            <th> Country </th>
            <th> Year </th>
            <th> Average Temperature </th>
          </tr>
          ${data.map(temp => `
            <tr>
              <td> ${temp.country}</td>
              <td> ${temp.year}</td>
              <td> ${temp.averageTemperature}</td>
              </tr>`).join('')}
        </table>
      `;
  }
  displayTemp(data)
}






