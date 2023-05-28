import { Injectable } from '@nestjs/common';
import { PistaEntity } from './pista-entity/pista-entity';
import * as fs from 'fs'; 
import { isUtf8 } from 'buffer';

@Injectable()
export class PistaService {

  private cargarPistas():any{
  let texto: string = fs.readFileSync('pistas.txt', 'utf8');
  let pistas = texto.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));

  let listaPistas = [];

  for (let i = 0; i < pistas.length; i++) {
      let pista = new PistaEntity(pistas[i][0],pistas[i][1],pistas[i][2], pistas[i][3],pistas[i][4]);
      listaPistas.push(pista);
    }
    return listaPistas;
 }

/*addPista recive PistaEntity y retorna algo.
intancio una nueva classe Ipista en donde exivo cada uno los valores
que tienen y despues lo que hace es agregar mediante la libreria fs.
con appendFileSyc lo concatenamos no lo pisa.*/
 public addPista(pista:PistaEntity):any {
       
  const Ipista = new PistaEntity('','','','','');
  Ipista.id = pista.id;
  Ipista.titulo = pista.titulo;
  Ipista.duracion = pista.duracion;
  Ipista.interprete = pista.interprete;
  Ipista.fecha = pista.fecha;
    
  fs.appendFileSync('pistas.txt',`\n${Ipista.toString()}`);
  return {mensaje: `se creo la pista ${Ipista.toString()}`};
 }

 getPistas():any {
 return { 
      titulo: "Lista de Pistas",
      pistas : this.cargarPistas()
    };
 }

 //Eliminar una pista por ID

 delete(id):any {

  let txt:string = fs.readFileSync('pistas.txt','utf8');
  let pistas = txt.split('\n').map(e => e.replace('\r', '')).map(e => e.split(','));
  let listaPistas = [];
  
  for (let i = 0; i < pistas.length; i++) {
    if(id != pistas[i][0]) {
      let pista = new PistaEntity(pistas[i][0], pistas[i][1], pistas[i][2], pistas[i][3], pistas[i][4]);
      listaPistas.push(pista);
    }
  }
  fs.writeFileSync('pistas.txt', listaPistas.join('\n'));
  return {msj:"eliminado"}
 }

}
