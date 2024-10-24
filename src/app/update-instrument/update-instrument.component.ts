import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrument } from '../model/instrument.model';
import { Type } from '../model/type.model';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-update-instrument',
  templateUrl: './update-instrument.component.html',
})
export class UpdateInstrumentComponent implements OnInit{
  currentInstrument= new Instrument();
  types! : Type[];
  updatedTypId! : number;
  myImage! : string;
  uploadedImage!: File;
isImageUpdated: Boolean=false;
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
          private instrumentService: InstrumentService) { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
/* this.types=this.instrumentService.listeTypes();

this.currentInstrument = this.instrumentService.consulterInstrument(this.activatedRoute.snapshot. params['id']);
this.updatedTypId=this.currentInstrument.type.idTyp; */
this.instrumentService.listetypes().
subscribe(typs => {this.types = typs._embedded.types;
console.log("bbbb"+typs);
});

this.instrumentService.consulterInstrument(this.activatedRoute.snapshot.params['id']).
subscribe( instr =>{ this.currentInstrument = instr;
  this.updatedTypId =   instr.type.idTyp;

 /* this.instrumentService
.loadImage(this.currentInstrument.image.idImage)
.subscribe((img: Image) => {
this.myImage = 'data:' + img.type + ';base64,' + img.image;
}); */
} ) ;
}
//updateInstrument()
//{ //console.log(this.currentInstrument);
  /* this.currentInstrument.type = this.instrumentService.consulterType(this.updatedTypId);

this.instrumentService.updateInstrument(this.currentInstrument);
this.router.navigate(['instruments']);
 */
//this.currentInstrument.type = this.types.find(typ => typ.idTyp == this.updatedTypId)!;
//tester si l'image de l'instrument a été modifiée
/* if (this.isImageUpdated)
  {
  this.instrumentService
  .uploadImage(this.uploadedImage, this.uploadedImage.name)
  .subscribe((img: Image) => {
  this.currentInstrument.image = img;
  this.instrumentService
  .updateInstrument(this.currentInstrument)
  .subscribe((prod) => {
  this.router.navigate(['instruments']);
  });
  });
  }
  else{
  this.instrumentService
  .updateInstrument(this.currentInstrument)
  .subscribe((prod) => {
  this.router.navigate(['instruments']);
  });
  }
} */

  updateInstrument() {
    this.currentInstrument.type = this.types.find(typ => typ.idTyp ==
    this.updatedTypId)!;
    this.instrumentService
    .updateInstrument(this.currentInstrument)
    .subscribe((prod) => {
    this.router.navigate(['instruments']);
    });
    }
onImageUpload(event: any) {
  if(event.target.files && event.target.files.length) {
  this.uploadedImage = event.target.files[0];
  this.isImageUpdated =true;
  const reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = () => { this.myImage = reader.result as string; };
  }
  }

  onAddImageInstrument() {
    if (this.currentInstrument.idInstrument) { // Ensure idInstrument is defined
      this.instrumentService
        .uploadImageInstr(this.uploadedImage, this.uploadedImage.name, this.currentInstrument.idInstrument)
        .subscribe((img: Image) => {
          console.log("aaaa"+this.currentInstrument.images);
          this.currentInstrument.images.push(img);
        });
    } else {
      console.error('Instrument ID is undefined.');
    }
  }
  supprimerImage(img: Image){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.instrumentService.supprimerImage(img.idImage).subscribe(() => {
    //supprimer image du tableau currentInstrument.images
    const index = this.currentInstrument.images.indexOf(img, 0);
    if (index > -1) {
    this.currentInstrument.images.splice(index, 1);
    }
    });
    }
}

