import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  retrieveWeather(cityname, callback){
    
    this._http.get(`http://api.openweathermap.org/data/2.5/find?q=${cityname}&units=imperial&APPID=2b534a9a9be1ad09f3d2081f3116c9cd`).subscribe(

      (response) => {
        console.log(response.json());
        callback(response.json());
      },
      (err) => {
        console.log(err.status);
      }
    )
   

  }
}
