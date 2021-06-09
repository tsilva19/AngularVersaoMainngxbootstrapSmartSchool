import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
 
  title = "Alunos";

  public alunos= [
    {id : 1, nome:  'Marta', sobrenome: 'Clark', telefone: 33233 },
    {id : 2, nome:  'Paula', sobrenome: 'Souza', telefone: 33233 },
    {id : 3, nome:   'Pedro', sobrenome: 'Silva', telefone: 33233 },
    {id : 4, nome: 'Steven', sobrenome: 'Alves', telefone: 33233 },
    {id : 5, nome: 'Bruno', sobrenome: 'Nogueira', telefone: 33233 },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
