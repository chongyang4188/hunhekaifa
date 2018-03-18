import { Component, OnInit, Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './list0.component.html',
  styleUrls: ['./list0.component.css']
})
export class ContentComponent implements OnInit {
  listDone=[];
  constructor() { }
  @Input() list
          
  ngOnInit() {

  }
  deleing(i){
    this.list.splice(i,1);
  }
  changeItem(i){
    this.listDone.push(this.list[i]);
    this.list.splice(i,1);
  }
  dele(n){
    this.listDone.splice(n,1);
  }
  changeAgain(i){
    this.list.push(this.listDone[i]);
    console.log(this.list);
  }
  ngDoCheck() {
   
  }
}