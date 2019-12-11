function ShowAlert(message) {
    alert(message);
}

function imprimir() {


    var objeto = document.getElementById('AreaImpresion');  //obtenemos el objeto a imprimir

    var ventana = window.open('', '_blank');  //abrimos una ventana vacía nueva
    ventana.document.write(objeto.innerHTML);  //imprimimos el HTML del objeto en la nueva ventana
    ventana.document.close();  //cerramos el documento
    ventana.print();  //imprimimos la ventana
    //ventana.close();  //cerramos la ventana

}

function downloadCSV() {
    var filename = "repdownload.csv";
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }
    
    var csvFile;
    var downloadLink;
    // CSV file
    csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
    
    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}