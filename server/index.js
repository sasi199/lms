const express = require('express');
const cors = require('cors');
const subjectRoutes = require('./routes/subject_route');
const libraryItemsRouter = require('./routes/library_route');
const connectDB = require('./models/connection');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Call the connectDB function to establish the MongoDB connection
connectDB();

// Prefix all subject routes with /api
app.use('/api', subjectRoutes);



app.use('/api', libraryItemsRouter);

const Port = process.env.PORT || 5000 ;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
