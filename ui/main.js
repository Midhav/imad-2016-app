console.log('Loaded!');
var counter = 0;
button.onclick = function () {
    //CREATE REQ OBJECT
    var request = new XMLHttpRequest();

    //capture the response and store in a variable
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status == 200){
                var counter = request.responseText;
                    counter = counter + 1;
    var span = document.getElementById('count')l
    span.innerHTML = counter.toString();
            }
        }
    };
    //make the request
    request.open('GET','http://midhav.imad.hasura-app.io/counter', true);
    request.send(null);
    
}