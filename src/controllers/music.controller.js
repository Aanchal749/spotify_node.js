const musicModel = require("../model/music.model");
const albumModel = require("../model/album.model");
const { uploadFile } = require("../services/storage.services");

async function createMusic(req, res) {
  try {
    const { title } = req.body;
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No file uploaded" });
    if (!title) return res.status(400).json({ message: "Title is required" });

    const result = await uploadFile(file);
    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: req.user.id,
    });
    return res.status(201).json({ message: "music created", music });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function createAlbum(req, res) {
  try {
    const { title, musics } = req.body;
    if (!title) return res.status(400).json({ message: "Title required" });
    const album = await albumModel.create({ title, artist: req.user.id, musics: musics || [] });
    return res.status(201).json({ message: "Album created", album });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getAllMusics(req, res) {
  try {
    const musics = await musicModel.find().skip(2).limit(2)
    return res.status(200).json({ message: "Music Fetched successfully", musics });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getAllAlbums(req,res){
  const albums = await albumModel.find().select("title artist").populate("artist","username email")

  res.status(200).json({
    message:"all album fetched sucessfully",albums:albums,
  })}
  async function getAlbumById(req,res){
    const albumId=req.params.albumId;
  const album = await albumModel.findById(albumId).populate("artist","username email")
   res.status(200).json({message:"Album found sucessfully",album:album})
  }


module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbums,getAlbumById };