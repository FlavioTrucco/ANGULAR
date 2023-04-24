import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';

  nombre = 'Flavio T';

  textoPlaceHolder = 'Escriba aqui'

  disabledinput = true;

  img1 = "https://sanlorenzo.com.ar/img/noticias/2023/cc/03-26_1679851472.jpg"

  img2 = "assets/img/Captura de pantalla_20221021_211549.png"

textoEventBinding = "Binding"

  constructor(){
    setInterval(() =>{

      this.nombre = 'Jose'
      this.disabledinput = false;
    },
    3000

    )
  }

  getSuma(num1: number, num2: number){
    return num1 + num2;
  }

cambiarTexto (){
  this.textoEventBinding = "texto Modificado"
}

}
