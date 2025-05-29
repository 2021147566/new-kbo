fetch('./src/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.header').innerHTML = data;
    });
fetch('./src/components/player.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.player').innerHTML = data;
    });
fetch('./src/components/scoreboard.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.scoreboard').innerHTML = data;
    });
fetch('./src/components/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.side-bar').innerHTML = data;
    });