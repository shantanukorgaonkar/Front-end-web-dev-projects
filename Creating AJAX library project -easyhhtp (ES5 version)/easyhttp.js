 function easyHTTP(){
     console.log(this)
     this.http = new XMLHttpRequest() // we  need to use this here since it has to bind to whatever object when it is called using new
   
 }


 easyHTTP.prototype.get=function(url){
     console.log(2,this)
     
 }