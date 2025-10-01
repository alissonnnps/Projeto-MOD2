import { Movimentacao } from './Movimentacao';

export class Entrada extends Movimentacao {
  get tipo(): 'entrada'{
    return 'entrada';
  } 
}