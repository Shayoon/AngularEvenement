import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { UtilisateurFormulaireComponent } from './components/utilisateur-formulaire/utilisateur-formulaire.component';
import { UtilisateurCardComponent } from './components/utilisateur-card/utilisateur-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurFormulaireComponent,
    UtilisateurCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
