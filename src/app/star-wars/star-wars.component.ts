import { Component, OnInit } from '@angular/core';
import { PersonagensStarWarsService } from '../personagens-star-wars.service';
import { PersonagemClass } from '../personagem-class';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  public personagens: PersonagemClass[] = [];

  constructor(private _service: PersonagensStarWarsService) {}

  ngOnInit(): void {
    this.getPersonagensFromService();
  }

  public getPersonagensFromService(): void {
    this._service.getPersonagens().subscribe(
      (res: PersonagemClass[]) => {
        this.personagens = res;
      }
    );
  }

}
