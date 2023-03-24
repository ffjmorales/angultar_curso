import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  personas: Persona[] = [
    {nombre: 'Juan', edad: 10},
    {nombre: 'Pedro', edad: 20},
    {nombre: 'Marie', edad: 30},
    {nombre: 'Laura', edad: 30},
  ]
}
