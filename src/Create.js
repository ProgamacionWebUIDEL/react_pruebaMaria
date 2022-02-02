import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
var qs = require('qs');
export default function Create() {
  const [nombre, setnombre] = useState('');
  const [director, setDirector] = useState('');
  const [responsable, setResponsable] = useState('');
  const [horario, setHorario] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [nombrea, setNombre] = useState('');
  const [peso, setPeso] = useState('');
  const [sexo, setSexo] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');
  const [Ciudad, setciudad] = useState('');
  

  const enviarDatos = () => {
      console.log(nombre);
      console.log(director);
      console.log(responsable);
      console.log(horario);
      console.log(ciudad);
      console.log(nombrea);
      console.log(peso);
      console.log(raza);
      console.log(edad);
      console.log(Ciudad);


      
      var data = qs.stringify({
          'nombre': nombre,
          'direccot': director,
          'anio_estreno': horario,
          'idioma': ciudad,
          'nombre1': nombrea,
          'direccot1': sexo,
          'anio_estreno1': raza,
          'idioma1': ciudad,



      });
      var config = {
          method: 'post',
          url: 'https://uide-crud.herokuapp.com/peliculas/crearPelicula',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: data
      };

      axios(config)
          .then(function (response) {
              window.alert("VETERINARIA y ANIMALITO GUARDADO")
              window.alert("ANIMALITO  GUARDADO")
              console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
              window.alert("ocurrio un error")
              console.log(error);
          });

  }
return(


<Form>
    <Form.Field>
      <label>Nombre de la veterinaria</label>
      <input placeholder="Veterinaria"onChange={(e) => setNombre(e.target.value)}></input>
      
    </Form.Field>
    <Form.Field>
      <label>DIRECCION</label>
      <input placeholder="Direccion" onChange={(e) => setDirector(e.target.value)}></input>
    </Form.Field>
    
    <Form.Field>
      <label>Responsable</label>
      <input placeholder="Responsable"onChange={(e) => setResponsable(e.target.value)}></input>
    </Form.Field>
    <Form.Field>
        <label>Horario</label>
        <input type="number" placeholder="Horas Trabajadas"onChange={(e) => setHorario(e.target.value)}></input>
      </Form.Field>
      <Form.Field>
      <label>Ciudad</label>
      <input placeholder="Ciudad"onChange={(e) => setCiudad(e.target.value)}></input>
    </Form.Field>
      
    <h2><label>A N I M A L E S</label></h2>
    <Form.Field>
        <label>Nombre</label>
        <input placeholder="Nombre"onChange={(e) => setnombre(e.target.value)}></input>
      </Form.Field>
      <Form.Field>
        <label>Peso</label>
        <input type="number" placeholder="Peso" onChange={(e) => setPeso(e.target.value)}></input>
        </Form.Field>
      <Form.Field>
        <label>Sexo</label>
        <input placeholder="Sexo"onChange={(e) => setSexo(e.target.value)}></input>
      </Form.Field>
      <Form.Field>
        <label>Raza</label>
        <select value ="Seleccione  la Raza" onChange={(e) => setRaza(e.target.value)}>
          <option>Pekines</option>
          <option>Bull dog</option>
          <option>Snchnauzer</option>
        </select>
      </Form.Field> 
      <Form.Field>
        <label>Edad</label>
        <select value ="Seleccione edad" onChange={(e) => setEdad(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
      </Form.Field> 
      <Form.Field>
        <label>Ciudad</label>
        <input placeholder="CIUDAD"onChange={(e) => setciudad(e.target.value)}></input>
      </Form.Field>
      <Button onClick={enviarDatos} type="submit">Guardar</Button>
</Form>

)
}
