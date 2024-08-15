const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require("morgan");
const userRoutes = require('./route/routes');
const productRoutes = require('./route/productRoutes');
const blogRoutes = require('./route/blogRoutes');
const orderRoutes = require('./route/orderRoutes');  // Make sure the path is correct
const serviceRoutes = require('./route/serviceRoutes');
const app = express();
const port = process.env.PORT || 9992;

// Middleware
app.use(morgan("combined"));
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:4200" }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/petopiadb", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log("Successfully connected to DB"))
.catch(error => console.log("Error connecting to DB:", error));

// Routes
app.use(userRoutes);
app.use('/products', productRoutes);
app.use("/blogs", blogRoutes);
app.use("/orders", orderRoutes);
app.use("/services", serviceRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something broke!' });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
