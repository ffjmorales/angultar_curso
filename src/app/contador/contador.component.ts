import { Component } from "@angular/core";
import { Persona } from "../personaTest";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})
export class ContadorComponent{

    //puede ser sin :string, esto es gracia a typescript
    name:string = 'Flavio Morales';

    //object

    //estoy usando una interfaz para definir el tipo de dato, pero no es necesario
    
    personalData:Persona = {
        age: 33,
        city: 'Sault Ste Marie'
    }

    counter:number = 0;

    decrease (){
        this.counter--;
    }
    increment (){
        this.counter++;
    } 
}

