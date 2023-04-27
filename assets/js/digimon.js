$.ajax({
    type: "get",
    url:'https://digimon-api.vercel.app/api/digimon',
    dataType: "json",
    success: function (response) {
        tabla(response);
    }
});

function tabla(datos) {
    var cuerpoTabla = document.querySelector('#cuerpoTabla');
    for (var i = 0; i < datos.length; i = i + 1) {
        var fila = document.createElement('tr');
        var columnaUno = document.createElement('th');
        var columnaDos = document.createElement('th');
        var columnaTres = document.createElement('th');
        
        columnaUno.innerHTML = datos[i] .name;
         columnaDos.innerHTML = "<img src=" + datos[i].img + ">";
        columnaTres.innerHTML = datos[i].level;
        
        fila.append(columnaUno, columnaDos, columnaTres);
        cuerpoTabla.append(fila);
    }
}

