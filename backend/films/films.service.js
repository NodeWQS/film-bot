const FilmModel = require('../models/film');

module.exports = async (req, res, next) => {
    try {
        const film = await FilmModel.findById(req.params.id);
        next();
    } catch (error) {
        return res.status(404).json({
            msg: 'film not found.'
        });
    }
}

