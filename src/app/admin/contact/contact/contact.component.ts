import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  saveChanges() {
    //this.onSaveChanges.emit(this.form.value); //get access finel object
    //this.router.navigate(['/admin']);
  }
}
