import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  firstFormGroup = this._formBuilder.group({
    iinCtrl: ['', Validators.required],
    nameCtrl: ['', Validators.required],
    telCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    addresCtrl: ['', Validators.required],
    flatNumberCtrl: ['', Validators.required],
    infoCtrl: ['', Validators.required],
  });
  
  protected houses: FormGroup;

  constructor(private _formBuilder: FormBuilder, 
    private adminService: AdminService) {
    this.houses = new FormGroup({
      house: new FormArray([
        new FormGroup({
          addresCtrl: new FormControl(''),
          flatNumberCtrl: new FormControl(''),
          infoCtrl: new FormControl('')
        })
      ])
    });
  }

  get house(): FormArray {
    return this.houses.get('house') as FormArray;
  }

  addHouse() {
    this.house.push(
      new FormGroup({
        addresCtrl: new FormControl(''),
        flatNumberCtrl: new FormControl(''),
        infoCtrl: new FormControl('')
      })
    );
  }

  removeHouse() {
    this.house.removeAt(this.house.length - 1);
  }

  submit() {
    console.log("test");
  }
}
