require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup (EJS)
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('pages/home', { 
        title: 'Home',
        page: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { 
        title: 'About Us',
        page: 'about'
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).render('pages/404', { 
        title: 'Page Not Found',
        page: '404'
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/500', { 
        title: 'Server Error',
        page: '500'
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});