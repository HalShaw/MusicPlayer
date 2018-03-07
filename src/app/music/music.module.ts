import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { AutoCompleteModule } from 'primeng/primeng';

import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { SharedComponent } from './shared/shared.component';
import { MusicService } from './shared/music.service';
import { ApiService } from './shared/api.service';

@NgModule({
  imports: [
    FormsModule,
    // AutoCompleteModule,
    HttpModule,
    CommonModule
  ],
  exports: [
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicFooterComponent
  ],
  declarations: [
    MusicDetailsComponent, 
    MusicFooterComponent, 
    MusicSearchComponent, 
    MusicProgressComponent, 
    SharedComponent,
    MusicPlayerComponent
  ],
  providers: [
    MusicService,
    ApiService
  ]
})
export class MusicModule { }
