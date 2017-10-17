import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  cityWeather: any;
  cityname = "Seattle, WA"
  constructor(private _weatherService: WeatherService) {
  //  this.getCurrent(); 
   }

   getCurrent(){
    this._weatherService.retrieveWeather(this.cityname, (weather) => {
      this.cityWeather = weather;
    });
   };

  ngOnInit() {
  }

}
