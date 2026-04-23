const express = require("express");
const fs = require("fs");
const app = express();

// ส่วนที่ 3 ข้อ 1
app.get("/members_text", (req, res) => {
  fs.readFile("members.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading members.html");
    }
    res.setHeader("Content-Type", "text/plain");
    res.send(data);
  });
});

// ส่วนที่ 3 ข้อ 2
app.use((req, res) => {
  res.send("Hello Thammasat!");
});

// ส่วนที่ 3 ข้อ 3
app.get("/auth/:username/:password", (req, res) => {
  const userParam = req.params.username;
  const passParam = req.params.password;

  fs.readFile("auth.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading auth.json file");
    }

    try {
      const jsonData = JSON.parse(data);
      const usersList = jsonData.users;
      const matchedUser = usersList.find(
        (u) => u.username === userParam && u.password === passParam,
      );

      if (matchedUser) {
        res.send(`Hello ${matchedUser.name} ${matchedUser.lastname}!`);
      } else {
        res.status(403).send("403 Access Denied.");
      }
    } catch (parseError) {
      res.status(500).send("Error parsing JSON data");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 (Server-p3)");
});
