const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Person = require('./models/reduxSchema')

// Middleware!
app.use(express.json());
//app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors())

const dbURI = 'mongodb+srv://starprince:<DB_PASSWORD>@starprince.m9v4i.mongodb.net/Projects?retryWrites=true&w=majority'

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log('Connected to the Database!...')
        app.listen(5000, ()=> {
            console.log('Server is listening!... live on port 5000')
        })
    })
    .catch(err => {
        console.log(err)
    })

    // Listen for post request
app.post('/post', (req, res)=> {
    console.log('Post request made!')
    console.log(req.body)
    const userData = new Person(req.body)
    userData.save()
        .then((result) => {
            console.log('saved to the database...')
            res.send('Success saved to the database')
        })
        .catch(err => {
            console.log(err)
            res.send('Complete the fields') // The "User" model has both the name, lastName as field required! 
        })
})

app.get('/users', (req, res)=> {
    Person.find()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.log(err)
        })
})

app.delete('/users/:id', (req, res)=> {
    console.log('ID FROM THE DELETE REQUEST ', req.params.id)
    Person.findById(req.params.id)
        .then(result => {
            Person.deleteOne()
             .then(result => res.send('Successs!.. user Has Been Deleted From The DataBase'))
             .catch(err => {console.log('error from deletingUser ', err)})
             
        })
        .catch(err => {
            console.log('Error finding user... ', err)
        })
})
