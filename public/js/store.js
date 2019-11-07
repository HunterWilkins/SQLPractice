$(document).ready(function(){
    
    $.getJSON("/api/products/all", function(data){
        data.forEach(function() {
            $("#store-items").append(`
            <div class = "item">
                <h3>${data.name}</h3>
                <p>${data.price}</p>
            </div>
            
            `)
        })
    })
})