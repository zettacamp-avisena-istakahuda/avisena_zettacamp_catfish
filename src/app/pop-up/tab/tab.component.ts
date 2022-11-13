import { Component, OnInit, Input} from '@angular/core';
import { TabsContainerComponent } from '../tabs-container/tabs-container.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tabTitle = '';
  @Input() active = false;
  constructor(public tabs: TabsContainerComponent) { }

  ngOnInit(): void {
  }

}
