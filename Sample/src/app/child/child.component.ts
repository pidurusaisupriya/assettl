
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input() childData:String;
  event:any;
  @Output() custEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  callEvent(e)
  {
  this.event=e;
  this.custEvent. emit(this.event);
  }
}
