import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  title = "Professores";

  public professores= [
    {id: 1, nome:  'David', disciplina: 'Matematica' },
    {id: 2, nome:  'Renato', disciplina: 'Fisica' },
    {id: 3, nome:   'Tyson', disciplina:'Informatica' },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
