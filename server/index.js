import express from 'express'; // for routing of application.
import bodyParser from 'body-parser';  // this is used to send request.
import mongoose from 'mongoose';  // to create model for our post.
import cors from 'cors';  // for cors origin request.
import postRoutes from './routes/posts.js';


const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb+srv://Ashar:hamzakhan001@cluster0.u3qtt.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);