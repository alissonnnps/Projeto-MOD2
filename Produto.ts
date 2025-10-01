export class Produto {
  // encapsulamento: _quantidade privado
  constructor(
    public readonly codigo: string,
    public nome: string,
    private _preco: number,
    private _quantidade: number
  ) {
    if (codigo.trim() === '' || nome.trim() === '' || _preco < 0 || _quantidade < 0) {
      throw new Error('Dados inválidos para criação de produto');
    }
  }

  get preco(): number {
    return this._preco;
  }
  set preco(n: number) {
    if (n < 0) throw new Error('Preço inválido');
    this._preco = n;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  // métodos para alterar estoque (controlados pela camada Estoque)
  aumentarQuantidade(q: number) {
    if (q <= 0) throw new Error('Quantidade para entrada deve ser > 0');
    this._quantidade += q;
  }

  reduzirQuantidade(q: number) {
    if (q <= 0) throw new Error('Quantidade para saída deve ser > 0');
    if (q > this._quantidade) throw new Error('Estoque insuficiente');
    this._quantidade -= q;
  }

  exibir(): string {
    return `Código: ${this.codigo} | ${this.nome} | Preço: R$ ${this._preco.toFixed(2)} | Qtde: ${this._quantidade}`;
  }
}