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


//////////////////////////////////////
///////////// Peliculas //////////////
//////////////////////////////////////


app.get('/pelicula', function (req, res) {
    res.json(cine.pelicula);
    });

app.get('/pelicula/:id', function (req, res) {
    let id = req.params.id;
    let peliculas = cine.pelicula.filter(p => p.id == id);
    res.json(peliculas);
});

app.post('/pelicula', (req, res) => {
    const { title, enCartelera } = req.body;
    if (title && enCartelera) {
        let id = cine.pelicula[cine.pelicula.length - 1].id + 1;
        let newMovie = { id , ...req.body };
        cine.pelicula.push(newMovie);
        fs.writeFileSync("./movies.json", JSON.stringify(cine));
        res.json(cine);
    }
    else {
        res.send('<div>hubo un error agregando la pelicula</div>');
    }
});

app.put('/pelicula', (req, res) => {
    const { id } = req.query;
    const { title, enCartelera} = req.body;
    if (title && enCartelera) {
        cine.pelicula.forEach(movie => {
            if (movie.id == id) {
                movie.title = title;
            }
        });
        fs.writeFileSync("./movies.json", JSON.stringify(cine));
        res.json(cine);
    }
    else {
        res.send('<div>hubo un error editando la pelicula</div>');
    }
});

app.put('/eliminar', (req, res) => {
    const { id } = req.query;
    const { title, enCartelera} = req.body;
    if (title && enCartelera) {
        cine.pelicula.forEach(movie => {
            if (movie.id == id) {
                movie.enCartelera = false;
            }
        });
        fs.writeFileSync("./movies.json", JSON.stringify(cine));
        res.json(cine);
    }
    else {
        res.send('<div>hubo un error elimnando la pelicula</div>');
    }
});

//////////////////////////////////////
///////////// Reservas ///////////////
//////////////////////////////////////



app.get('/reserva', function (req, res) {
    res.json(cine.reserva);
    });

app.get('/reserva/:id', function (req, res) {
    let id = req.params.id;
    let reserva = cine.reserva.filter(r => r.id == id);
    res.json(reserva);
});

app.post('/reserva', (req, res) => {
    const { cantAsientos, SalaId } = req.body;
    if (cantAsientos && SalaId) {
        let id = cine.reserva[cine.reservas.length - 1].id + 1;
        let nuevaRes = { id , ...req.body };
        cine.reserva.push(nuevaRes);
        fs.writeFileSync("./movies.json", JSON.stringify(cine));
        res.json(cine);
    }
    else {
        res.send('<div>hubo un error agregando la pelicula</div>');
    }
});

app.put('/reserva', (req, res) => {
    const { id } = req.query;
    const { cantiAsientos, salaId} = req.body;
    if (cantiAsientos && salaId) {
        cine.reserva.forEach(r => {
            if (r.id == id) {
                r.cantAsientos = cantiAsientos;
                r.salaId = salaId;
            }
        });
        fs.writeFileSync("./movies.json", JSON.stringify(cine));
        res.json(cine);
    }
    else {
        res.send('<div>hubo un error editando la pelicula</div>');
    }
});

app.delete('/reserva', (req, res) => {
    const { id } = req.query;
    cine.reserva.forEach(r => {
        if (r.id == id) {
            cine.reserva.splice(cine.reserva.indexOf(r), 1);
        }
    });
    fs.writeFileSync("./movies.json", JSON.stringify(cine));
    res.json(cine);
});