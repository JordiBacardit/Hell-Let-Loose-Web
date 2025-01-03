window.onload = function() {
    localStorage.removeItem('userName');
    var userName = prompt("Introdueix el teu nom:");
    if (userName) {
        localStorage.setItem('userName', userName);
        document.getElementById('user-name').textContent = "Benvingut " + userName;
    }
};