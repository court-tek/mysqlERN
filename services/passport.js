const passport = require("passport");
const Sequelize = require("sequelize");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../sequelize");
const keys = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
      done(null, user);
    })
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({
        where: { googleId: profile.id }
      }).spread((user, created) => {
        console.log(
          user.get({
            plain: true
          })
        );
        console.log(created);
      });
      // User.findOne({
      //   where: {
      //     googleId: profile.id
      //   }
      // }).then(user => {
      //   if (user != null) {
      //     console.log('user id is already in use');
      //   } else {
      //     User.create({
      //       googleId: profile.id
      //     })
      //   }
      // });
    }
  )
);
