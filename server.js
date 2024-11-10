const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const path = require('path');

// Обслуживаем статические файлы React-приложения
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(cors());
app.use(express.json());

// Простой API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
