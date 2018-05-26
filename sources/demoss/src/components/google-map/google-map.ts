import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";
declare var google;
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  map:any;
  @ViewChild("map") mapElement: ElementRef;
  constructor(public navCtrl: NavController,public geolocation: Geolocation) {

  }

  ngOnInit(){
    this.loadMap()
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {

        center: latLng,
        zoom: 15,
        streetViewControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    },(err) => {
      console.log(err);
    });
  }

}
