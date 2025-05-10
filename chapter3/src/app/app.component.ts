import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConditionalComponent } from './conditional/conditional.component';
import { LoopingComponent } from './looping/looping.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConditionalComponent, LoopingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
