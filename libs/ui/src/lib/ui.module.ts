import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataModule } from '@vitae/data';
import { AtLocationComponent } from './atoms/at-location/at-location.component';
import { ByAgencyComponent } from './atoms/by-agency/by-agency.component';
import { OnTimeComponent } from './atoms/on-time/on-time.component';
import { ProgressComponent } from './atoms/progress/progress.component';
import { TitleComponent } from './atoms/title/title.component';
import { TrackDirective } from './directives/track.directive';
import { ErrorMessageComponent } from './molecules/error-message/error-message.component';
import { ReactiveInputComponent } from './molecules/reactive-input/reactive-input.component';
import { ResultsHeaderComponent } from './molecules/results-header/results-header.component';
import { SearchInputComponent } from './molecules/search-input/search-input.component';
import { WaitingMessageComponent } from './molecules/waiting-message/waiting-message.component';
import { TimeToGoPipe } from './pipes/time-to-go.pipe';
import { CardComponent } from './templates/card/card.component';
import { ExplorerComponent } from './templates/explorer/explorer.component';
import { ResultsComponent } from './templates/results/results.component';
@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, DataModule],
  declarations: [
    TitleComponent,
    ExplorerComponent,
    ResultsHeaderComponent,
    CardComponent,
    OnTimeComponent,
    AtLocationComponent,
    WaitingMessageComponent,
    ErrorMessageComponent,
    ResultsComponent,
    ByAgencyComponent,
    ProgressComponent,
    SearchInputComponent,
    ReactiveInputComponent,
    TimeToGoPipe,
    TrackDirective,
  ],
  exports: [
    TitleComponent,
    ExplorerComponent,
    ResultsHeaderComponent,
    CardComponent,
    OnTimeComponent,
    ByAgencyComponent,
    AtLocationComponent,
    WaitingMessageComponent,
    ErrorMessageComponent,
    ResultsComponent,
    ProgressComponent,
    SearchInputComponent,
    ReactiveInputComponent,
    TimeToGoPipe,
    TrackDirective,
  ],
})
export class UiModule {}
