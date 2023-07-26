import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../../api/cats/cats.service';
import { Breed } from '../../../api/cats/cats-api.types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-breed-details',
  templateUrl: './cat-breed-details.component.html',
  styleUrls: ['./cat-breed-details.component.scss'],
})
export class CatBreedDetailsComponent implements OnInit {
  breed: Breed;
  constructor(
    private catsService: CatsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.breed = this.catsService.cachedBreeds.find(
        (breed) => breed.id === params.get('id')
      );
    });
  }
}
