const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("../configs/passport");

// Sign up

exports.signup = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Please provide a username and password" });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Username is already taken" });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser
      .save()
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "There was a problem creating the user" });
      });
  });
};

// Login

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, infoErr) => {
    if (err) return res.status(500).json({ err, infoErr });
    if (!user) return res.status(401).json({ msg: "This user doesn't exist" });
    req.logIn(user, err => {
      if (err) return res.status(500).json(err);
      res.status(200).json({ message: "logged in" });
    });
  })(req, res, next);
};

// Logout

exports.logout = (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
};

exports.profile = (req, res, next) => {
  res.status(200).json(req.user);
};
