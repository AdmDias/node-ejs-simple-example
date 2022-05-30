const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", (request, response) => {
    const items = [
        { 
            title: "D",
            message: "eveloping web applications..."
        },
        {
            title: "E",
            message: "JS"
        },
        {
            title: "J",
            message: "avascript"
        }
    ]
    const subtitle = "Using EJS to render HTML pages using JS"
    response.render("pages/index", {
        qualitys: items,
        subtitle
    })
})

app.get("/about", (request, response) => {
    response.render("pages/about")
})

app.listen(5600)
console.log('Server iniciado.')
