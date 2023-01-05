const router = require('express').Router();
const FilmMiddleware = require('./films.service');
const controller = require('./films.controller');

router.get('/', controller.read);
router.get('/:id', FilmMiddleware, controller.getOne);
router.post('/', controller.add);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

module.exports = router;