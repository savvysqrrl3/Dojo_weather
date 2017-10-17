import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  cityWeather: any;
  cityname = "San Jose, CA"
  constructor(private _weatherService: WeatherService) {
    // this.getCurrent();
   }

   getCurrent(){
    this._weatherService.retrieveWeather(this.cityname, (weather) => {
      this.cityWeather = weather;
    });
   };

  ngOnInit() {
  }

}
