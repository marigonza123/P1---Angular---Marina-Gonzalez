import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marina-lista-component',
  templateUrl: './marina-lista-component.component.html',
  styleUrls: ['./marina-lista-component.component.css'],
})
export class MarinaListaComponentComponent implements OnInit {
  public items = [
    'Desenvolvimento para Servidores II - Quinta-feira, 19h',
    'Arquitetura Orientada a Serviços - Quarta-feira, 19h',
    'Desenvolvimento para Dispositivos Móveis I, Segunda-feira, 19h',
    'Tópicos Especiais em Sistemas para Internet II, Sexta-feira, 19h',
    'Projeto de Trabalho de Graduação em Sistemas para Internet I, Sábado, 11h30min',
  ];
  public disciplina = '';

  addDisciplina() {
    this.items.push(this.disciplina);
  }

  removeDisciplina(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  ngOnInit() {}
}
