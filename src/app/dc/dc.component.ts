import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  cityWeather: any;
  cityname = "Washington D.C."
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
