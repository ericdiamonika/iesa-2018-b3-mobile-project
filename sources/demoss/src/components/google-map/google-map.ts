import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";
declare var google;
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement: ElementRef;
  constructor(public navCtrl: NavController,public geolocation: Geolocation) {

  }

  ngOnInit(){
    this.loadMap()
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      const mapOptions = {

        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  /*    setTimeout(() =>{ this.addMarker()}, 200);*/
    },(err) => {
      console.log(err);
    });
  }

}
