import { Component } from '@angular/core';

@Component({
  selector: 'app-looping',
  imports: [],
  templateUrl: './looping.component.html',
  styleUrl: './looping.component.css'
})
export class LoopingComponent {
  users = ["Jade", "Jasmine", "Ray", "Fin", "Phil", "Cry", "Tin"];

  students = [
    {name: "Jade", age: 12, email: "jade@gmail.com"},
    {name: "Jasmine", age: 13, email: "jas@gmail.com"},
    {name: "Ray", age: 14, email: "ray123@gmail.com"},
    {name: "Fin", age: 15, email: "finny432@gmail.com"}
  ]
}
