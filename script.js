function generateTable() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const output = document.getElementById("table-output");

    output.innerHTML = "";

  
    if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

 
    for (let i = start; i <= end; i++) {
        let box = document.createElement("div");
        box.className = "table-box";
        box.innerHTML = `<strong>Table of ${i}</strong><br/>`;

       
        for (let j = 1; j <= 10; j++) {
            if (j === 6) continue; 
            if (i === 7 && j === 8) break; 
            box.innerHTML += `${i} x ${j} = ${i * j}<br/>`;
        }

        output.appendChild(box);
    }
}
