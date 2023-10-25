require("dotenv").config();
const express = require('express');
const codeRouter = require('./Routes/code');
const userRouter = require("./Routes/user");
const problemRouter = require("./Routes/problem");
const solutionRouter = require("./Routes/solution");
const url = require('url');
const PORT = process.env.PORT || 5000;
const app = express();
app.use("/problems", problemRouter)
app.use("/solutions", solutionRouter)
app.use("/user", userRouter);
app.use('/code', codeRouter);
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT} || 5000`));
app.post('/', (req, res) => {
    let id = req.body.id;
    const doc = connection.get('examples', id);
    doc.fetch(err => {
        if (err) throw err;
        if (doc.type == null) {
            doc.create({ content: '', output: [''], input: [''], lang: [''] });
            return;
        }
    });
    res.send('Document created successfully');
});
