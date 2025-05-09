document.addEventListener("DOMContentLoaded", () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            document.getElementById("user-photo").src = user.picture.large;
            document.getElementById("user-name").textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById("user-gender").textContent = `Sesso: ${user.gender === "male" ? "Maschio" : "Femmina"}`;
            document.getElementById("user-email").textContent = user.email;
            document.getElementById("user-phone").textContent = user.phone;
            document.getElementById("user-dob").textContent = `Data di nascita: ${new Date(user.dob.date).toLocaleDateString("it-IT")}`;
            
            const address = `${user.location.street.name}, ${user.location.street.number}, ${user.location.city}, ${user.location.country}`;
            document.getElementById("user-address").textContent = address;
        })
        .catch(error => console.error("Errore nel recupero dati:", error));
});
