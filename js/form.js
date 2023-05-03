$(document).ready(function() {
    // Función para expandir o contraer la barra lateral al hacer clic en el botón
    $('#sidebarCollapse').click(function() {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
});

$('form').submit(function(event) { 
    event.preventDefault();
    var idFiles=[];
    $("input[type=file]").each(function(index,value){
        var form_data = new FormData();
        var file_data=$(value).prop("files")[0];
        form_data.append("file", file_data);
        $.ajax({
            url: "http://superpoli.somee.com/api/File/cargar-archivo",
            method:"POST",
            enctype: 'multipart/form-data',
            data: form_data,
            processData: false,  // tell jQuery not to process the data
            contentType: false,   // tell jQuery not to set contentType
            success: function(result){
                console.log(result);
                idFiles[index]=result;
            },
            complete: function(){
                if(idFiles!= null && idFiles.length==$("input[type=file]").length){
                    enviarProductos(idFiles);
                }else{
                    console.log('no ha terminado, index'+$("input[type=file]").length+' idfiles'+idFiles.length);
                }
            }
        });
    });
    return false;
}); 
function enviarProductos(ids){
    $.ajax({
        url: "http://superpoli.somee.com/api/Product",
        method:"POST",
        dataType: 'application/json',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        data:JSON.stringify({
            "activo": true,
            "nameProduct": ""+$('#nameProduct').val(),
            "price": ""+$('#price').val(),
            "descriptions": ""+$('#descriptions').val(),
            "quantity": ""+$('#quantity').val(),
            "promotion": ""+$('#promotion').is(':checked'),
            "idFile": ids
        }),        
        success: function(result){
            console.log(result);
        }
    });
}
// {
//     "activo": true,
//     "nameProduct": $('').val(),
//     "price": $('').val(),
//     "descriptions": $('').val(),
//     "quantity": $('').val(),
//     "promotion": $('').val(),
//     "idFile": ids
//   }