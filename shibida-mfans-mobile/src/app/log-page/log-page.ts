import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'log-page',
    templateUrl: './log-page.html'
})
export class LogPage implements OnInit {
    page: number = 0;
    psize: number = 20;
    list: any[] = [];
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }

    ngOnInit() { 
        this.init();
    }

    init() {
        const url = this.app.getMobileUrl('getloglist', { page: this.page, psize: this.psize });
        this.http.get(url).subscribe((res: any[]) => {
            this.list = res;
        });
    }
}
