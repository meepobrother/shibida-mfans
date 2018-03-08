
import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';

@Component({
    selector: 'message-page',
    templateUrl: 'message-page.html'
})

export class MessagePage implements OnInit {
    page = 1;
    psize = 20;
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
        const url = this.app.getMobileUrl('getmessagelist', { page: this.page, psize: this.psize });
        this.http.get(url).subscribe((res: any[]) => {
            this.list = res;
        });
    }

    toDetail(item: any) {
        this.router.go('messagedetail', { did: item.notice_id });
    }
}