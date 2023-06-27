import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, NavController, ToastController, } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public url = 'https://dog.ceo/api/breeds/image/random';
  public image = '';
  public result: any = {};
  dog ={nome: '', idade: ''};

  constructor(private http: HttpClient) { }

  RandomDog() {
    this.consultaApi().subscribe(
      (resp) => {
        this.result = resp;
        this.image = this.result.message;
      },
      (error) => { }
    );
  }

  consultaApi() {
    return this.http.get(this.url);
  }

  Cadastrar(){
    this.dog.nome = ''
    this.dog.idade = ''
    alert("Teste")

  }
}
