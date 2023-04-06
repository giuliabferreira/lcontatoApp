import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato4',
  templateUrl: './contato4.page.html',
  styleUrls: ['./contato4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class Contato4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
