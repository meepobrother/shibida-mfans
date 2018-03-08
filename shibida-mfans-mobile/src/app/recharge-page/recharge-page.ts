import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'recharge-page',
    templateUrl: './recharge-page.html',
    styleUrls: ['./recharge-page.scss']
})
export class RechargePage implements OnInit {
    list: any[] = [];

    tabs: any[] = [{
        title: '礼品',
        active: true,
        code: 'goods'
    }, {
        title: '卡券',
        active: false,
        code: 'coupon'
    }];

    constructor(
        public app: AppService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        this.app.autoLogin();
        this.tabs.map(res => {
            if (res.active) {
                this.switchTab(res);
            }
        });
    }

    getGoods() {
        let url = this.app.getMobileUrl('getrechargegoods');
        this.http.get(url).subscribe((res: any) => {
            this.list = res;
        });;
    }

    getCoupon() {
        let url = this.app.getMobileUrl('getrechargecoupons');
        this.http.get(url).subscribe((res: any) => {
            this.list = res;
        });;
    }

    switchTab(tab: any) {
        this.tabs.map(res => {
            res.active = false;
        });
        tab.active = true;
        this.activeTab = tab;
        if (tab.code === 'goods') {
            this.getGoods();
        }
        if (tab.code === 'coupon') {
            this.getCoupon();
        }
    }
    showDialog: boolean = false;
    dialog: any;
    activeTab: any;

    rechargeCoupon(item, index) {

    }
    rechargeGoods(item: any, index: number) {
        let code = 'goods';
        this.tabs.map(res => {
            if (res.active) {
                code = res.code;
            }
        });
        let url = this.app.getMobileUrl('rechargegood', { code: code });
        this.http.post(url, item).subscribe((res: any) => {
            let title: string = '兑换成功';
            let content: string = '恭喜您兑换成功';
            if (res.errno == '-1') {
                title = '操作失败';
                content = res.message;
            }
            this.dialog = {
                title: title,
                content: content,
                btn: [{
                    title: '我知道了',
                    style: 'weui-dialog__btn_default',
                    callback: () => {
                        this.showDialog = false;
                    }
                }]
            }
            this.showDialog = true;
        });
    }
}
