import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private service:ServiceService) { }
  topHeadlinesResult:any=[];
  ngOnInit(): void {
    this.service.healthNews().subscribe((result)=>{
      console.log(result);
      this.topHeadlinesResult = result.articles;
    })
  }

}
