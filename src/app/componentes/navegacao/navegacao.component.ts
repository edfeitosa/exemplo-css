import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {

  classeAvanco: string = "avanco";
  classeBotao1: string = "botao-ativo";
  classeBotao2: string = "botao-inativo";
  classeBotao3: string = "botao-inativo";

  constructor() { }

  ngOnInit(): void { }

  public acaoDosBotoes(botaoClicado: string): void {
    if (botaoClicado === 'coluna1') {
      this.classeAvanco = 'avanco';
      this.classeBotao1 = 'botao-ativo';
      this.classeBotao2 = 'botao-inativo';
      this.classeBotao3 = 'botao-inativo';
    } else if (botaoClicado === 'coluna2') {
      this.classeAvanco = 'avanco-bicolor';
      this.classeBotao1 = 'botao-completo';
      this.classeBotao2 = 'botao-ativo';
      this.classeBotao3 = 'botao-inativo';
    } else {
      this.classeAvanco = 'avanco-completo';
      this.classeBotao1 = 'botao-completo';
      this.classeBotao2 = 'botao-completo';
      this.classeBotao3 = 'botao-ativo';
    }
  }

}
