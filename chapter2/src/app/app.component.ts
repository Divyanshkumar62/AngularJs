import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Event1Component } from './event1/event1.component';
import { CounterComponent } from './counter/counter.component';
import { Event2Component } from './event2/event2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Event1Component, CounterComponent, Event2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chapter2';
}
