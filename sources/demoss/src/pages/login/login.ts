import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {WelcomePage} from "../welcome/welcome";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message){
    this.alertCtrl.create({
      title: 'Bienvenue',
      subTitle: message,
      buttons: ['OK']
    }).present();

  }

  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.username.value,this.password.value)
      .then(data => {
        console.log('y a des data', this.fire.auth.currentUser);
        this.alert('Connexion réussie');
        this.navCtrl.setRoot( WelcomePage );
      })
      .catch(error => {
        console.log('essai encore !', error);
        this.alert(error.message);
      });
    console.log(this.password.value, this.username.value);
  }

}
