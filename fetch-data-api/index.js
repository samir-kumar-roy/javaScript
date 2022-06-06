const url = "https://jsonplaceholder.typicode.com/users";
const tableBody = document.querySelector("#tableBody");
function fetchData() {
    fetch(url)
        .then(res => res.json())
        .then(data => getUsers(data));
}
function getUsers(users) {
    for (let user of users) {
        tableBody.innerHTML += `
        <tr>
        <td>${user.address.city}</td>
        <td>${user.address.geo.lat}</td>
        <td>${user.address.geo.lng}</td>
        </tr>
        `;
    }

}

fetchData();
