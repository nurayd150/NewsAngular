import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private service:ServiceService) { }
  topHeadlinesResult:any=[];
  ngOnInit(): void {
    this.service.scienceNews().subscribe((result)=>{
      console.log(result);
      this.topHeadlinesResult = result.articles;
    })
  }

}
