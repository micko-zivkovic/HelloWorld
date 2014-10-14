document.addEventListener("deviceready", function(){
   
	if(navigator.network.connection.type == Connection.NONE){
		alert('No Network');
	} else {
		alert('Yes Network');
	}
 
});

console.log('test');