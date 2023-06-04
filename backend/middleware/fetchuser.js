const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Siddisagoodbo$y'

const fetchuser = (req, res, next) => {
    // Get the user from JWT token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please auntheticate using a valid token" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
    } catch (error) {
        res.status(401).send({ error: "Please auntheticate using a valid token" })
    }
    next()
}





module.exports = fetchuser;