
import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';

@Component({
    selector: 'xiche-page',
    templateUrl: 'xiche-page.html'
})

export class XichePage implements OnInit {
    list: any[] = [{
        title: '洗车10次',
        num: 10,
        money: 10
    }, {
        title: '洗车20次',
        num: 20,
        money: 20
    }, {
        title: '洗车30次',
        num: 30,
        money: 30
    }];
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }
    ngOnInit() { }

    payXiche(item: any) {
        let url = this.app.getMobileUrl('payxiche');
        this.http.post(url, item).subscribe((res: any) => {
            if (res.status === 1) {
                let toUrl = this.app.getMobileUrl('payorder', { tid: res.tid });
                location.href = toUrl;
            }
        });
    }
}