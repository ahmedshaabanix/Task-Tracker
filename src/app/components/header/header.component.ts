import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'task tracker';
  showAddTask: boolean = true;
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  // life cycle method use when intialize some code
  ngOnInit(): void { }

  ToggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
