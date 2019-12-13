import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import _ from 'lodash';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    public items: any;
    public allItems: any;
    public queryText: any;

    constructor(private dataService: DataService,
                private router: Router) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.dataService.getLocalData().subscribe((items: any[]) => {
            this.allItems = items;
            this.items = this.allItems;
        });
    }

    filterTags(tag: any) {
        const val = tag.target.value;
        if (val && val.trim() !== '') {
            this.items = _.values(this.allItems);
            this.items = this.items.filter((items) => {
                return (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || items.tecnicas.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || items.tipo.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || items.problema.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || items.gestor.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || items.modelo.toLowerCase().indexOf(val.toLowerCase()) > -1
                );
            });
        } else {
            this.items = this.allItems;
        }
    }

}
