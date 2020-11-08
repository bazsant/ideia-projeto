import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  temas = [];
  fronts = [];
  back = [];
  constructor() {}

  ngOnInit(): void {
    this.temas = [
      'Saúde',
      'Educação',
      'Segurança',
      'Transportes',
      'Combate a Pobreza',
      'Emprego e Renda',
    ];

    this.fronts = [
      'Javascript',
      'jQuery',
      'Angular',
      'React',
      'Vue',
    ];

    this.back = [
      'Python',
      'PHP',
      'Java',
      'C#',
      'Ruby',
      'Node',
      'Go/Golang'
    ]
  }
}
