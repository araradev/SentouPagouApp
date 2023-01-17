import { Component } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  produtos = [];
  descricao_produto: string = '';
  vlr_produto: number = 0;
  qtd_produto: number = 0;
  qtd_pessoas: number = 1;
  totalComTaxa: number = 0;
  totalSemTaxa: number = 0;
  taxaServico: number = 0;
  totalComTaxaPorPessoa: number = 0;
  totalSemTaxaPorPessoa: number = 0;
  taxaServicoPorPessoa: number = 0;
  produtosImprimir: Produto[] = [];
  showItem: boolean = false;
  constructor() {}

  public adicionarConsumo() {
    let produto = new Produto();
    produto.descricao_produto = this.descricao_produto;
    produto.vlr_produto = this.vlr_produto;
    produto.qtd_produto = this.qtd_produto;
    this.produtosImprimir.push(produto);
    this.calcularTotais();
    console.log(this.produtosImprimir);
  }

  public calcularTotais(){
    this.totalComTaxa = 0;
    this.totalSemTaxa = 0;
    this.taxaServico = 0;
    for (let i = 0; i < this.produtosImprimir.length; i++) {
      this.totalSemTaxa = ((this.produtosImprimir[i].vlr_produto * this.produtosImprimir[i].qtd_produto) + this.totalSemTaxa);
      this.taxaServico = this.totalSemTaxa / 10;
      this.totalComTaxa = this.totalSemTaxa + this.taxaServico;
    }
  }

  public calcularTotaisPorPessoa(){
    this.totalComTaxaPorPessoa = 0;
    this.totalSemTaxaPorPessoa = 0;
    this.taxaServicoPorPessoa = 0;
    this.totalSemTaxaPorPessoa = (this.totalSemTaxa / this.qtd_pessoas);
    this.taxaServicoPorPessoa = (this.taxaServico / this.qtd_pessoas);
    this.totalComTaxaPorPessoa = (this.totalComTaxa / this.qtd_pessoas);
  }
}


