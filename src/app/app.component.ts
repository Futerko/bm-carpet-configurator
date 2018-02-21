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
  workarea:any = {
    width: '',
    height: ''
  };

  ngOnInit() {
    this.workarea.width = window.innerWidth <= 375 ? '300' : '445';
    this.workarea.height = window.innerHeight <= 667 ? '500' : '645';
    this.theCanvas = new fabric.Canvas('theCanvas');
    this.theCanvas.setHeight(this.workarea.height);
    this.theCanvas.setWidth(this.workarea.width);
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
    this.carpetService.mySelection.font = _font;
    this.theName.set("fontFamily", _font.name);
    this.theCanvas.requestRenderAll();
  }

  onSelectSize(_size) {
    this.carpetService.mySelection.size = _size;
  }

  onSave() {
    this.imageSaved = this.theCanvas.toDataURL({
      width: 443,
      height: 641
    });
  }

}
