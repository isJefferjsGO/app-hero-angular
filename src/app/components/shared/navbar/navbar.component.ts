import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public _heroesService: HeroesService
  ) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    console.log(this._heroesService.buscarHeroe(termino));
  }
}
