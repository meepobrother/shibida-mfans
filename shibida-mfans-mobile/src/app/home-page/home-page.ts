import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.scss']
})
export class HomePage implements OnInit {
    footer: any[] = [{
        title: '首页',
        default: {
            icon: 'home'
        },
        do: 'home'
    }, {
        title: '兑换',
        default: {
            icon: 'home'
        },
        do: 'recharge'
    }, {
        title: '会员卡',
        default: {
            icon: 'home'
        },
        do: 'card'
    }];
    constructor(
        public app: AppService
    ) { }

    ngOnInit() { }
}
