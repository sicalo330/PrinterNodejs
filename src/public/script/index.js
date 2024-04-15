document.getElementById('btnConexion').addEventListener('click', () => {
    fetch('http://localhost:4040/print')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
});