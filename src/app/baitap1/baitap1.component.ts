import { Component, OnInit } from '@angular/core';
import { Nhanvien } from '../model/nhanvien.model';
@Component({
  selector: 'app-baitap1',
  templateUrl: './baitap1.component.html',
  styleUrls: ['./baitap1.component.scss'],
})
export class Baitap1Component implements OnInit {
  edit_clicked = false;
  nv_2_add: Nhanvien = {
    active: true,
    name: '',
    email: '',
    id: '',
    code: '',
  };
  dataNV: Nhanvien[] = [
    {
      active: true,
      name: 'ĐINHQBUYNHF NHƯ MAI',
      email: 'hien727276262@gmail.com',
      id: 'f77e13e6-4ee6-4669-9f13-9aa2ed92d59e',
      code: 'PROPCOM-0000001833',
      // "createdAt" : ISODate("2022-04-07T03:26:11.346Z"),
    },
    {
      active: true,
      name: 'BICH HUE AI',
      code: 'PROPCOM-0000001834',
      email: 'bichhue-real@gmail.com',

      id: '53d420b9-1eb2-4f12-ae31-70ee61cf6ebc',
      // "createdAt" : ISODate("2022-04-08T11:58:12.749Z")
    },
    {
      active: true,
      name: 'PHÁT NGUYỄN MẬP',
      email: 'aaaaa@gmail.com',

      id: '8337aa2f-e538-4f25-900c-f0bf8482976a',
      code: 'PROPCOM-0000001835',
      // "createdAt" : ISODate("2022-04-20T06:49:17.178Z")
    },
    {
      active: true,
      name: 'TÙNG COPPY',
      email: 'mmmmmmm@gmail.com',

      id: '86dc1237-5cab-4c4d-89f2-ab35fbf6f789',
      code: 'PROPCOM-0000001836',
      // "createdAt" : ISODate("2022-04-20T06:51:34.417Z")
    },
    {
      active: true,
      name: 'LƯƠN VĂN LẸO',
      email: 'b@gmail.com',

      id: 'c81422f2-6c2c-4b2d-bd03-33e112b1efa0',
      code: 'PROPCOM-0000001837',
      // "createdAt" : ISODate("2022-04-20T06:53:18.010Z")
    },
  ];
  dataSearch: any = [];

  nv_temp: Nhanvien = {
    active: true,
    name: '',
    email: '',
    id: '',
    code: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.dataSearch = this.dataNV;
  }

  reInit() {
    this.dataSearch = this.dataNV;
    this.nv_2_add = {
      active: true,
      name: '',
      email: '',
      id: '',
      code: '',
    };
    this.edit_clicked = false;
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
        item.email.toUpperCase().includes(keyword)
      ) {
        this.dataSearch.push(item);
      }
    });
  }

  edit(i: any) {
    this.nv_temp = this.dataSearch[i];
    console.log('nv temp: ', this.nv_temp);
    this.dataSearch = [];
    this.dataSearch.push(this.nv_temp);
    this.edit_clicked = true;
  }

  cancel_edit(nv: any) {
    console.log('nv temp: ', this.nv_temp);
    console.log('Cancel Edit');
    this.reInit();
    // this.dataNV.filter((item, i) => {
    //   if (item === nv) {
    //     this.dataNV[i] = this.nv_temp;
    //     this.reInit();
    //     return;
    //   }
    // });
  }

  add() {
    this.dataNV.push(this.nv_2_add);
    this.reInit();
  }
}
