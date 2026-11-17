const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

function sendHtml(res, fileName) {
    const filePath = path.join(__dirname, 'public', fileName);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Server error');
            return;
        }
        res.type('html').send(data);
    });
}
app.get('/', (req, res) => {
    sendHtml(res, 'index.html');
});
app.get('/about', (req, res) => {
    sendHtml(res, 'about.html');
});
app.get('/contact', (req, res) => {
    sendHtml(res, 'contact.html');
});
app.use((req, res) => {
    res.status(404).send('404 - Page not found');
});
app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});