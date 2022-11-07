import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceService) { }
  topHeadlinesResult:any=[];
  ngOnInit(): void {
    this.service.topHeadlines().subscribe((result)=>{
      console.log(result);
      this.topHeadlinesResult = result.articles;
    })
  }

}
