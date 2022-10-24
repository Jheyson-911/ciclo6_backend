import express from "express";

import "./models/asociaciones.js";

const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.json({
        message: "Hi Welcome to mi Api for PY"
    })
})


export default app;