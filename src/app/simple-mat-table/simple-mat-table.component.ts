
import { Component, OnInit } from '@angular/core';
import { Bug } from '../model/Bug';

@Component({
  selector: 'app-simple-mat-table',
  templateUrl: './simple-mat-table.component.html',
  styleUrls: ['./simple-mat-table.component.scss'],
})

export class SimpleMatTableComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'priority',
    'reporter',
    'status',
    'updatedAt',
    'createdAt',
    'comments'
  ];

EmpData : Bug[] =[{
  "id": "62bc02ead1f9fe00178704d2",
  "title": "1",
  "description": "1",
  "priority": 1,
  "reporter": "QA",
  "status": "Ready for test",
  "updatedAt": "2022-06-29T07:44:42.256Z",
  "createdAt": "2022-06-29T07:44:42.256Z",
  "comments": ""
},
{
  "id": "62bc0320d1f9fe00178704d3",
  "title": "1",
  "description": "1",
  "priority": 1,
  "reporter": "QA",
  "status": "Ready for test",
  "updatedAt": "2022-06-29T07:45:36.920Z",
  "createdAt": "2022-06-29T07:45:36.920Z",
  "comments": ""
},
{
  "id": "62bc0337d1f9fe00178704d4",
  "title": "1",
  "description": "1",
  "priority": 2,
  "reporter": "QA",
  "status": "Done",
  "updatedAt": "2022-06-29T07:45:59.854Z",
  "createdAt": "2022-06-29T07:45:59.854Z",
  "comments": ""
}];
}
