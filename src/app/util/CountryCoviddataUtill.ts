import { CountryInfo } from '../Model/CountryInfo';

import { Covid } from '../Model/Covid';
import { Coviddata } from '../Model/Coviddata';

import { CountryRequestData } from '../Model/CountryRequestData';
import { RequestDeleteData } from '../Model/RequestDeleteData';

export class CountryCoviddataUtill {

  convertToCovid(covidData: any): Covid {
    const countryCovid: Covid = { ...covidData };
    return countryCovid;
  }


  convertToCoviddata(covidData: any): Coviddata {
    const countryCoviddata: Coviddata = new Coviddata();
    countryCoviddata.infected = covidData.hu;
    countryCoviddata.tested = covidData.pr;
    countryCoviddata.recovered = covidData.tp;
    countryCoviddata.deceased = covidData.ws;

    return countryCoviddata;

  }

  convertToCountryInfo(countryInfoData: any): CountryInfo {

    const countryInformation: CountryInfo = { ...countryInfoData };
    countryInformation.covid = this.convertToCovid(countryInfoData.current.covid)
    countryInformation.coviddata = this.convertToCoviddata(countryInfoData.current.coviddata);
    return countryInformation;
  }


  convertToCountryInfos(countryInfoData: any): CountryInfo[] {
    const desired: CountryInfo[] = [];
    for (let itreated of countryInfoData) {
      const countryInfo = this.convertToCountryInfo(itreated);
      desired.push(countryInfo);

    }
    return desired;
  }

  convertToCountryInfoFromRequestData(requestData: CountryRequestData) {
    const countryInfodata: CountryInfo = { ...requestData };
    return countryInfodata;
  }

  convertToRequestData(data: CountryInfo, userName: any): CountryRequestData {
    const requestData: CountryRequestData = {
      userName: userName,
      location: data.location,
      country: ""+ data.country,
      covid: data.covid,
      coviddata: data.coviddata,
    }
    return requestData;
  }

  convertToDeleteRequestData(data: CountryRequestData, userName: any): RequestDeleteData {
    const requestData: RequestDeleteData = {
      userName: userName,
      country: "" + data.country,
    }
    return requestData;
  }

}