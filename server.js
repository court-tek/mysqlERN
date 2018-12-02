const express = require('express');
require('./services/passport');
const Cors = require('cors');
const app = express();


const PORT = process.env.PORT || 5000;

app.use(Cors());

require('./routes/authRoutes')(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
