import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';

const app = express();
const port = 3000;

// Configurar middleware de CORS
app.use(cors());

// Configurar almacenamiento de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'src', 'assets'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Archivo subido exitosamente');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
