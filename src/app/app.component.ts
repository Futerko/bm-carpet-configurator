import { CarpetService } from './services/carpet.service';
import { Component } from '@angular/core';
import { MzButtonModule } from 'ng2-materialize';
import { MzSidenavModule } from 'ng2-materialize';
import { MzRadioButtonModule } from 'ng2-materialize';
import { FormsModule } from '@angular/forms';
import 'fabric';
declare const fabric: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private carpetService:CarpetService){}

  title = 'app';
  theCanvas:any;
  theName:any;
  imageSaved:string;

  ngOnInit() {
    this.theCanvas = new fabric.Canvas('theCanvas');
  }

  onSelectImageCarpet(_carpet) {
    this.carpetService.mySelection.carpet = _carpet;
    this.theCanvas.clear();
    fabric.Image.fromURL('assets/images/' + _carpet.file, (img) => {
      let oImg = img.set({
        left: 0,
        top: 0,
        angle: 0
      }).scale(1);
      oImg.set('selectable', false);

      this.theName = new fabric.Textbox(this.carpetService.myName, {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 80,
        fontFamily: this.carpetService.mySelection.font.name
      });
      this.theName.setColor(this.carpetService.mySelection.color);
      

      this.theCanvas.add(oImg);
      this.theCanvas.add(this.theName).setActiveObject(this.theName);
    });
  }

  onSelectColor(_color) {
    this.carpetService.mySelection.color = _color;
    this.theName.set("fill", this.carpetService.mySelection.color);
    this.theCanvas.requestRenderAll();
  }

  onSelectFont(_font) {
    this.theName.set("fontFamily", _font.name);
    this.theCanvas.requestRenderAll();
  }

  onSave() {
    this.imageSaved = this.theCanvas.toDataURL('png');
  }

}
