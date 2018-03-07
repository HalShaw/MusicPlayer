import { Component, OnInit } from '@angular/core';
import { MusicService } from '../app/music/shared/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  tracks: any[] = [];
  backgroundStyle;

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit() {
    this.musicService.getPlayListTracks().subscribe(tracks => {
      this.tracks = tracks;
      this.handleRandom();
    });

    // // On song end
    // this.musicService.audio.onended = this.handleEnded.bind(this);
    // // On play time update
    // this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }


  handleRandom() {
    // Pluck a song
    const randomTrack = this.musicService.randomTrack(this.tracks);
    // Play the plucked song
    // this.musicService.play(randomTrack.stream_url)
    // Set the title property
    this.title = randomTrack.title;
    // Create a background based on the playing song
    this.backgroundStyle = this.composeBackgroundStyle(randomTrack.artwork_url)
  }

  composeBackgroundStyle(url) {
    return {
      width: '100%',
      height: '800px',
      backgroundSize:'cover',
      backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.7)
  ),   url(${this.musicService.xlArtwork(url)})`
    }
  }

}
