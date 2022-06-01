const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = 3001;

const db = require("./db");
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/myposts', (req, res) => {
    db.query("SELECT * FROM posts", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
})

app.post("/reportpost", async (req,res) =>{
  const post_id = req.body.post_id;
  const reason = req.body.reason;
  db.query("INSERT INTO reported (post_id,reason) VALUES (?,?)",[post_id,reason],(err,result)=>{
      if (err) {
          console.log(err);
        } else {
          res.send("Post reported");
        }
  });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });