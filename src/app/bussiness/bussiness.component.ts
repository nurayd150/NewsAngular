import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {
  users:any;
  constructor(private service:ServiceService) { }


  topHeadlinesResult:any=[];
  ngOnInit(): void {
    this.service.businessNews().subscribe((result)=>{
      console.log(result);
      this.topHeadlinesResult = result.articles;
    })
  }


}
