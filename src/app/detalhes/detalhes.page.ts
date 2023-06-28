import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DogService } from 'src/services/dog-service.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  dog = { nome: '', idade: '', imagem: '' };
  public dogs: any[] = [];

  constructor(
    public nav: NavController,
    public alerta: AlertController,
    public servicos: DogService
  ) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    if(this.servicos.listar()){
      this.dogs = this.servicos.listar()!;
}
}
}
