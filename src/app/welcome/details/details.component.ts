import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';
import { WelcomeComponent } from '../welcome.component';
// import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  // standalone: false, // by default
  standalone: true,
  imports: [
    // SharedModule,
    HighlightDirective,
    // WelcomeComponent
  ],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  // providers: [AnalyticsService]
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
