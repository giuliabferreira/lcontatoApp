import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato1',
  templateUrl: './contato1.page.html',
  styleUrls: ['./contato1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class Contato1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
