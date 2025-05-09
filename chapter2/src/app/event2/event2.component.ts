import { Component } from '@angular/core';

@Component({
  selector: 'app-event2',
  imports: [],
  templateUrl: './event2.component.html',
  styleUrl: './event2.component.css'
})
export class Event2Component {
  displayName: string=""
  name: string=""
  handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
    this.name = inputElement.value;
  }

  getName(){
    this.displayName = this.name
  }

  email: string = ""
  displayEmail: string = ""
  getEmail(value: string){
    this.email = value
    this.displayEmail = this.email
  }
  setEmail(){
    this.email = "default@gmail.com"
  }
}
