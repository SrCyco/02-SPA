import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchHeroes:Heroe[] = [];
  termino: string;
  searchLength: number;

  constructor( private _heroesService: HeroesService,
               private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params[ 'termino' ];
      this.searchHeroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

}
