const express = require('express');
const router = express.Router();
const { validId } = require('../middleware/roupas.middleware');

const controllerRoupas = require('../controllers/roupas.controller');

router.get('/find-roupas', controllerRoupas.findAllRoupasController);
router.get(
  '/find-roupas/:id',
  validId,
  controllerRoupas.FindByIdRoupasController,
);
router.post('/create-roupas', controllerRoupas.createroupasController);
router.put(
  '/update-roupas/:id',
  validId,
  controllerRoupas.updateroupasController,
);
router.delete(
  '/delete-roupas/:id',
  validId,
  controllerRoupas.deleteroupasController,
);

module.exports = router;
