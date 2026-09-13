const jwt = require("jsonwebtoken");

function authArtist(req, res, next) {
    const token = req.cookies.token; // FIX 1: cookies plural

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SCRETE); // FIX 2: token, secret
        
        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "You don't have access" }); // FIX 3: return added
        }

        req.user = decoded; // FIX 4: save user for next function
        next();

    } catch (err) { // FIX 5: catch added - your error was here
        return res.status(401).json({ message: "Unauthorized: " + err.message });
    }
}
function authUser(req, res, next) {
    const token = req.cookies.token; // FIX 1: cookies plural

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SCRETE); // FIX 2: token, secret
        
        if (decoded.role !== "user"&&"artist") {
            return res.status(403).json({ message: "You don't have access" }); // FIX 3: return added
        }

        // FIX 4: save user for next function
        next();

    } catch (err) { // FIX 5: catch added - your error was here
        return res.status(401).json({ message: "Unauthorized: " + err.message });
    }
}

module.exports = { authArtist,authUser };