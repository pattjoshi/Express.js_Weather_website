
# [Express-js_Note](https://github.com/pattjoshi/Node.js_Note/blob/master/Express-js_Note.md)

## [What is process.env.PORT in Node.js?](https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js)

- In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.
- So process.env.PORT || 8000 means: whatever is in the environment variable PORT, or 8000 if there's nothing there.

```
const port = process.env.PORT || 8000;
```

- initially I create file in html. then i replace with .hbs
- express work top to buttom approach.

# Use stack:-

- Express.js
  -Handlebars(hbs)
- css
- JavaScript
- Bootstrap-4
- Font-awesome -v-5.10

# diff span and div

- span re text same line re rahe ba.
- div re text Next line rahe c.

---

- Those cond are repited capt inside the partials folder

## Adding anather fole

```
 {{>navbar}}
```

- ***

## listening to the port no at 8000

# start project

```
nodemon src/app.js
```

# Routing in Express.js

```
app.get("/about", (req, res) => {
  res.render("about");
});
```

# Adding 404 page

```
app.get("*", (req, res) => {
  res.render("404page", {
    errorMsg: "Opps! page not found, Click Here to go back",
  });
});
```

- Adding ssh format push

# [I learn from Hear](https://www.youtube.com/watch?v=DiVxOfUEbfk&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=36)
