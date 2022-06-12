import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data=[
    {name:'John',job:'cooljob',age:25},
    {name:'John',job:'cooljob',age:25},
    {name:'John',job:'cooljob',age:25}
  ];
  headers=[
    {key:'name',label:'Name'},
    {key:'job',label:'Job'},
    {key:'age',label:'Age'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
