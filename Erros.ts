export class EstoqueError extends Error {}
export class ProdutoJaExisteError extends EstoqueError {}
export class ProdutoNaoEncontradoError extends EstoqueError {}
export class EstoqueInsuficienteError extends EstoqueError {}
export class DadosInvalidosError extends EstoqueError {}