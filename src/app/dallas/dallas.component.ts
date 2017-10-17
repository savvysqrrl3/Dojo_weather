import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  cityWeather: any;
  cityname = "Dallas, TX"
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
