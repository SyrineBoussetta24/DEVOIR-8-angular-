import { Image } from "./Image.model";
import { Type } from "./type.model";
export class Instrument {
  idInstrument? : number;
  nomInstrument? : string;
  prixInstrument? : number;
  dateCreation? : Date ;
  type! : Type ;
  image! : Image;
  imageStr!:string;

  images!: Image[];

  }
