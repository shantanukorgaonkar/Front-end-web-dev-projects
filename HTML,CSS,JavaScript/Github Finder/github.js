class Github { // Class is a blueprint of an obj. When we say new Github, an object will be created with the content of this class

    constructor(){ // Constructor contains the prerequisites that needs to be created upon object formation 
        this.clientID='beb5b704901e93d6ee65', // Github application Auth
        this.clientSecret-'75b42ae2160005809068bc5963252d480a306ef5'  // Same as above
         this.reposCount=5; // to print the no of repo as there may be many repos but we want only 5
         this.reposSort='created: asc' // passing this as a param in the url to sort the repos. Latest appear first
}
async getUser(user){
    const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`)
    const repoResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}client_id=${this.clientID}&client_secret=${this.clientSecret}`)
    // Await is used when something returns a promise. Fetch returns a promise. Await makes sure that we proceed with code execution only when this promise is resolved.
    // Promise resolved basically means you get a response or a result
     
    const profileData = await profileResponse.json() // also returns a promise hence await is used. 
    const reposData= await repoResponse.json()

    return {
        profile:profileData, // .json() promiseResponse is the data in json format. So we return that data here. 
        repos:reposData
    }

    // Since this function is async, it will return a promise with the 'profiledata' as promiseResponse 
    // This promiseResponse will be handled by .then at the function call

} 
}