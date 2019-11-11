import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  item: any;

  constructor(
    private dataProvider: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataProvider.getLocalData().subscribe((data: any) => {
      let itemId = this.route.snapshot.paramMap.get('itemId');
      itemId = Number(itemId);
      for(const conteudo of data) {
        if (conteudo.itemid === itemId) {
          this.item = conteudo;
          break;
        }
      }
    });
  }
}
