import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {TouchSequence} from 'selenium-webdriver';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public recommendations: any;
    public items: any;

    constructor(private dataService: DataService,
                private router: Router) {

    }

    ngOnInit() {
        this.dataService.getLocalData().subscribe(tecnicas => {
            this.items = tecnicas;
        });

        this.dataService.getRecommendation().subscribe(data => {
            this.recommendations = data;
            console.log(data);
        });
    }

    compareNames() {
    }

}
