import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'coupon-page',
    templateUrl: './coupon-page.html'
})
export class CouponPage implements OnInit {
    list: any[] = [];
    constructor(
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        let url = this.app.getMobileUrl('getmycoupon');
        this.http.get(url).subscribe((res: any) => {
            this.list = res;
            console.log(this.list);
        });
    }
}
