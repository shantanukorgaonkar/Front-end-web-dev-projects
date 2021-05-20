 function easyHTTP(){
     console.log(this)
     this.http = new XMLHttpRequest()
 }


 easyHTTP.prototype.get=function(url){
     console.log(2,this)
     
 }