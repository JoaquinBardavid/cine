const express = require("express");
const app = express();
const cors = require('cors');
const cine = require('./cine.json')
const fs = require('fs');
const { json } = require("express");
const port = 5000;

app.use(express.json({
    limit: "50mb"
}))
app.use(cors());

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
    let peliculas = cine.pelicula.filter(p => p.id == id)[0];
    res.json(peliculas);
});

app.post('/pelicula', (req, res) => {

    let id = cine.pelicula[cine.pelicula.length - 1].id + 1;
    let newMovie = { id, ...req.body };
    cine.pelicula.push(newMovie);
    fs.writeFileSync("./cine.json", JSON.stringify(cine));
    res.json(cine.pelicula);
});

app.put('/pelicula', (req, res) => {
    const { id } = req.query;
    const { titulo } = req.body;
    cine.pelicula.forEach(movie => {
        if (movie.id == id) {
            movie.titulo = titulo;
        }
    });
    fs.writeFileSync("./cine.json", JSON.stringify(cine));
    res.json(cine.pelicula);
});

app.put('/cambioCartelera/:id', (req, res) => {
    let id = req.params.id;
    let salaId = req.body.salaId;
    cine.pelicula.forEach(p => {
        if (p.id == id) {
            p.salaId = salaId;
        }
    });
    fs.writeFileSync("./cine.json", JSON.stringify(cine));
    res.json(cine);
});

app.delete('/pelicula/:id', (req, res) => {
    let id = req.params.id;

    cine.pelicula.forEach(p => {
        if (p.id == id) {
            cine.pelicula.splice(cine.pelicula.indexOf(p), 1)
        }
    });
    fs.writeFileSync("./cine.json", JSON.stringify(cine));
    res.json(cine);
});

//////////////////////////////////////
///////////// Reservas ///////////////
//////////////////////////////////////

app.get('/reserva', function (req, res) {
    res.json(cine.reserva);
});

app.get('/reserva/:id', function (req, res) {
    let id = req.params.id;
    let reserva = cine.reserva.filter(r => r.peliId == id);
    res.json(reserva);
});

app.post('/reserva', (req, res) => {

    let id = cine.reserva[cine.reserva.length - 1].id + 1;
    let nuevaRes = { id, ...req.body };
    cine.reserva.push(nuevaRes);
    fs.writeFileSync("./cine.json", JSON.stringify(cine));
    res.send(200);

});

app.delete('/reserva/:id', (req, res) => {
    const id = req.params.id;
    let aux = [];
    aux = cine.reserva.filter(a => a.peliId != id) 
    cine.reserva = aux;
    fs.writeFileSync("./cine.json", JSON.stringify(cine));
    res.send(200);
});