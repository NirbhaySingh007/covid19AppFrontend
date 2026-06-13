import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { baseServerUrl } from '../constants';
import { CountryRequestData } from '../Model/CountryRequestData';
import { RequestDeleteData } from '../Model/RequestDeleteData';
import { AuthenticationService } from './authentication.service';
import { wishlistUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private client:HttpClient,private authService:AuthenticationService,private http:HttpClient) {this.http=http; }

  addCountryToWishList(requestData:CountryRequestData):Observable<CountryRequestData>{
    const url=wishlistUrl+"/user/country"; 
    const observable:Observable<CountryRequestData>=this.client.post<CountryRequestData>(url,requestData);
    return observable;
  }

  getWishList(id:any):Observable<CountryRequestData[]>{
    const url=baseServerUrl+"/user/country"+this.authService.getUsername();
    const observable:Observable<CountryRequestData[]>=this.client.get<CountryRequestData[]>(url);
    return observable;
  }

  deleteFromWishList(requestData:RequestDeleteData):any{
    const url=wishlistUrl+"/user/country";
    const headers = {
      body: requestData
    };
    const observable:Observable<RequestDeleteData>=this.client.delete<RequestDeleteData>(url,headers);
    return observable;
  }

  fetchCountryFromExternalServer():Observable<any>{
    const url=`https://api.covid19api.com/countries`;
    const headers:HttpHeaders=new HttpHeaders();
    const observable: Observable<any> = this.client.get(url,{headers});
    return observable;
  }

  getCovidRealTimeData(country:any):Observable<any>{
    const url="https://api.covid19api.com/total/dayone/country/"+country;
    return this.http.get<any>(url)
  }
  
}
