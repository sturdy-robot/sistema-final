import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.page.html',
    styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
    item: any;
    defaultHref: any;
    rate: any;
    userId: any;

    constructor(
        private dataProvider: DataService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        // O conteúdo selecionado pelo usuário é pego pelo ID do Item e mostrado na tela de detalhes
        const userId = this.route.snapshot.paramMap.get('userId');
        this.dataProvider.getLocalData().subscribe((data: any) => { // pega o json
            const itemId = this.route.snapshot.paramMap.get('itemId'); // associa ao ItemID
            const itemid = Number(itemId);
            for (const conteudo of data) { // Procura o conteúdo com mesmo ID
                if (conteudo.itemid === itemid) {
                    this.item = conteudo; // devolve o conteúdo com o ID encontrado
                    break;
                }
            }
        });
    }
    onModelChange(rate) {
        this.dataProvider.submitRating(this.userId, this.item.itemid, rate);
        console.log(this.item.itemid);
    }
}
