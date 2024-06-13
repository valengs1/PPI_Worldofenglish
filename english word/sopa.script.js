document.addEventListener("DOMContentLoaded", function() {
    const words = ["LEÓN", "GATO", "RANAELEFANTE", "OSO", "ONCE", "PIN", "ZEBRA"];
    const wordSearch = document.getElementById("word-search");

    // Función para generar la sopa de letras
    function generateWordSearch() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const rows = 10;
        const cols = 10;

        let grid = "";
        for (let i = 0; i < rows; i++) {
            grid += "<div class='row'>";
            for (let j = 0; j < cols; j++) {
                const letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                grid += `<div class='cell'>${letter}</div>`;
            }
            grid += "</div>";
        }

        wordSearch.innerHTML = grid;
    }

    generateWordSearch();
});
document.addEventListener("DOMContentLoaded", function() {
    const words = ["LION","CAT", " ELEPHANT", "BEAR", "DOG","PIG","ZEBRA"];
    const wordSearch = document.getElementById("word-search");
    const wordListItems = document.querySelectorAll(".word-list li");
    let selectedWord = "";

    // Función para generar la sopa de letras
    function generateWordSearch() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const rows = 10;
        const cols = 10;

        let grid = "";
        for (let i = 0; i < rows; i++) {
            grid += "<div class='row'>";
            for (let j = 0; j < cols; j++) {
                const letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                grid += `<div class='cell'>${letter}</div>`;
            }
            grid += "</div>";
        }

        wordSearch.innerHTML = grid;
    }

    // Función para verificar si la palabra seleccionada es correcta
    function checkWord() {
        const selectedCells = document.querySelectorAll(".selected");
        let selectedWord = "";
        selectedCells.forEach(cell => {
            selectedWord += cell.textContent;
        });
        
        if (words.includes(selectedWord)) {
            alert("¡Encontraste la palabra!");
            // Aquí puedes agregar cualquier acción adicional que desees realizar cuando se encuentre una palabra
        } else {
            alert("Esa no es la palabra correcta. Intenta de nuevo.");
        }
    }

    // Evento de clic en una celda de la sopa de letras
    wordSearch.addEventListener("click", function(event) {
        if (event.target.classList.contains("cell")) {
            const selectedCell = event.target;
            selectedCell.classList.toggle("selected");

            // Verifica si se ha seleccionado una palabra completa
            checkWord();
        }
    });

    // Generar la sopa de letras al cargar la página
    generateWordSearch();
});