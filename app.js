const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let usuarios = [ //array de objetos
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },

];

app.get('/usuarios', (req,res) => {
  res.json(usuarios);
  console.log(req.params)
  const usuario = usuarios.find(u => u.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase())

  if (!usuario) {
    res.status(404).json ({mensaje:'Luchador no encontrado'})
  } else {
    res.json (usuario)
  }
});


app.post ('/usuarios', (req,res) =>{  //
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    edad: req.body.edad,
    lugarProcedencia: req.body.lugarProcedencia
  };

  usuarios.push(nuevoUsuario);
  res.redirect('/usuarios');
});

app.put('/usuarios/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const usuarioIndex = usuarios.findIndex(u.nombre.toLowerCase() === u.nombre.toLowerCase())
// si no existe el usuario nos da una ID -1
    if (usuarioIndex === -1)
      res.status(404).json ({mensaje: 'Luchador no encontrado'})
  }else {
    usuarios[usuarioIndex].edad = req.body.edad, 
    usuarios[usuarioIndex].lugarProcedencia = req.body.lugarProcedencia
    res.json(usuarios[usuarioIndex])
  }
});
    

app.delete('/usuarios/:nombre', (req,res) => {
    const nombre = req.params.nombre;
    const usuarios = usuarios.filter (u => u.nombre !== nombre);
    res.json ({mensaje: 'Luchador eliminado'});
});
  




app.listen(port, () => {
  console.log(`Express esta escuchando en http://localhost:${port}`);
});