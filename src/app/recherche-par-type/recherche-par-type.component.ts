import { Type } from '../model/type.model';
import { InstrumentService } from '../services/instrument.service';
import { Instrument } from './../model/instrument.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
})
export class RechercheParTypeComponent implements OnInit {
  instruments: Instrument[] = [];
  types: Type[] = [];
  IdType!: number;

  constructor(private instrumentService: InstrumentService) {}

  ngOnInit(): void {
    this.instrumentService.listetypes().subscribe((typs) => {
      this.types = typs._embedded.types;
      console.log(typs);
    });

    this.loadAllInstruments();
  }
  private loadAllInstruments(): void {
    this.instrumentService.listeInstrument().subscribe((instruments) => {
      this.instruments = instruments;
    });
  }


  onChange(): void {
    if (this.IdType) {
      this.instrumentService.rechercherParType(this.IdType).subscribe((instr) => {
        this.instruments = instr;
      });
    }
  }
}
