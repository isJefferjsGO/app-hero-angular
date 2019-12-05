import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroeId: number;
  public heroe;
  constructor(
    private activateRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activateRoute.params.subscribe(params => {
      this.heroeId = params['id'];
      this.heroe = _heroesService.getHeroe(this.heroeId);
    });
  }

  ngOnInit() {}

}
