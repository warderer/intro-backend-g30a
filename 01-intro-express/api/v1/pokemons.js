//1. Importar express y el router de express
const express = require('express');
const router = express.Router();

// API para consumir
const BASE_URL = 'https://pokeapi.co/api/v2'

// http://localhost:3000/api/v1/pokemons?count=10

router.get('/api/v1/pokemons', async (req, res) => {
    const { count } = req.query;
    const response = await fetch(`${BASE_URL}/pokemon?limit=${count}`);
    const data = await response.json();
    res.send(data);
});

module.exports = router;