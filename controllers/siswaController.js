// controllers/siswaController.js
const Siswa = require('../models/siswa');

exports.index = async (req, res) => {
  try {
    const siswa = await Siswa.getAll();
    res.render('index', { siswa });
  } catch (err) {
    res.status(500).send('Terjadi error: ' + err.message);
  }
};

exports.tambah = (req, res) => {
  res.render('tambah');
};

exports.simpan = async (req, res) => {
  const { nama, kelas } = req.body;
  if (!nama || !kelas) {
    return res.status(400).send('Semua field wajib diisi');
  }
  await Siswa.create(nama, kelas); // Atau new Siswa({nama, kelas}).save()
  res.redirect('/');
};

exports.editForm = async (req, res) => {
  try {
    const id = req.params.id;
    const siswa = await Siswa.getById(id); // Pastikan ada fungsi getById di model
    if (!siswa) {
      return res.status(404).send('Siswa tidak ditemukan');
    }
    res.render('edit', { siswa });
  } catch (err) {
    res.status(500).send('Terjadi error: ' + err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { nama, kelas } = req.body;
    if (!nama || !kelas) {
      return res.status(400).send('Semua field wajib diisi');
    }
    await Siswa.update(id, nama, kelas);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Terjadi error: ' + err.message);
  }
};

exports.hapus = async (req, res) => {
  try {
    const id = req.params.id;
    await Siswa.hapus(id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Terjadi error: ' + err.message);
  }
};