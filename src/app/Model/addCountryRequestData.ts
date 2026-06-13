import { CountryLocation } from "./CountryLocation";
import { Covid } from "./Covid";
import { Coviddata } from "./Coviddata";

export class AddCityRequestData{
    
    userName!: string;
    country: string | undefined;
    location: CountryLocation | undefined;
    covid: Covid | undefined;
    coviddata: Coviddata | undefined;
    
}
