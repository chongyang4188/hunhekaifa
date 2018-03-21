import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item='';
  constructor() { }
  @Input() listart
  ngOnInit() {
  }
  add(e){
   if(e.keyCode == 13){
    this.listart.push(this.item);
    this.item="";
   }
  }

}