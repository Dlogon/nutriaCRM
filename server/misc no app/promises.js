
const myPromise = new Promise((resolve, rejected) =>{
    setTimeout(()=>{
        const myRand = (Math.random() *100).toFixed(0) % 100;

        console.log(myRand);
        myRand %2 == 0 ? resolve("Promise resolved", myRand) : rejected("this is odd")
        
    }, 3000)
})

myPromise.then((promiseResult, val) => {
    console.log(promiseResult, val);
})
.catch((err)=>{
    console.log(err)
})