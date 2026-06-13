import { Component } from '@angular/core';
import{WishlistService} from './service/wishlist.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontend'
  
  countries:any
  country:any
  confirmed:any
  recovered: any
  deaths: any
  
  constructor(private corona:WishlistService){}

  ngOnInit(){
    this.corona.fetchCountryFromExternalServer().subscribe((data)=>{
      console.log(data)
      this.countries=data
    })
  }
  
  
  getCovidData(event:any){
    this.corona.getCovidRealTimeData(event.target.value).subscribe((data)=>{
      console.log(data)
      var index=data.length-1
      this.confirmed=data[index].Confirmed
      this.recovered=data[index].Recovered
      this.deaths=data[index].Deaths
  
    })
  }

  getCountry(event:any){
    this.country=event.target.value
  }



}
