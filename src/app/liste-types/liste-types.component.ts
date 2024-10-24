import { Type } from '../model/type.model';
import { InstrumentService } from './../services/instrument.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styleUrls: ['./liste-types.component.css']
})
export class ListeTypesComponent implements OnInit {
updateTyp(typ: Type) {
  this.updatedTyp=typ;
  this.ajout=false;
}
  types! : Type[];
  ajout:boolean=true;
  updatedTyp:Type = {"idTyp":0,"nomTyp":""};;
  constructor(private instrumentService : InstrumentService) { }
  ngOnInit(): void {
  this.instrumentService.listetypes().
  subscribe(typs => {this.types = typs._embedded.types;
  console.log(typs);
  });

  }
  typeUpdated(typ:Type){
    console.log("Typ updated event",typ);
    this.instrumentService.ajouterType(typ).
     subscribe( ()=> this.chargerTypes());
    }
  chargerTypes(){
    this.instrumentService.listetypes().
    subscribe(typs => {this.types = typs._embedded.types;
    console.log(typs);
    });
}}
