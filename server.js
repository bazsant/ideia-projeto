const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/${ideia-projeto}`));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/${ideia-projeto}/index.html`));
});

app.listen(process.env.PORT || 8080);