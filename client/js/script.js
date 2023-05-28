let btn_mostrar = document.getElementById("btn-mostrar");
btn_mostrar.addEventListener("click",mostrarDatos);

let btn_crear = document.getElementById("btn-crear");
btn_crear.addEventListener("click",crearPista);

async function mostrarDatos(){
  //llama al controlador de pistas
  let res = await fetch('api/pista/pistas');
  let data = await res.json();


  let html = document.getElementById("idPista");

  html.innerHTML =        
  `
   <tr>
    <th> Id </th>
    <th> Titulo </th>
    <th> Duracion </th>
    <th> Interprete </th>
    <th> Fecha </th>
    <th> Borrar </th>
   </tr>
  `

  for (let pista of data.pistas) {
      html.innerHTML +=
      `
        <tr id="${pista.id}">
          <td> ${pista.id} </td>
          <td> ${pista.titulo} </td>
          <td> ${pista.duracion} </td>
          <td> ${pista.interprete} </td>
          <td> ${pista.fecha} </td>
        <td> <button onClick="eliminarFila('${pista.id}')"> Borrar </button><td>
        </tr>
      `
    }
    console.log(data.pistas);
}

async function eliminarFila(id){

/*desde el html accedo al elemento/fila duespues al padre/tabla y
desde el padre removemos la fila*/
  const fila = document.getElementById(id);
  const tabla = fila.parentNode;
  tabla.removeChild(fila);

//Elimino un pista desde pistas.txt
  res = await fetch(`api/pista/eliminar/${id}`,
    {
      method : 'DELETE',
      headers : { 'Content-Type' : 'application/json' }
    },
  );
  let data = await res.json();
  console.log(data.msj);
}



async function crearPista(){

  let datos = {
    "id": document.getElementById("identificador").value,
    "titulo": document.getElementById("titulo").value,
    "duracion": document.getElementById("duracion").value,
    "interprete": document.getElementById("interprete").value,
    "fecha": document.getElementById("fecha").value
  }

  res = await fetch('api/pista/crear',
    {
     method : 'POST',
     headers : { 'Content-Type' : 'application/json' },
     body : JSON.stringify(datos)
    }
  );
  let data = await res.json();
  console.log(data);
    
}
