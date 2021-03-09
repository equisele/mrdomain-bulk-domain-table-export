if ( window.location == "https://www.dondominio.com/buscar/" || window.location == "https://www.mrdomain.com/buscar/") {
    var available = document.querySelectorAll("div.domainsearch-available");
    var results = [];
    if (Object.keys(available).length > 0) {
        Object.entries(available).forEach(([key, value]) => {
            results.push([value.childNodes[0].textContent, value.childNodes[3].textContent]);
        });
        createTable(results);
    }
    function createTable(domains) {
        var myTable = '<table><thead><th>Domain</th><th>Price(s)</th></thead><tbody>';
        for (var i = 0; i < domains.length; i++) {
            myTable += '<tr><td>' + domains[i][0] + '</td><td>' + domains[i][1] + '</td></tr>';
        };
        myTable += '</table>';
        var myWindow = window.open("");
        myWindow.document.write(myTable);

    }
}
