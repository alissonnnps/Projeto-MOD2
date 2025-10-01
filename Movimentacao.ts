export interface IMovimentacao {
  data: Date;
  codigoProduto: string;
  quantidade: number;
  descricao?: string;
  tipo: 'entrada' | 'saida';
}

export abstract class Movimentacao implements IMovimentacao {
  public data: Date;
  constructor(
    public codigoProduto: string,
    public quantidade: number,
    public descricao?: string
  ) {
    this.data = new Date();
  }

  abstract get tipo(): 'entrada' | 'saida';

  info(): string {
    return `${this.data.toISOString()} | ${this.tipo.toUpperCase()} | Código: ${this.codigoProduto} | Qtde: ${this.quantidade} | ${this.descricao ?? ''}`;
  }
}