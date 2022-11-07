import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-entertaintment',
  templateUrl: './entertaintment.component.html',
  styleUrls: ['./entertaintment.component.css']
})
export class EntertaintmentComponent implements OnInit {

  constructor(private service:ServiceService) { }

  topHeadlinesResult:any=[];
  ngOnInit(): void {
    this.service.entertainmentNews().subscribe((result)=>{
      console.log(result);
      this.topHeadlinesResult = result.articles;
    })
  }
}
