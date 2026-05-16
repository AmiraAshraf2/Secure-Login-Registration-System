const { sql, pools } = require("../db")

function sanitizeInput(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: "Email and password are required"
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                error: "Invalid email"
            });
        }

        let pool = await pools
        const result = await pool.request()
            .input('user', sql.NVarChar, email)
            .input('pass', sql.NVarChar, password)
            .query(` SELECT * FROM users WHERE email=@user AND password=@pass `);

        if (result.recordset.length > 0) { return res.status(200).json({ Message: "Login Sucessfully",user: result.recordset[0].Username }) }
        else { return res.status(401).json({ Message: "Invalid Username or Password " }) };
    } catch (err) { res.status(500).json({ Message: err.Message, stack: err.stack }) };
}

exports.register = async (req, res) => {
    try {
        const {username , email, password } = req.body;
        if (!username||!email || !password) {
            return res.status(400).json({
                error: "Email and password are required"
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                error: "Invalid email"
            });
        }
        const s_email = sanitizeInput(email);
        const s_password = sanitizeInput(password);
        const s_username = sanitizeInput(username);
        let pool = await pools
        await pool.request()
            .input("username", sql.NVarChar, s_username)
            .input("email", sql.NVarChar, s_email)
            .input("password", sql.NVarChar, s_password)
            .query(`
            INSERT INTO Users(Username,Email, Password)
            VALUES(@username,@email, @password)
         `);
        res.status(201).json({
            message: "User created",
            user: [
                s_email,s_password
            ]
        });


    }
    catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}