import { Injectable } from '@angular/core';

@Injectable()
export class CarpetService {

  constructor() { }

  myName:string = 'nome';

  fonts:Array<any> = [
    {name: 'Amatic SC', cssClass: 'font-Amatic-SC'},
    {name: 'Pacifico', cssClass: 'font-Pacifico'},
    {name: 'Patrick Hand', cssClass: 'font-Patrick-Hand'}
  ];

  carpets:Array<any>= [
    {name: 'farafalle', file : 'tappeto-d-arredo-butterfly-amaranto.jpg', palettes: ['#814166', '#85102d', '#5e1e43']},
    {name: 'scimmie', file : 'tappeto-d-arredo-littlemonkey-moro.jpg', palettes: ['#5c3516;', '#74445c', '#678391', '#ccc5bd']},
    {name: 'pianeti', file : 'tappeto-d-arredo-space-oceania.jpg', palettes: ['#22180c', '#7e93a6', '#ccc4b7', '#33586b']},
    {name: 'unicorni', file : 'tappeto-d-arredo-unicorns-violetto.jpg', palettes: ['#16110e', '#6e416c', '#424a8b', '#c2b2b3']}
  ];

  sizes:Array<string> =[ 
    '85X150cm',
    '115X175cm', 
    '140X200cm',
    '175X240cm'];
  

  mySelection:any = {
    size: '',
    carpet: {},
    font: this.fonts[0],
    color: '#000000;'
  };
}
