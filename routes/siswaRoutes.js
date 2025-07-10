// routes/siswaRoutes.js
const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswaController');

router.get('/', siswaController.index);
router.get('/tambah', siswaController.tambah);
router.post('/simpan', siswaController.simpan);
router.get('/edit/:id', siswaController.editForm);
router.post('/update/:id', siswaController.update);
router.get('/hapus/:id', siswaController.hapus);


module.exports = router;

