
const http = require('http');
const fs = require('fs');
const os = require('os');

http.createServer(function (req, res) {
  
  fs.readFile('week1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    html = data.toString();
    const total_memory_MB = Math.round(os.totalmem() / 1024 / 1024);

    html = html.replace("{{type}}", os.type());
    html = html.replace("{{hostname}}", os.hostname());
    html = html.replace("{{cpu_num}}", os.cpus().length);
    html = html.replace("{{total_mem}}", total_memory_MB + " MB");

    res.write(html);
    return res.end();
  });

}).listen(3000);