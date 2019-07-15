const table = document.getElementById('pixelCanvas')
document.getElementById('sizePicker').addEventListener('submit',function(e){
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
    e.preventDefault();
});

// Select table size input (defying row, column)
function makeGrid(height, width) {
    table.innerHTML = '';
    let row ;
    let column ; 
    for(let h = 0 ; h < height ; h++){
        row = document.createElement('tr');
        for(let w = 0 ; w < width ; w++){
            column= document.createElement('td') ;
            row.appendChild(column);
    }
    table.appendChild(row);
    }

    // Select color input
    table.addEventListener('click', function(e){
        let color = document.getElementById('colorPicker').value;
        e.target.style.backgroundColor = color;
    });
}