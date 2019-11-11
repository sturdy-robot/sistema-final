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
      const itemId = this.route.snapshot.paramMap.get('itemId');
      const itemid = Number(itemId);
      for(const conteudo of data) {
        if (conteudo.itemid === itemid) {
          this.item = conteudo;
          break;
        }
      }
    });
  }
}
