function myProduct(product){
    return new Promise((resolve, reject) => {
        console.log(`Ordered ${product}`)

        setTimeout(() => {
            if(product == "new")
                resolve("new product")
            reject("No new")
        },2000)
    })
} 

function processProduct(response){
    return new Promise(resolve => {
        console.log("procesing", response);
        setTimeout(()=>{resolve("new product Proceced")}, 4000)
    })
}

myProduct("old")
    .then(response =>{
        console.log(response);
        return processProduct(response);
    })
    .then(processResult=>{
        console.log(processResult);
    })
    .catch(err => {console.error("Error", err)})
