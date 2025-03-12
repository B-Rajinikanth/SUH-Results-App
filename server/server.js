import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import studentsRoute from './routes/studentsRoute.js';

const app = express()

const PORT = process.env.PORT || 5555
const connectionString = 'mongodb+srv://rajinikanthb:SUHResultsDB2025@resultsdb.tzbvk.mongodb.net/?retryWrites=true&w=majority&appName=ResultsDB'

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Sreenidhi University results portal!')
})

app.use('/students', studentsRoute);

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB connected successfully!!!")
    app.listen(PORT, ()=> { console.log(`Server is running on PORT: ${PORT}!`)})
}).catch((error)=>console.log(error))

// app.use(
//     cors({
//         origin: 'http://localhost:5173/',
//         methods: ['GET', 'POST', 'DELETE', 'PUT '],
//         allowedHeaders: [
//             "Content-Type",
//             "Authorization",
//             "Cache-Control",
//             "Expires",
//             "Pragma"
//         ],
//         credentials: true
//     })
// );
