const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware")
const musiccontroller = require("../controllers/music.controller");
const multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage()
});

router.post("/upload", upload.single("file"),authMiddleware.authArtist,musiccontroller.createMusic);

router.post("/album",authMiddleware.authArtist, musiccontroller.createAlbum,)

router.get("/",authMiddleware.authUser,musiccontroller.getAllMusics)

router.get("/albums",authMiddleware.authUser,musiccontroller.getAllAlbums)

router.get("/albums/:albumId",authMiddleware.authUser,musiccontroller.getAlbumById)
module.exports = router;