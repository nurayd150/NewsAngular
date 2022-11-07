import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AboutComponent } from '../about/about.component';
import { CategoriesComponent } from '../categories/categories.component';
import { HomeComponent } from '../home/home.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
   
  users: any;
  movies: any;
  constructor(private service:ServiceService) { }
  ngOnInit(): void {
   console.log("hjedsk");
  }

}