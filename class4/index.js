const express = require("express");
const app = express();

const user = [
  {
    name: "Ayush",
    kidney: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
      {
        healthy: false,
      },
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const JohnKidney = user[0].kidney;
  const totalKidneys = JohnKidney.length;
  let numOfHealthyKidney = 0;
  for (let i = 0; i < totalKidneys; i++) {
    if (JohnKidney[i].healthy) {
      numOfHealthyKidney += 1;
    }
  }
  const numOfUnhealthyKidney = totalKidneys - numOfHealthyKidney;
  res.json({ totalKidneys, numOfHealthyKidney, numOfUnhealthyKidney });
  //   res.send("The total number of Kidneys you have are:" + totalKidneys);
});

app.use(express.json());
//user can add the kidney
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].kidney.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

//to change the status of all the kidneys
app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidney.length; i++) {
    user[0].kidney[i].healthy = true;
  }
  res.json({});
});

//to remove all the kidneys
app.delete("/delete", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < user[0].kidney.length; i++) {
    if (user[0].kidney[i].healthy == true) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  user[0].kidney = newKidneys;
  res.send("deleted");
});
app.listen(3000);
