const FilmModel = require('../models/film');

class FilmsController {
    async read(req, res) {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || 5;
            const filmsCount = await FilmModel.countDocuments({});
            const films = await FilmModel.find({}).limit(page * limit).
            skip((page - 1) * limit);
            
            if (Math.ceil(filmsCount / limit) >= page) {
                return res.status(200).json({
                    pages: Math.ceil(filmsCount / limit),
                    films
                });
            }

            return res.status(404).json({ msg: 'page with this number not found.' });
        } catch (error) {
            res.status(502).json({
                msg: 'problem with service.'
            });
        }
    }
    async add(req, res) {
        try {
            const film = new FilmModel({ ...req.body });
            await film.save();

            return res.status(201).json(film);
        } catch (error) {
            return res.status(403).json({
                msg: 'number or title is used.'
            });
        }
    }
    async delete(req, res) {
        try {
            const film = await FilmModel.findByIdAndDelete(req.params.id);

            return res.status(200).json(film);
        } catch (error) {
            return res.status(404).json({
                msg: 'film is not found.'
            });
        }
    }
    async update(req, res) {
        try {
            const film = await FilmModel.findByIdAndUpdate({
                ...req.body
            }, { new: true });

            return res.status(200).json(film);
        } catch (error) {
            return res.status(403).json({
                msg: 'number or title is used.'
            })
        }
    }
    async getOne(req, res) {
        try {
            const film = await FilmModel.findById(req.params.id);

            return res.status(200).json(film);
        } catch (error) {
            return res.status(404).json({
                msg: 'film is not found.'
            });
        }
    }
};

module.exports = new FilmsController();