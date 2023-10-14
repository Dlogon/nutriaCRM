import EventEmitter from "events";

const productEmmitter = new EventEmitter();

productEmmitter.on("buy", (total)=>{
    console.log(`buy was do it $${total}`)
} );

productEmmitter.emit("buy", 100);

