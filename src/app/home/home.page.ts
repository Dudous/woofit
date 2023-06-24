import { Component } from '@angular/core';
import { AlertController, NavController,  ToastController, } from '@ionic/angular';
import { DogApiService } from 'src/services/dog-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dados: any;

  constructor(
  //  public mensagem: ToastController,
  //  public nav: NavController,
  //  private dog: DogApiService,
  ) {}

//  RandomDog() {
    
  //   this.dog.RandomImg().subscribe(
  //     (resp) => {
  //       this.dog = resp;
  //     }
  //   )
  // }
}
