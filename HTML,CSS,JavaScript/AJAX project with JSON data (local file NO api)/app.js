document.getElementById('button1').addEventListener('click',loadStudentData)

function loadStudentData()
{
    const xhr = new XMLHttpRequest

    xhr.open('GET','students.json',true); // initiates the process. 'http req type','filename','async indicattor(T/F)'

    xhr.onload= function(){  // callback function. Executes when onload is complete.
 if(xhr.status===200) // status =200 means all OK. Page not found is 404, forbidden is 403
{ console.log(this.responseText)
    const students = JSON.parse(this.responseText) // the response is the entire file. it is in the form of string. Need to parse it so we can use it as an object.
     let output='' // if not initialised to empty string, first value will be undefined 
    students.forEach(student => {
     output+= `<ul> 
     <li>${student.name}</li>
     <li>${student.roll_no}</li>
     <li>${student.class}</li>
     <li>${student.percentage}</li> 
     </ul>`
     
    });

    console.log(output)

    document.getElementById('student-data').innerHTML=output

}

    }

    xhr.send() // Loads and starts the process 
}