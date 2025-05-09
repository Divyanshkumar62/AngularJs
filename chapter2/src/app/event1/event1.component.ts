import { Component } from '@angular/core';

@Component({
  selector: 'app-event1',
  imports: [],
  templateUrl: './event1.component.html',
  styleUrl: './event1.component.css'
})
export class Event1Component {
  value: number = 0;
  name: string = '';

  handleClick(){
    this.value++;
  }

  mouseEvent(event: Event){
    console.log('Mouse Event Happening---', event.type);
  }

  onChange(event: Event){
    this.name = (event.target as HTMLInputElement).value
    console.log("Event Happening---", event.type)
  }
}
