const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,  // ADD THIS
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT // ADD THIS
});

async function uploadFile(file) {
    // file is buffer, convert to base64
    const base64File = file.toString("base64");

    const result = await imagekit.files.upload({
        file: base64File,
        fileName: "music_" + Date.now() + ".mp3",
        folder: "spotify-music/music"
    });

    return result;
}

module.exports = { uploadFile };