const User = require("../models/User");

const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = {
  registerUser: (req, res) => {
    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
      return res.status(400).json({
        msg: "Please enter all fields"
      });
    }

    // Check for existing user
    User.findOne({ email }).then(user => {
      if (user) return res.status(400).json({ msg: "User already exists" });

      const newUser = new User({
        name,
        email,
        password
      });

      // Hash password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            jwt.sign(
              {
                id: user.id
              },
              config.get("jwtSecret"),
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token: token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
                });
              }
            );
          });
        });
      });
    });
  },
  loginUser: (req, res) => {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
      return res.status(400).json({
        msg: "Please enter all fields"
      });
    }

    // Check for existing user
    User.findOne({ email }).then(user => {
      if (!user) return res.status(400).json({ msg: "User does not exist" });

      // Validate password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch)
          return res.status(400).json({ msg: "Invalid credentials!" });
        jwt.sign(
          {
            id: user.id
          },
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token: token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            });
          }
        );
      });
    });
  },
  getUserData: (req, res) => {
    User.findById(req.user.id)
      .select("-password")
      .then(user => res.json(user));
  }
};
