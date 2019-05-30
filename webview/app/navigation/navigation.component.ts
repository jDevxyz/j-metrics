import { Component, OnInit } from '@angular/core'
import { config } from './navigation.config'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  config = config

  constructor() { }

  ngOnInit() {
  }

}
