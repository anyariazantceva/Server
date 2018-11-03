const http = require("http");
const port = 4000;

const requestHandler = (request, response) => {
	console.log("Запрошен адрес: " + request.url);

};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log("Произошло безобразие: ", err);
	}

	console.log(`сервер запущен, порт: ${port}`);
});