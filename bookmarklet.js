if ( window.location = "https://www.dondominio.com/buscar/" || window.location = "https://www.mrdomain.com/buscar/") {
    var disponible = document.querySelectorAll("div.domainsearch-available");
    var resultados = [];
    if (Object.keys(disponible).length > 0) {
        Object.entries(disponible).forEach(([key, value]) => {
            resultados.push([value.childNodes[0].textContent, value.childNodes[3].textContent]);
        });
        crearTabla(resultados);
    }
    function crearTabla(dominios) {
        var tabla = '<table><thead><th>dominio</th><th>precio(s)</th></thead><tbody>';
        for (var i = 0; i < dominios.length; i++) {
            tabla += '<tr><td>' + dominios[i][0] + '</td><td>' + dominios[i][1] + '</td></tr>';
        };
        tabla += '</table>';
        var nuevaVentana = window.open("")
        nuevaVentana.document.write(tabla);
    }
}
