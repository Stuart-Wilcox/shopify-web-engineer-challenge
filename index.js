const fs = require('fs');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("./application/dist/application"));

app.get('/', (req, res) => {
	let page = fs.readFileSync('./application/dist/application/index.html', 'UTF-8');
	res.set('Content-Type', 'text/html');
	res.send(page);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
