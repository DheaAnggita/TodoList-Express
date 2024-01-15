const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {

    const token = req.header('Authorization');
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Missing token' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden - Invalid token' });
        }

        // Attach the user information to the request object
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
