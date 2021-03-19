const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "vaishu30",
  database: "suppliermaster",
  insecureAuth: true
});

app.get("/", (req, res) => {
  res.send({ message: "Server get success" });
});

app.post("/create", (req, res) => {
  const code = req.body.code;
  const name = req.body.name;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const address3 = req.body.address3;
  const city = req.body.city;
  const pincode = req.body.pincode;
  const contact = req.body.contact;
  const telephone = req.body.telephone;
  const accode = req.body.accode;
  const gst = req.body.gst;

  db.query(
    "INSERT INTO supplier (code, name, address1, address2, address3, city, pincode, contact, telephone, accode, gst) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [code, name, address1, address2, address3, city, pincode, contact, telephone, accode, gst],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("your server is running on port 3001");
});
