const http=require('http');
const server=http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
if(req.url=='/home'){
res.setHeader('Content-Type','home')
res.write('<html>')
res.write('<head><title></title></head>')
res.write('<body><h1>Welcome Home</h1></body>')
res.write('/<html>')
res.end()
}
else if(req.url=='/about')
{

    res.setHeader('Content-Type','about')
res.write('<html>')
res.write('<head><title></title></head>')
res.write('<body><h1>Welcome to About Us page</h1></body>')
res.write('/<html>')
res.end()
 }
else if(req.url=='/node')
{
    res.setHeader('Content-Type','node')
res.write('<html>')
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Welcome to my Node Js Project</h1></body>')
res.write('/<html>')
 res.end()
}
process.exit();
});
server.listen(5501);