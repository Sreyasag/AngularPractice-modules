import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value:22, label:'users'},
    {value:242, label:'revenue'},
    {value:2, label:'years'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
