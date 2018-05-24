import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {ListPage} from "../list/list";
import {ContactsPage} from "../contacts/contacts";

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
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();

  }

  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.username.value,this.password.value)
      .then(data => {
        console.log('y a des data', this.fire.auth.currentUser);
        this.alert('Succes logged in');
        this.navCtrl.setRoot( ContactsPage );
      })
      .catch(error => {
        console.log('y a des error', error);
        this.alert(error.message);
      });
    console.log(this.password.value, this.username.value);
  }

}
