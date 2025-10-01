import promptSync = require('prompt-sync');
const entrada = promptSync({ sigint: true });

import { Produto } from './models/Produto';
import { Estoque } from './estoque/Estoque';
import {
  ProdutoNaoEncontradoError,
  ProdutoJaExisteError,
  EstoqueInsuficienteError,
  DadosInvalidosError
} from './models/Erros';

const estoque = new Estoque();

function menu() {
  console.log('\n=== CONTROLE DE ESTOQUE ===');
  console.log('1 - Cadastrar produto');
  console.log('2 - Registrar entrada');
  console.log('3 - Registrar saída');
  console.log('4 - Gerar relatório de estoque');
  console.log('5 - Gerar histórico de movimentações');
  console.log('0 - Sair');
}

while (true) {
  menu();
  const opc = entrada('Escolha uma opção: ').trim();

  try {
    if (opc === '0') {
      console.log('Saindo...');
      break;
    } else if (opc === '1') {
      const codigo = entrada('Código: ').trim();
      const nome = entrada('Nome: ').trim();
      const preco = parseFloat(entrada('Preço: ').replace(',', '.'));
      const qt = parseInt(entrada('Quantidade inicial: '), 10);
      const p = new Produto(codigo, nome, preco, qt);
      estoque.cadastrarProduto(p);
      console.log('Produto cadastrado com sucesso!');
    } else if (opc === '2') {
      const codigo = entrada('Código do produto: ').trim();
      const qt = parseInt(entrada('Quantidade entrada: '), 10);
      const desc = entrada('Descrição (opcional): ');
      estoque.registrarEntrada(codigo, qt, desc);
      console.log('Entrada registrada!');
    } else if (opc === '3') {
      const codigo = entrada('Código do produto: ').trim();
      const qt = parseInt(entrada('Quantidade saída: '), 10);
      const desc = entrada('Descrição (opcional): ');
      estoque.registrarSaida(codigo, qt, desc);
      console.log('Saída registrada!');
    } else if (opc === '4') {
      console.log(estoque.gerarRelatorioEstoque());
    } else if (opc === '5') {
      console.log(estoque.gerarHistorico());
    } else {
      console.log('Opção inválida.');
    }
  } catch (err) {
    if (err instanceof ProdutoNaoEncontradoError ||
        err instanceof ProdutoJaExisteError ||
        err instanceof EstoqueInsuficienteError ||
        err instanceof DadosInvalidosError) {
      console.log('Erro:', err.message);
    } else {
      console.log('Erro inesperado:', (err as Error).message);
    }
  }
}