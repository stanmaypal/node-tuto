const http=require('http');
const pal=(req,resp)=>{

    resp.write("<h1> code zack hello pal This me aobut you Sarvesh & Tanmay</h1> ");
    resp.end();
}

http.createServer(pal).listen(4000);