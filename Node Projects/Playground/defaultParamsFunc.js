const greeter =(name)=>{
    console.log(`hello ${name}`)
}

greeter() // Greeter is taking an argument. But if we do not pass anything to it the name is undefined by default
// So in the console we get hello undefined which isnt desirable

// To solve this we are able to set a default value to any param when no nothing is passed to the func.
// Though if we pass a param, then the default value does not apply and the param will take the value that is passed to it.

const greeting =(name='user')=>{ // setting user as default value of name
    console.log(`hello ${name}`)
}

greeting() // this will display hello user on the console. The param can be set default to anything(i.e string, num, function,bool etc)
greeting('paul') // This will display hello paul and not hello user since arg is provided i.e'paul'

// a very peculiar thing happens when we are expecting an obj to be passed and we destructure it but we do not receive that obj.




const book={
    title:'Tinkle',
    author:'Supandi'
}
const practice=({title,author})=>{ // obj recieved is destructured into its keys
    console.log(`${author}:${title}`) // this will dispay the author and title in console
}

practice(book) // obj book is passed as arg
practice() // will give an error saying cant destructure undefined since nothing is passed as a param

// if we do not pass an obj, we get an error because we cannot destructure undefined. 
// to solve this we set an default value of the param to an empty object. by doing so the destructured keys(i.e title and author) will be undefined and code wont break

const pracs=({title,author='none'}={})=>{ // assigning default value to that destructured param as empty obj. By doing so title will be undefined but author will be none as we are giving that a default value too 
    console.log(`${author}:${title}`)// this will print none:undefined. 
}
pracs() // no param passed

// this is done to safeguard when we are destructuring an obj that we are expecting to be recieved as a param.
// So incase we do not get the desired obj as a param, we assign a empty obj so code does not break
