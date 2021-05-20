 function easyHTTP(){
    
     this.http = new XMLHttpRequest() // we  need to use this here since it has to bind to whatever object when it is called using new
   
 }

// GET request definition
 easyHTTP.prototype.get=function(url,callback){  // prototype of the eassyHTTP object 
// callback is used to perform some operation on a result in that very instance.
//Instead of waiting for a return and then performing the operation. 

     this.http.open('GET',url,true)
         let self=this // binding this(referring to lib) to self because inside onload this will refer to XHRHTTP obj
     this.http.onload=function(){
        if(self.http.status===200){ // function called as soon as status = 200, response is passed as a param 
            callback(null,self.http.responseText) // error param is null since this is the success part
        }else{ // handling error
            callback('Error :' + self.http.status)   // error param is passed since this the error part. 
        }

       
     }
     
     this.http.send()
 }

 // POST request definition

 easyHTTP.prototype.post=function(url,data,callback){ // data to be sent or POSTed 
     this.http.open('POST',url,true)
     this.http.setRequestHeader('Content-type','application/json') // tells the type of data returned
        let self =this
     this.http.onload=function(){
          callback(null,self.http.responseText)
     }


     this.http.send(JSON.stringify(data))// since we are sending data we need to pass the data that we are sending. 
     // data is in the js object form. needs to be converted to string before sending. because data exists in the browser in the form of strings
 }


 // PUT request Definition

 easyHTTP.prototype.put=function(url,data,callback){ // data to be sent or updated
    this.http.open('PUT',url,true)
    this.http.setRequestHeader('Content-type','application/json') // tells the type of data returned
       let self =this
    this.http.onload=function(){
         callback(null,self.http.responseText)
    }


    this.http.send(JSON.stringify(data))// since we are sending data we need to pass the data that we are sending. 
    // data is in the js object form. needs to be converted to string before sending. because data exists in the browser in the form of strings
}


// DELETE request definition

easyHTTP.prototype.del=function(url,callback){   
   
    
         this.http.open('DELETE',url,true)
             let self=this 
         this.http.onload=function(){
            if(self.http.status===200){ 
                callback(null,'Post deleted') // When we delete data it returns an empty obj. Hence the custom text
            }else{ 
                callback('Error :' + self.http.status)  
            }
    
           
         }
         
         this.http.send()
     }