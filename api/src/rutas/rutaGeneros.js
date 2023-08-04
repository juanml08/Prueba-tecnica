const { getGenres } = require("../controllers/genreControllers");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const genres = await getGenres();
    return res.status(200).send(genres);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
