import { Component, ViewChild } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message){
    this.alertCtrl.create({
      title: 'Félicitations',
      subTitle: message,
      buttons: ['OK']
    }).present();

  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.username.value,this.password.value)
      .then(data => {
        console.log('y a des data', data);
        this.alert('Inscription réussie');
        this.navCtrl.setRoot( LoginPage );
      })
      .catch(error => {
        console.log('essai encore !', error);
        this.alert(error.message);
      });
    console.log(this.password.value, this.username.value);
}

}
