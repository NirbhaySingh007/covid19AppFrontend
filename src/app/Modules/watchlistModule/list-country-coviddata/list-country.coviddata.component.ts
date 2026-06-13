import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInfo } from 'src/app/Model/CountryInfo';
import { WishlistService } from 'src/app/service/wishlist.service';
import { CountryCoviddataUtill } from 'src/app/util/CountryCoviddataUtill';
import { CountryRequestData } from 'src/app/Model/CountryRequestData';
import { RequestDeleteData } from 'src/app/Model/RequestDeleteData';
import { AuthenticationService } from 'src/app/service/authentication.service';



@Component({
  selector: 'app-list-country-coviddata',
  templateUrl: './list-country-coviddata.component.html',
  styleUrls: ['./list-country-coviddata.component.css']
})
export class ListCountryCoviddataComponent  {
  util:CountryCoviddataUtill = new CountryCoviddataUtill();
  wishList:CountryRequestData[]|undefined;

  

  constructor(private service:WishlistService, private authService:AuthenticationService) { 
  const observer={
    next: (result:CountryRequestData[])=>{
       this.wishList=result;
    },
    error : (error:Error)=>{
      console.log("error is "+error.message);
    },
    complete: ()=>{
      console.log("completed");
    }
  }
  const observable:Observable<CountryRequestData[]> = service.getWishList(this.authService.getUsername());
  observable.subscribe(observer);
  }

  remove(deleted:CountryRequestData){

    const requestData:RequestDeleteData= this.util.convertToDeleteRequestData(deleted, localStorage.getItem('username'));
    const observer={
      next:( )=>{
        this.wishList?.splice(this.wishList?.indexOf(deleted),1);
      },
      error: (error:Error)=>{
        console.log("error is "+error.message);
      }
  
    }
    const observable:Observable<RequestDeleteData>=this.service.deleteFromWishList(requestData);
    observable.subscribe(observer);
    
  }

}
