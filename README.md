
# MERN Stack Starter App

This is a MERN Stack Starter App, that allows you to quickly develop web apps, without annoying boilerplate. Everything is imported and configured. Even the basic authorization & authentication is provided, so you can save a few hours by starting your app with this template. 

## Installation

* Installing server:
```bash
npm install
```
* Installing client:
```bash
npm run client-install
# or
cd client
npm install
```

## Usage

* Running server only:
```bash
npm run server
```
* Running client only:
```bash
cd client
npm start
```
* Running both:
```bash
npm run dev
```

## Using MongoDB
* Connecting to local database:
```javascript
// server.js
(...)
mongoose
	.connect("mongodb://localhost/mytestapp",  { useNewUrlParser:  true  });
(...)
```
* Connecting to MongoDB Atlas:
```javascript
// server.js
(...)
const db = config.get("mongoURI");
mongoose
	.connect(db, { useNewUrlParser: true, useCreateIndex: true })
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));
(...)
```
```json
// config/default.json
(...)
{
	"mongoURI": "[your-mongodb-uri]",
	"jwtSecret": "[your-jwt-secret-token]]"
}
(...)
```