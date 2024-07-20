function createTable() {

  const table = document.getElementById('myTable');
  table.innerHTML = '';

  const rn = prompt('Input number of rows');

 
  const cn = prompt('Input number of columns');

  
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}

