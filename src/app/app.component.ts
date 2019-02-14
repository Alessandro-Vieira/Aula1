import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aula de Angular';
  frutas = [{fruta:'Uva',preco:'2.00'},
  {fruta:'Manga',preco:'3.00'}];
  frut: string;
  valor: string;
  adicionar(){
    if(this.frut == "" || this.valor == "" || this.frut == null || this.valor == null){
      alert("Preencha o Campo");
    }
    else{
      this.frutas.push({'fruta':this.frut,'preco':this.valor});
      this.frut="";
      this.valor="";
    }
  }
  excluir(e){
    this.frutas.splice(e,1);
  }
}
