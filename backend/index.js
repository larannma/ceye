const express = require('express');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    next();
  });

app.get('/', (req, res) => {
    res.send([
        {
            "id": 1,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "🟠",
            "errors": "uploading..."
        },
        {
            "id": 2,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "⚪",
            "yaDisk": "⚪",
            "errors": "uploading..."
        },
        {
            "id": 3,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "⚪",
            "errors": "uploading..."
        },
        {
            "id": 4,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "🟠",
            "errors": "uploading..."
        },
        {
            "id": 5,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "🟢",
            "errors": "uploading..."
        },
        {
            "id": 5,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "🟢",
            "errors": "uploading..."
        },
        {
            "id": 5,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "🟢",
            "errors": "uploading..."
        },
        {
            "id": 5,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "🟢",
            "errors": "uploading..."
        },
        {
            "id": 5,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "🟢",
            "errors": "uploading..."
        },
        {
            "id": 5,
            "path": "C://path",
            "name": "name",
            "kodek": "kodek",
            "lenght": "lenght",
            "resolution": "resolution",
            "size": "size",
            "FPS": "FPS",
            "audio": "🟢",
            "looped": "true",
            "blackField": "🟢",
            "flash": "🟢",
            "yaDisk": "🟢",
            "errors": "uploading..."
        }
    ]); 
}); 

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})

