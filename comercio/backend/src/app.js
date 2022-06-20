const express = require("express");
const app = express();
const cors = require('cors');
const cine = require('./cine.json')
const fs = require('fs');
const { json } = require("express");
const port = 5000;

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.get('/', function (req, res) {
    res.json(cine.pelicula);
    });

app.get('/movie', function (req, res) {
    let aux = null;
    cine.pelicula.forEach(movie => {
        if(movie.id == req.query.id){
            aux = movie;
        }
    })
    if(aux != null)
        {res.json(aux); }
    else
        {res.send("no se encontró la pelicula")}
    });

app.post('/', (req, res) => {
    const { title, director} = req.body;
    if (title && director) {
        let id = cine.pelicula[cine.pelicula.length - 1].id + 1;
        let newMovie = { id , ...req.body };
        cine.pelicula.push(newMovie);
        fs.writeFileSync("./movies.json", JSON.stringify(cine));
        res.json(cine);
    }
    else {
        res.send("hubo un error agregando la pelicula");
    }
});

app.put('/editMovie', (req, res) => {
    const { id } = req.query;
    const { title, director} = req.body;
    if (title && director) {
        cine.forEach(movie => {
            if (movie.id == id) {
                movie.title = title;
            }
        });
        fs.writeFileSync("./movies.json", JSON.stringify(cine));
        res.json(cine);
    }
    else {
        res.send("hubo un error editando la pelicula");
    }
});

app.delete('/', (req, res) => {
    let aux = cine;
    const { id } = req.query;
    aux.forEach(movie => {
        if (movie.id == id) {
            cine.splice(cine.indexOf(movie), 1);
        }
    });
    fs.writeFileSync("./movies.json", JSON.stringify(cine));
    res.send(cine);
})