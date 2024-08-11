import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactModel = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted', this.contactModel);
  }
}
