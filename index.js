// import modules
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

// import body-parser
app.use(express.json());

// import routers
app.use("/posts", require("./routers/postsRouter"));



// start server
app.listen(process.env.PORT || 3000, () =>
{
	console.log(`Server running on http://localhost:${process.env.PORT}`);
});
