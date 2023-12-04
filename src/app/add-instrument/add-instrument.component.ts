import { Component } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
})
export class AddInstrumentComponent {
  newInstrument = new Instrument();
  types!: Type[];
  newIdTyp!: number;
  newType!: Type;
  constructor(
    private instrumentService: InstrumentService,
    private router: Router
  ) {}
  ngOnInit(): void {
    //this.types = this.instrumentService.listeTypes();
    this.instrumentService.listetypes().subscribe((typs) => {
      this.types = typs._embedded.types;
      console.log(typs);
    });
  }
  addInstrument() {
    if (!this.types || this.types.length === 0) {
      console.error("Types are not yet loaded. Please wait.");
      return;
    }

    this.newInstrument.type = this.types.find((typ) => typ.idTyp == this.newIdTyp)!;
    this.instrumentService
      .ajouterInstrument(this.newInstrument)
      .subscribe((instr) => {
        console.log(instr);
        this.router.navigate(['instruments']);
      });
  }
}
