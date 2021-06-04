// Object property shorthand

const name ='Shantanu'
const userAge='22'

const user={
    name, // when key and value have same name, we can write it only once.
    age:userAge,// age is not same as userAge, so we have type the whole key-value pair
    location:'Goa'
}

// console.log(user)

// Object destructuring

const product={
    label:'Red book',
    price:3,
    stock: 200,
    salePrice:undefined
}


// const label=product.label
// const price=product.price

// To do whats done above(extracting a value and assigning to a new var with same name)
// There is a shorthand

// const {label:productLabel,price,rating,author='Jim'}=product // gets label and price and stores it in a new consts called label and price
 // RHS of = is the object from whom we are extracting
// if we put a name that isnt there i.e rating, it will be undefined. As there is no rating in the object
// if we do not want to name these new consts same as its obj key name, we can change it. Eg how we changed label to productLabel abv
// notice author. It is not there in the object but we are setting it to be jim. But if author would exist in the obj, it would be the value it is assigned to inside the obj and  not what we are assigning.

// console.log(productLabel,price,rating,author)

const abc=(type,{label,stock})=>{ // we know obj is passed so we are destructuring here it self
console.log(label,stock) 
}

abc('some type',product)