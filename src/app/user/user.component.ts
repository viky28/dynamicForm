import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
	
  /*constructor(private fb: FormBuilder) { }*/

  /*ngOnInit() {
  	this.userFormData = this.fb.group({
  		name:[''],
  		organization:['']
  	})
  }*/
  @Input() userFormData:FormGroup
}
