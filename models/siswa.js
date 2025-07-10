// models/Siswa.js
const pool = require('../config/db');

const Siswa = {};

Siswa.getAll = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM siswa');
    return rows;
  } catch (err) {
    console.error('Error getAll:', err);
    throw err;
  }
};

Siswa.create = async (nama, kelas) => {
  await pool.query('INSERT INTO siswa (nama, kelas) VALUES (?, ?)', [nama, kelas]);
};

Siswa.getById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM siswa WHERE id = ?', [id]);
    return rows[0];
  } catch (err) {
    console.error('Error getById:', err);
    throw err;
  }
};

Siswa.update = async (id, nama, kelas) => {
  try {
    await pool.query('UPDATE siswa SET nama = ?, kelas = ? WHERE id = ?', [nama, kelas, id]);
  } catch (err) {
    console.error('Error update:', err);
    throw err;
  }
};

Siswa.hapus = async (id) => {
  try {
    await pool.query('DELETE FROM siswa WHERE id = ?', [id]);
  } catch (err) {
    console.error('Error hapus:', err);
    throw err;
  }
};

module.exports = Siswa;   