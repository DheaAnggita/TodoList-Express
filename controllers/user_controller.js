const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Import your User model
require('dotenv').config();

const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if the email is already registered
    console.log(email)
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    // Return a success message or user data
    res.status(201).json({ message: 'Registration successful', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Check if the passwords match
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    // Return the token and user data
    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { register, login };
