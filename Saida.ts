import { Movimentacao } from './Movimentacao';

export class Saida extends Movimentacao {
  get tipo(): 'saida' {
    return 'saida';
  }
}