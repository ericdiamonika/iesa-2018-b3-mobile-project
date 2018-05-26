import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Contact, Contacts, ContactFindOptions, ContactFieldType, ContactName, ContactField } from '@ionic-native/contacts';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  error:string;
  contacts:Contact[]=[];
  numbers:any;

  constructor(public navCtrl: NavController,
              private contactsService: Contacts,
              public alertCtrl: AlertController,
              private callNumber: CallNumber
  ){
  }

  findContacts() {
    const options = new ContactFindOptions();
    options.filter = 'John';
    options.multiple = true;
    options.hasPhoneNumber = true;
    const fields: ContactFieldType[] = ['name'];
    this.contactsService.find(fields, options)
      .then(v => this.contacts = v)
      .catch(error => {
        this.error = error;
        this.alertCtrl.create({
          title: 'ERROR',
          subTitle: JSON.stringify(error),
          buttons: ['OK']
        }).present();

      });
  }

  createContact() {
    let contact: Contact = this.contactsService.create();

    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => {
        this.error = error;
        this.alertCtrl.create({
          title: 'ERROR',
          subTitle: JSON.stringify(error),
          buttons: ['OK']
        }).present();
      }
    );
  }

  pickContact() {
    this.contactsService.pickContact()
      .then(v => this.contacts = [v])
      .catch(error => {
        this.error = error;
        this.alertCtrl.create({
          title: 'ERROR',
          subTitle: JSON.stringify(error),
          buttons: ['OK']
        }).present();

      });
  }
  callNumberFn(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  openContact() {
    this.contactsService.pickContact()
      .then((response: Contact) => {
        this.numbers = response.phoneNumbers[0].value;
        this.callNumberFn(response.phoneNumbers[0].value)
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
