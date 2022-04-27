import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Nhanvien } from '../model/nhanvien.model';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  constructor(private form_builder: FormBuilder) {}

  ngOnInit(): void {
    this.dataSearch = this.dataNV;
  }

  crrIndex = 0;
  submitted = false;
  edit_clicked = false;
  nv_temp = this.form_builder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9\\s]+$'),
      ],
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0][0-9]+$'),
      ],
    ],
    id: ['', [Validators.required, Validators.pattern('^(?:.{9}|.{12})$')]],
    code: [''],
  });

  // nv_temp2 = this.form_builder.group({
  //   name: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.minLength(6),
  //       Validators.maxLength(30),
  //       Validators.pattern('^[a-zA-Z0-9\\s]+$'),
  //     ],
  //   ],
  //   phone: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.minLength(10),
  //       Validators.maxLength(10),
  //       Validators.pattern('^[0][0-9]+$'),
  //     ],
  //   ],
  //   id: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.pattern('^(?:.{9}|.{12})$'),
  //     ],
  //   ],
  //   code: [''],
  // });
  dataNV = [
    {
      name: 'DINH NHU MAI',
      phone: '0123456789',
      id: '111111111',
      code: 'PROPCOM-0000001833',
      // "createdAt" : ISODate("2022-04-07T03:26:11.346Z"),
    },
    {
      name: 'BICH HUE AI',
      code: 'PROPCOM-0000001834',
      phone: '0123456789',

      id: '111111111',
      // "createdAt" : ISODate("2022-04-08T11:58:12.749Z")
    },
    {
      name: 'PHAT NGUYEN MAP',
      phone: '0123456789',

      id: '111111111',
      code: 'PROPCOM-0000001835',
      // "createdAt" : ISODate("2022-04-20T06:49:17.178Z")
    },
    {
      name: 'TUNG COPPY',
      phone: '0123456789',

      id: '111111111',
      code: 'PROPCOM-0000001836',
      // "createdAt" : ISODate("2022-04-20T06:51:34.417Z")
    },
    {
      name: 'LUONG VAN LEO',
      phone: '0123456789',

      id: '111111111',
      code: 'PROPCOM-0000001837',
      // "createdAt" : ISODate("2022-04-20T06:53:18.010Z")
    },
  ];
  dataSearch: any = [];

  reInit() {
    this.dataSearch = this.dataNV;
    this.edit_clicked = false;
    this.submitted = false;
  }

  search(event: any) {
    let keyword = event.target.value.toUpperCase();
    // console.log(keyword);
    if (keyword == '') {
      this.reInit();
      return;
    }
    this.dataSearch = [];
    this.dataNV.filter((item) => {
      if (
        item.name.includes(keyword) ||
        item.code.includes(keyword) ||
        item.id.toUpperCase().includes(keyword) ||
        item.phone.includes(keyword)
      ) {
        this.dataSearch.push(item);
      }
    });
  }

  del(i: any) {
    this.dataNV.splice(i, 1);
    console.log(this.dataNV);
    this.reInit();
  }

  edit(i: any) {
    this.crrIndex = parseInt(i);
    this.nv_temp.setValue(this.dataSearch[i]);
    console.log('nv temp: ', this.nv_temp.value);
    this.dataSearch = [];
    this.dataSearch.push(this.nv_temp.value);
    console.log(this.dataSearch[0]);
    this.edit_clicked = true;
  }

  save_edit() {
    this.dataNV[this.crrIndex] = this.nv_temp.value;
    this.reset();
    this.reInit();
  }

  _toUpperCase(toUpCase: FormGroup): {} {
    for (let item in toUpCase.controls){
      toUpCase.controls[item].setValue(item.toUpperCase())
    }
    return toUpCase.value;
  }

  cancel_edit(nv: any) {
    console.log('nv temp: ', this.nv_temp);
    console.log('Cancel Edit');
    this.reInit();
  }

  submit() {
    if (this.nv_temp.valid) {
      console.log(this._toUpperCase(this.nv_temp.value));

      this.dataNV.push(this.nv_temp.value);

      this.reset();
      this.submitted = true;
      this.reInit();
    }
  }

  isValid(form: FormGroup, parram: string, option?: any): boolean {
    if (
      !form.controls[parram].dirty ||
      !form.controls[parram].touched
    )
      return false;
    // console.log(option)
    if (option === undefined)
      return form.controls[parram].errors !== null;

    return form.controls[parram].getError(option) !== undefined;
  }

  reset() {
    for (let control in this.nv_temp.controls) {
      this.nv_temp.controls[control].setValue('');
      this.nv_temp.controls[control].setErrors(null);
    }
  }
}
