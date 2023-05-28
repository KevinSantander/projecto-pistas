import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PistaService } from './pista.service';
import { PistaEntity } from './pista-entity/pista-entity';

@Controller('api/pista')
export class PistaController {
  
  constructor(private readonly pistaService : PistaService){}

  @Get('pistas')
  getPistas():any{
      return this.pistaService.getPistas();
  }

/*crearPistas recive @Body, este cuerpo que mandamos
 al Script en la funcion crearPista almacenado en la variable Data.
 lo que va a recivir un cuerpo, espicificando la entidad a la que pertenece.
 como estamos en el controller el modelo de negocios se lo dejamos a pistaService.
 por eso lo llamamos y le pasamos addPistas el metodo encargado, con el parametro body.*/
  @Post('crear')
  crearPista(@Body() body:PistaEntity):any{
      return this.pistaService.addPista(body);
  }

  @Delete('eliminar/:id')
  eliminarPista(@Param('id')id:string): string {
    return this.pistaService.delete(id);
  }

}
