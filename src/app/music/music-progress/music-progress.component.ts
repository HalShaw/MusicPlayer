import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-progress',
  templateUrl: './music-progress.component.html',
  styleUrls: ['./music-progress.component.css']
})
export class MusicProgressComponent implements OnInit {

  @Input() elapsed: string;
  @Input() total: string;
  @Input() current: number;
  
  constructor() { }

  ngOnInit() {
  }

}
