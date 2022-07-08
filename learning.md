# [What is process.env.PORT in Node.js?] (https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js)

- In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.
- So process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.

```
const port = process.env.PORT || 3000;
```

- initially I create file in html. then i replace with .hbs
- express work top to buttom approach.

---

# start project

```
nodemon src/app.js
```
