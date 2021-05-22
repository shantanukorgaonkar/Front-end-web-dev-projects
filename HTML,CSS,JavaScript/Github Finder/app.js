// INIT CLASS

const github = new Github
// INIT UI Class

const ui =new UI

// Search input

const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup',(e)=>{
    // Get input text
    const userText=e.target.value;

    if(userText!=='')
    {
       // Make HTTP Call
        
       github.getUser(userText).then((userData)=>{ // userData contains the promiseResponse of async GetUser which is an object with profiel and repos
           if(userData.profile.message==='Not Found')
           { 
                // Show Alert

                ui.showAlert('User not found', 'alert alert-danger')
           } else {
               
            // Show Profile
            ui.showProfile(userData.profile)
            ui.showRepos(userData.repos)
           }
       })



    } else{
        // Clear Profile

        ui.clearProfile()


    }
})