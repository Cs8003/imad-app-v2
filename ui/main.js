var button = document.getElementById('counter');


button.onclick = function() {
  
  var request= new XMLHttprequest();
  
  request.onreadystatechange = function () {
    if (request.readystate===XMLHttpRequest.Done)
    {
        
        if(request.status === 200){
            var counter = request.responseText
    var span = document.getElementById('count');
  span.innerHTML = counter.toString();
        }
    }  
  };
  
};
