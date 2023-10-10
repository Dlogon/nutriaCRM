const fs = require("fs");
const argv = process.argv;
const deleteIndex = argv[2];
console.log(process.cwd());

fs.writeFile("index.html", "New content",(e)=>{
    if(e)
        throw e;
    console.log("Created");
}
)
fs.appendFile("new.html", "<p>Hello</p>", (e)=>{
    if(e)
        throw e;
    console.log("appending to file");
})

fs.readFile("index.html", "utf-8", (err, content)=>{
    if(err)
    {
        console.error(err);
        throw err;
    }
        
    console.log(content);
});

fs.rename("./index.html", "main.html" , (err)=>{
    if(err)
        throw err;
    console.log("Name changed")
});

if(deleteIndex)
{
    fs.unlink("./main.html", (err)=>{
        if(err)
            throw err;
        console.log("Deleted")
    });
}


