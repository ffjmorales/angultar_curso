import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

  text_color: string = '';
  button_disabled: boolean = false;

  src:string = "https://media.istockphoto.com/id/1365125616/photo/wood-texture-with-natural-pattern-dark-wooden-background-brown-board.jpg?s=1024x1024&w=is&k=20&c=SNiNMiAAN-0EiKWuYWSktgSu_F2aofLn398-HLSK1ZM="
}
