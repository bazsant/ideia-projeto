import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  @Input() dados = [];
  @Input() assunto = '';
  valor: string = 'Selecione para sortear';
  constructor() { }

  ngOnInit(): void {
  }

  sortear() {
    const random = Math.floor(Math.random() * this.dados.length);

    this.valor = this.dados[random];
  }

  adicionar(termo) {
    if(termo.trim()) {
      this.dados.push(termo);
    }
  }

  excluir(dado) {
    const indexDado = this.dados.findIndex(d => d === dado);
    this.dados.splice(indexDado, 1);
  }

}
