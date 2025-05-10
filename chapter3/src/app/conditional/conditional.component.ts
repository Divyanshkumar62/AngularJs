import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  imports: [],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css'
})
export class ConditionalComponent {
  color: string = 'red';

  toggleDiv(color: string){
    this.color = color;
  }
  
  colorText: string = "red"
  toggleColor(event: Event){
    this.colorText = (event.target as HTMLInputElement).value;
    this.color = this.colorText
  }
}
