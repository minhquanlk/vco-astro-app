import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { URL } from 'url';
import cors from 'cors';
import helmet from 'helmet';

import dotenv from 'dotenv';
dotenv.config();

import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
app.use(cors());
app.use(express.static('dist/client/'));


app.use((req, res, next) => {
    const locals = {
        title: 'New title',
    };

    ssrHandler(req, res, next, locals);
});
app.use(function(req, res) {
    res.status(404).redirect('/404');
});

// app.use(onRequest);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running at ${port}`));



// import createError from 'http-errors';
// import express from 'express';
// import path from 'path';
// import { URL } from 'url';
// import setupApp from './middleware/setupApp.js';
// import cors from 'cors'
// import dotenv from 'dotenv';
// dotenv.config();


// var app = express();
// const __dirname = new URL('.',
//     import.meta.url).pathname;

// // Set static folder
// app.use(express.static('dist/client/'));

// setupApp('/', path.join('file:///', __dirname, 'dist'), app);
// // catch 404 and forward to error handler
// app.use(function(req, res) {
//     res.status(404).redirect('/404');

// });

// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.send(err);
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running at ${port}`));