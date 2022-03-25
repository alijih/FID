import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-opened',
  templateUrl: './new-opened.component.html',
  styleUrls: ['./new-opened.component.css']
})
export class NewOpenedComponent implements OnInit {
  new_opened:any;
  constructor() { }

  ngOnInit(): void {

  }
mostrar_new_opened(noticia:any){
  this.new_opened=noticia.target.id
  console.log(this.new_opened)
}
}
