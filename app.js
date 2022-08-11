const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

app.use(cors);
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(_dirname, "front/build")));
}

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
