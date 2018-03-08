import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'card-page',
    templateUrl: './card-page.html',
    styleUrls: ['./card-page.scss']
})
export class CardPage implements OnInit {
    list: any[] = [];
    constructor(
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        this.app.autoLogin();
    }

    toPage(page: string) {
        this.router.go(page);
    }
}
