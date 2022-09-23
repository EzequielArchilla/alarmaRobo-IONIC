import { Component, OnInit } from '@angular/core';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  ngOnInit() {
  }


  constructor(private gyroscope: Gyroscope) { }

  activarAlarma()
  {

  let options: GyroscopeOptions = {
    frequency: 1000
  };

  this.gyroscope.getCurrent(options)
    .then((orientation: GyroscopeOrientation) => {
      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
    })
    .catch()


  this.gyroscope.watch()
    .subscribe((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
    });
    }

}
