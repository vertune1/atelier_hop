// Einfaches Beispiel, um den Absende-Button im Kontaktformular zu aktivieren
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formular abgesendet!');
});
