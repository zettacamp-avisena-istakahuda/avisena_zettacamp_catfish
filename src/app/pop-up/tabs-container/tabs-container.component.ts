import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>  //untuk mengambil data children
  constructor() {
   }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(tab => tab.active)
    if(!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

    selectTab(tab: TabComponent) {  //berfungsi untuk aktivasi tab terpilih dan mendeaktivasi tabs lain
      this.tabs?.forEach(tab => {
        tab.active = false
      })
      tab.active = true
      return false
    }
  
    isTabActive(tabName: string){
      return this.tabs?.find(element => element.tabTitle ===tabName)?.active
      
    }
    isTabActive2(tabName: TabComponent){
      return this.tabs?.find(element => element.tabTitle ===tabName.tabTitle)?.active
    }
}
