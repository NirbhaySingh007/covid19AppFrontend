import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { WishlistService } from 'src/app/service/wishlist.service';
import { CountryCoviddataUtill } from 'src/app/util/CountryCoviddataUtill';
import { CountryRequestData } from 'src/app/Model/CountryRequestData';
import { CountryInfo } from '../../../../Model/CountryInfo'
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-search-by-country',
  templateUrl: './search-by-country.component.html',
  styleUrls: ['./search-by-country.component.css']
})


export class SearchByCountryComponent {

  //Form Control and Mapping
  //countryCtrl:FormControl;
  //myform:FormGroup;
  countries:any
  country:any
  confirmed:any
  recovered: any
  deaths: any
  

  /*constructor(builder: FormBuilder, private service: WishlistService, private authService:AuthenticationService,private corona:WishlistService) {
    this.countryCtrl=builder.control('');
    const mapping = {
      countryName:this.countryCtrl
    };
    this.myform = builder.group(mapping);
    
   }*/

   constructor(private corona:WishlistService){}


   ngOnInit(){
    this.corona.fetchCountryFromExternalServer().subscribe((data)=>{
      console.log(data)
      this.countries=data
    })
  }


  handleAddToWishlist(){
    this.corona.addCountryToWishList(this.country).subscribe(()=>{

    })
  }

  handleRemoveFromWishlist(){
    this.corona.deleteFromWishList(this.country).subscribe(()=>{
      
    })
  }

  //country!: CountryInfo;

  ///responseCountry!:CountryRequestData;

  

  //util:CountryCoviddataUtill = new CountryCoviddataUtill();

  //to add functionalities for delayed appearance of add to fav button
  //isClicked!:boolean;

  // Add to Fav Functionalities 
  /*addtofav(){
   
    const requestData:CountryRequestData= this.util.convertToRequestData(this.country, this.authService.getUsername());
    const observer={
      next:(result:CountryRequestData)=>{
        this.responseCountry=result;
      },
      error: (error:Error)=>{
        console.log("error is "+error.message);
      }
  
    }
    const observable:Observable<CountryRequestData>=this.service.addCountryToWishList(requestData);
    observable.subscribe(observer);
    
          
  }


 //Fetching Data From Server 
  /*fetchData(){
  this.isClicked=true; 
  const observer = {
    next: (result: any) => {
    
     this.country = this.util.convertToCountryInfo(result.data);
     
    },
    error: (error: Error) => {
      console.log(error.message);
    },
  };
  const observable: Observable<any> = this.service.fetchCountryFromExternalServer(
    //this.countryCtrl.value
  );
  observable.subscribe(observer);

   }*/
  
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

