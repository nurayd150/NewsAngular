import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  users:any;
  constructor(private service:ServiceService) { }
  topHeadlinesResult:any=[];
  ngOnInit(): void {
    this.service.topHeadlines().subscribe((result)=>{
      console.log(result);
      this.topHeadlinesResult = result.articles;
    })
  }
  
}