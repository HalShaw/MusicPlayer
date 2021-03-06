import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  @Input() paused;
  
  @Output() backward = new EventEmitter();
  @Output() pausePlay = new EventEmitter();
  @Output() forward = new EventEmitter();
  @Output() random = new EventEmitter();
  @Output() stop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showPause(pause,play) {
    $(pause).show();
    $(play).hide();
  }

  showPlay(pause,play) {
    $(play).show();
    $(pause).hide();
  }

}
