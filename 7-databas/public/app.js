fetchMovies()
async function fetchMovies() {
    const res = await fetch('/api/games');
    let gamesdb = await res.json();
    displayMovies(gamesdb);
}

function displayMovies(games) {
    document.querySelector('#yes').innerHTML = `
        <table>
          <tr">
            <th> Name </th>
            <th> Release Date </th>
            <th> Genre </th>
            <th> publisher </th>
          </tr>
          ${games.map(game => `
            <tr>
              <td> ${game.name}</td>
              <td> ${game.release_date} </td>
              <td> ${game.genre}</td>
              <td> ${game.publisher}</td> </tr>`).join('')}
        </table>
      `;
}


