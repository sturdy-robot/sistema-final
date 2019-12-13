import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import _ from 'lodash';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public recommendations: any;
    public allRecommendations: any;
    public queryText: string;
    public userId: any;
    public randOn: any;

    constructor(private dataService: DataService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('userId');
        this.randOn = this.route.snapshot.paramMap.get('randOn');
        this.dataService.getRecommendation(this.userId, this.randOn).subscribe(data => {
            this.allRecommendations = data;
            this.recommendations = this.allRecommendations;
        });
    }

    filterTags(tag: any) {
        const val = tag.target.value;
        if (val && val.trim() !== '') {
            this.recommendations = _.values(this.allRecommendations);
            this.recommendations = this.recommendations.filter((recommendations) => {
                return (recommendations.nome.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || recommendations.tecnicas.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || recommendations.tipo.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || recommendations.problema.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || recommendations.gestor.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || recommendations.modelo.toLowerCase().indexOf(val.toLowerCase()) > -1
                );
            });
        } else {
            this.recommendations = this.allRecommendations;
        }
    }

}
