// 引用http模块
var http = require("http");
 
// 创建服务端
http.createServer(function (request, response) {
	// 输出网页头信息，200状态
	response.writeHead(200, {
		// 网页MIME类型
		"content-type": "text/html"
	});
 
	// 输出网页内容
	response.write("<h1>Hello world!</h1>");
 
	// 控制台输出
	console.log("Hello world!");
 
	// 结束输出
	response.end();
})
 
// 监听8888端口
.listen(8888);