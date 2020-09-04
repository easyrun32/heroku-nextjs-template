Inspiration from
https://github.com/mars/heroku-nextjs-custom-server-express

how will mongodb and next connect ?

at line 55 in server.js

my attempt

```
 // Example app-side routing
    app.get("/a", (req, res) => {
      const OBJECT_A = {
        A: "I WILL GET SOMETHING FROM MONGO AND SEND IT HERE???",
      };
      const queryParams = { id: OBJECT_A };
      console.log("app from route a");
      return nextApp.render(req, res, "/a", queryParams);

      //nextApp.render(req, res, THE PAGE THAT WILL BE LOADED(you could try /b), queryParams);

    });

```
