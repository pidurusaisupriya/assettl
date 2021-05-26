import { Component,OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit  {
  title = 'Sample';
  parentData:any;
get:any;
constructor(private service:CommonService) { }
public getData;
myFormGroup:FormGroup;
public  form_template = [
  {
    "type":"textBox",
    "label":"Name",
  },
  {
    "type":"number",
    "label":"Age"
  },
  {
    "type":"select",
    "label":"favorite book",
    "options":["Jane Eyre","Pride and Prejudice","Wuthering Heights"]
  }
]
formTemplate = this.form_template;
ngOnInit() {
  this.service.getdata().subscribe(data1=>this.getData=data1);
  let group={}    
  this.form_template.forEach(input_template=>{
    group[input_template.label]=new FormControl('');  
  })
  this.myFormGroup = new FormGroup(group);
}
readChild(x)
{
this.get=x;
}
datatoChild(s)
{
this.parentData=s;
}
postData(){
  let params ={
    "Field":"State",
    "Value" : "TS"
  }
  this.service.postdata(params)
}
onSubmit(){
  console.log(this.myFormGroup.value);
}



}
