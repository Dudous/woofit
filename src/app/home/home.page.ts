import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { Observable } from 'rxjs';
import { DogService } from 'src/services/dog-service.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent)
  content!: IonContent;
  public url = 'https://dog.ceo/api/breeds/image/random';
  public image = '';
  public result: any = {};
  dog = { nome: '', idade: '', imagem: '' };

  constructor(
    private http: HttpClient,
    private mensagem: ToastController,
    public servico: DogService,
    public nav: NavController
  ) {}

  RandomDog() {
    this.consultaApi().subscribe(
      (resp) => {
        this.result = resp;
        this.image = this.result.message;
      },
      (error) => {}
    );
  }

  consultaApi() {
    return this.http.get(this.url);
  }

  gerar() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const resp = await this.consultaApi().toPromise();
        this.result = resp;
        resolve(this.result.message);
      } catch (error) {
        reject(error);
      }
    });
  }

  async Cadastrar() {
    if (this.dog.nome == '' || this.dog.idade == '') {
      this.exibeToast('Preencha os campos necessários', 'danger');
    } else {
      this.dog.imagem = await this.gerar();
      this.servico.Salvar(this.dog.nome, this.dog.idade, this.dog.imagem);
      this.nav.navigateForward('/detalhes');
      this.dog.nome = '';
      this.dog.idade = '';
    }
  }

  async exibeToast(msg: string, cor: string) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: 2000,
      position: 'top',
      animated: true,
      color: cor,
    });

    toast.present();
  }

  scroll() {
    setTimeout(() => {
      
      this.content.scrollToBottom(500);
    }, 150);
  }
}
