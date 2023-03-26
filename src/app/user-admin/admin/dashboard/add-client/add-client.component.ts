import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  protected houses: FormGroup;

  constructor(private adminService: AdminService) {
    this.houses = new FormGroup({
      house: new FormArray([
        new FormGroup({
          addres: new FormControl(''),
          flatNumber: new FormControl(''),
          info: new FormControl('')
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
        addres: new FormControl(''),
        flatNumber: new FormControl(''),
        info: new FormControl('')
      })
    );
  }

  removeHouse() {
    this.house.removeAt(this.house.length - 1);
  }
}
