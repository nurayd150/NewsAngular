
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userName: string='mehmet sert';//servis içindeki değişkeni test ts içerisnde ve test html içerisinde kullanabildim 
  // önce bahsi geçene component içerisinde servisi private bir değişken
  //olarak tanımladım ve buna serviste var olan nesne her neyse onun bilgisini atadım
  // daha sonra da bunu yine bahsi geçen componentin html dosyasında 
  //çağırdım 
  constructor(
    private http:HttpClient
  ) { }
  url='https://newsapi.org/v2/top-headlines?country=tr&apiKey=87d1aedfb7574ad4a67cb98450ba50ff';
  url1='https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=87d1aedfb7574ad4a67cb98450ba50ff' 
  url2='https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=87d1aedfb7574ad4a67cb98450ba50ff' ;
  url3='https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=87d1aedfb7574ad4a67cb98450ba50ff' ;
  url4='https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=87d1aedfb7574ad4a67cb98450ba50ff' ;
  url5='https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=87d1aedfb7574ad4a67cb98450ba50ff' ;
  url6='https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=87d1aedfb7574ad4a67cb98450ba50ff' ;
  url7='https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=87d1aedfb7574ad4a67cb98450ba50ff' ;
  topHeadlines():Observable<any>{
  return this.http.get(this.url);
 }
 businessNews():Observable<any>{
  return this.http.get(this.url1);
 }
 entertainmentNews():Observable<any>{
  return this.http.get(this.url2);
 }
 generalNews():Observable<any>{
  return this.http.get(this.url3);
 }
 healthNews():Observable<any>{
  return this.http.get(this.url4);
 }
 sportsNews():Observable<any>{
  return this.http.get(this.url5);
 }
 technologyNews():Observable<any>{
  return this.http.get(this.url6);
 }
 scienceNews():Observable<any>{
  return this.http.get(this.url7);
 }


}
