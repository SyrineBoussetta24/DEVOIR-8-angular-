import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {
  @Input()
  type! : Type;

  @Input()
  ajout:boolean=true;
  constructor(){}

  @Output()
typeUpdated = new EventEmitter<Type>();
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateType",this.type);
  }

  saveType(){
    this.typeUpdated.emit(this.type);
    }

}
