const passport = require("passport");
const Sequelize = require("sequelize");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const User = require("../sequelize");


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      User.findOne({
        where: {
          googleId: profile.id
        }
      }).then(() => {
        User.create({
          googleId: profile.id
        })
      })
    }
  )
);
