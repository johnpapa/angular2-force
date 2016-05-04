import { Component, Input } from '@angular/core';

import { Hero } from './hero.model';

@Component({
  moduleId: module.id,
  selector: 'toh-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
}
