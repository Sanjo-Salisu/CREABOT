const express = require("express");
const fs = require("node:fs");
const path = require("node:path");
const app = require("../app");

const router = express.Router();

/* Articles Model  

id - String 
Title - String
Content - String
Image - Url(string)
CreatedAt - Date
UpdatedAt - Date
*/

//Read File

router.get("", (_req, res) => {
  fs.readFile(
    path.join(__dirname, "../data/articles.json"),
    "utf8",
    (error, data) => {
      if (error) {
        return res.json({ error: "Cannot find file ❌" });
      }
      return res.render("index", { articles: JSON.parse(data) });
    }
  );
});

// Write to file
router.post("", async (req, res) => {
  const { articles } = req.body;
  const jsonData = JSON.stringify({ articles });

  fs.writeFile(
    path.join(__dirname, "../data/articles.json"),
    jsonData,
    "utf8",
    (error) => {
      if (error) {
        return res.json({ error: "Error writing to file ❌" });
      }
      return res.json({ message: "File updated successfully" });
    }
  );
});

// Update File
router.put("/:id", (req, res) => {
  const articleID = req.params.id;
  const updatedData = req.body;

  fs.readFile(
    path.join(__dirname, "../data/articles.json"),
    "utf8",
    (error, data) => {
      if (error) {
      }

      let jsonData = JSON.parse(data);

      fs.writeFile(
        path.join(__dirname, "../data/articles.json"),
        JSON.stringify(jsonData, null, 2),
        "utf8",
        (error) => {
          if (error) {
            return res.json({ error: "Cannot find file " });
            return res.json({ error: "Error updating file ❌" });
          }
          return res.json({ message: "File updated successfully" });
        }
      );
    }
  );
});

module.exports = { router };
