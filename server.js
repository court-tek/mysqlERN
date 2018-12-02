const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require("./config/keys");
require('./services/passport');
const Cors = require('cors');
const app = express();


const PORT = process.env.PORT || 5000;

app.use(Cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
