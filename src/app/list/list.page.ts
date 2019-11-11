import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public items: any;
  constructor(private dataService: DataService,
              private router: Router) {}

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.dataService.getLocalData().subscribe((items: any[]) => {
      this.items = items;
    });
  }

}
