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

async function orderProduct(product)
{
    try{
        const  newProductResponse = await myProduct(product);
        console.log(newProductResponse);
        const order = await processProduct(newProductResponse);
        console.log(order);
    }
    catch(err)
    {
        console.error("Error", err)
    }
}
orderProduct("old");
orderProduct("new");
// myProduct("new")
//     .then(response =>{
//         console.log(response);
//         return processProduct(response);
//     })
//     .then(processResult=>{
//         console.log(processResult);
//     })
//     .catch(err => {console.error("Error", err)})


