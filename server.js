const http=require('http');
const fs=require('fs');

const server=http.createServer(async(req,res)=>{
console.log(req.url,req.method,req.headers);
const method=req.method;

if(req.url==='/'){

var ft=await require('fs');
ft.readFile('message.txt',(err,input)=>{
    if(err) throw err;
    console.log(input.toString());
res.write('<html>')
res.write('<head><title>Enter Message</title></head>')
 
//document 
res.write(`<body><p id="hii">${input.toString()}</p><form action="/message" method="POST"><input type="text" name="message" id="mess"><button>submit</button></form></body>`)
res.write('/<html>')
return res.end()
   // c= input.toString();
    

})
//console.log("c:",c);

//res.setHeader('Content-Type','home')

}
 if(req.url==='/message'&& method==='POST')
{
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);
    });
req.on('end',()=>{
    const parsedBody=Buffer.concat(body).toString();
    const message=parsedBody.split('=')[1];
    fs.writeFileSync('message.txt',message);
});

res.statusCode=302;
res.setHeader('Location','/');
return res.end();

//     res.setHeader('Content-Type','about')
// res.write('<html>')
// res.write('<head><title></title></head>')
// res.write('<body><h1>Welcome to About Us page</h1></body>')
// res.write('/<html>')
return res.end()
 }
// else if(req.url==='/node')
// {
//     res.setHeader('Content-Type','node')
// res.write('<html>')
// res.write('<head><title>My First Page</title></head>')
// res.write('<body><h1>Welcome to my Node Js Project</h1></body>')
// res.write('/<html>')
//  return res.end()
// }
//process.exit();
});
server.listen(5501);