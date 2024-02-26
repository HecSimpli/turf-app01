import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurfingSampleComponent } from '../turfing-sample/turfing-sample.component';
import { TurfSample } from '../turf-sample';
import { TurfingService } from '../turfing.service';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, TurfingSampleComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name or Oz">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <hr>
    <section class="results">
      <app-turfing-sample *ngFor="let turfSample of turfSampleList" [turfingSample]="turfSample"></app-turfing-sample>

    </section>
   
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  turfSampleList: TurfSample[] = [];
  turfingService: TurfingService = inject (TurfingService);

  constructor() {
    this.turfSampleList = this.turfingService.getAllTurfingSamples();
  }
}
