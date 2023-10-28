import { Type } from "./type.model";
export class Instrument {
  idInstrument? : number;
  nomInstrument? : string;
  prixInstrument? : number;
  dateCreation? : Date ;
  type! : Type ;
  }
