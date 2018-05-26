import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GooglemapPage} from "../googlemap/googlemap";
import {ContactsPage} from "../contacts/contacts";
import {CameraPage} from "../camera/camera";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  googleMap(){
    this.navCtrl.push(GooglemapPage);
  }

  Contact(){
    this.navCtrl.push(ContactsPage);
  }

  Camera(){
    this.navCtrl.push(CameraPage);
  }

}
