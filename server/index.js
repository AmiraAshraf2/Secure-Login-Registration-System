require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authrouter = require('./routes/auth.route')


const app = express();
const port = process.env.PORT || 5000;


app.use(cors()); 
app.use(express.json());

app.use("/auth",authrouter)

// const dbConfig = {
//     // user: process.env.DB_USER,
//     // password: process.env.DB_PASSWORD,
//     server: process.env.DB_SERVER,
//     database: process.env.DB_NAME,
//     driver: 'msnodesqlv8',
//     options: {
//         trustedConnection: true
//     }
//     // options: {
//     //     encrypt: false, // Set to true if you are using Azure SQL
//     //     trustServerCertificate: true // Required for local development with self-signed certs
//     // }
// };

// app.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;

//     // Validate input
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     try {
//         // 1. Connect to the database
//         let pool =  await sql.connect(dbConfig);
        
        

//         // 2. Query the user by email
//         // We use parameterized queries (.input) to prevent SQL Injection attacks
//         let result = await pool.request()
//             .input('input_email', sql.NVarChar, email)
//             .query('SELECT * FROM Users WHERE Email = @input_email');

//         const user = result.recordset[0];

//         // 3. Check if user exists
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // 4. Verify password
//         // IMPORTANT: In production, use bcrypt to compare hashed passwords!
//         // Example: const match = await bcrypt.compare(password, user.Password);
//         if (user.Password === password) {
//             res.status(200).json({ 
//                 message: 'Login successful', 
//                 user: { id: user.Id, email: user.Email } 
//             });
//         } else {
//             res.status(401).json({ message: 'Invalid email or password' });
//         }

//     } catch (err) {
//         console.error('Database error:', err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });
// async function  connecttry () {
//     try {
//     let pool = await sql.connect(dbConfig);

//     const result = await pool
//       .request()
//       .query('SELECT * FROM users');

//     console.log(result.recordset); // cleaner output

//   } catch (err) {
//     console.error('Database error:', err);
//   } finally {
//     sql.close(); // optional but good practice
//   }
       
// }

// connecttry ();

// Start the server
app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
    
});