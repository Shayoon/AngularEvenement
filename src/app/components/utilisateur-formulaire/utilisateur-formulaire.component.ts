import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-utilisateur-formulaire',
  templateUrl: './utilisateur-formulaire.component.html',
  styleUrls: ['./utilisateur-formulaire.component.css']
})
export class UtilisateurFormulaireComponent implements OnInit {


  @Output()
  finish = new EventEmitter

  form: FormGroup;
  constructor(
    private builder : FormBuilder
  ) { 
    this.form = this.builder.group({
      "nom": [''],
      "prenom": [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.finish.emit(this.form.value)
  }

}
