import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  cityWeather: any;
  cityname = "Chicago, IL"
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
