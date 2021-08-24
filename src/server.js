import { people } from './people';
import express from 'express';
import bodyParser from 'body-parser';
import { promises as fs } from 'fs'
let app = express();

app.use(bodyParser.json()) ;
//endpoint
app.get('/hello', (req, res) => {
    res.send("Hello Take some Rest");
});

//get endpoint
app.get('/people', (req, res) => {
    res.json(people);
});

//get endpoint name url parameter
app.get('/people/:name', (req, res) => {
    let { name } = req.params;

    let person = people.find(x => x.name === name);
    res.json(person);
});

//get read file data
app.get('/file-data', async (req, res) => {
    let data = await fs.readFile(__dirname + "/people-data.json");
    let people = JSON.parse(data);
    res.json(people);

});


//POST endpoint
app.post('/people', (req, res) => {
    let newPerson = req.body;
    people.push(newPerson);
    res.json(people);
});




app.listen(3000, () => {
    console.log("server is listining on port 3000");
});