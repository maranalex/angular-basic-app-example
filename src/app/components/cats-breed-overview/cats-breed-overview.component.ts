import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../../api/cats/cats-api.types';
import { CatsService } from '../../api/cats/cats.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cats-breed-overview',
  templateUrl: './cats-breed-overview.component.html',
  styleUrls: ['./cats-breed-overview.component.scss'],
})
export class CatsBreedOverviewComponent implements OnInit {
  breeds!: Observable<Breed[]>;
  constructor(
    private catsService: CatsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.breeds = this.catsService.getBreeds();
  }

  displayDetails(id: string): void {
    console.log(id);
    this.router.navigate(['details', id], {
      relativeTo: this.route,
    });
  }
}
