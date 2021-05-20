


const lib = new easyHTTP // here easyHTTP is called. so this inside the func def will bind to lib. lib refers to an obj containing props and methods from easyHTTP def
// lib refers to an object containing props of easyHTTP constructor.
// http prop inside the constructor refers to the XHRHTTPRequest obj



// GET Request



// lib.get('http://jsonplaceholder.typicode.com/posts',function(err,response){ // url has to be of type string,this is the def of the callback
// //Callback is Called inside the func you have passed it to, it's definition is the param

// if(err){ // if error is returned. error is NULL when no error since NULL is what is passed as arg in the callback func call. 
//     console.log(err)
// }
// else{
// console.log(response) 
// }
// }) 


// POST request



// const data={
//     title:'abcd',
//     body:'the alphabet is cool'
// }

// lib.post('http://jsonplaceholder.typicode.com/posts',data,function(err,res){
// if(err)
// {
//     console.log(err)
// }else{
//     console.log(res) // response of POST is the data we have sent. we get our sent data with the last id since it is added at the end
                         // Proving that the data has been added successfully
// }
// })


// PUT REQ


// const updateData={
//     title:'abcd',
//     body:'the alphabet is cool'
// }

// lib.put('http://jsonplaceholder.typicode.com/posts/25',updateData,function(err,res){ // notice the 25. PUT will update the data with our data at id:25
// if(err)
// {
//     console.log(err)
// }else{
//     console.log(res) // response is the 25th data updated with our data. Hence indicating successful update
// }
// })


// DELETE request

lib.del('http://jsonplaceholder.typicode.com/posts/25',function(err,res){
    if(err)
    {
        console.log(err)
    } else{
        console.log(res) // response will be empty object but we have given a custom respone in the callback call 
    }
})
