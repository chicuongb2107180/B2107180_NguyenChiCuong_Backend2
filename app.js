const express = require('express');
const cors = require('cors');
const ApiError = require('./app/api_error');
const app = express();
const contactsRouter = require('./app/routes/contact_route');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
        res.json({ message: 'Well come to contact book application' });
});
app.use("/api/contacts", contactsRouter);
app.use((req, res, next) => {
        return next(new AppiError(404, 'Not found'));
});
app.use((err, req, res, next) => {
        return res.status(err.statuscode || 500).json({ message: err.message || 'Internal server error' });
});
module.exports = app;