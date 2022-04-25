const express = require('express');
const router = express.Router();
const { validId, validObjectBody } = require('../middlewares/Middlewares');

const controllerRoupas = require('../controllers/roupas.controller');

router.get('/find-roupas', controllerRoupas.findAllRoupasController);
router.get(
  '/find-roupas/:id',
  validId,
  controllerRoupas.FindByIdRoupasController,
);
router.post(
  '/create',
  validObjectBody,
  controllerRoupas.createroupasController,
);
router.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerRoupas.updateroupasController,
);
router.delete('/delete/:id', validId, controllerRoupas.deleteroupasController);

module.exports = router;
