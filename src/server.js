import { people } from './people';
import express from 'express'
import {promises as fs} from 'fs'
let app = express();

//endpoint
app.get('/hello', (req, res) => {
    res.send("Hello Take some Rest");
});

//get endpoint
app.get('/people', (req, res) => {
    res.json(people );
});

//endpoint name url parameter
app.get('/people/:name', (req, res) => {
    let { name } = req.params;

    let person = people.find(x => x.name === name);
    res.json(person);
});

//read file data
app.get('/people', (req, res) => {

});

app.listen(3000, () => {
    console.log("server is listining on port 3000");
});