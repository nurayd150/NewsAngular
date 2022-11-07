import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private service:ServiceService) { }
  topHeadlinesResult:any=[];
  ngOnInit(): void {
    this.service.sportsNews().subscribe((result)=>{
      console.log(result);
      this.topHeadlinesResult = result.articles;
    })
  }

}
