import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../shared/app.service';
@Component({
    selector: 'qrcode-pay',
    templateUrl: 'qrcode-pay.html'
})
export class QrcodePayPage implements OnInit {
    url: string;
    constructor(
        public app: AppService
    ) { }

    ngOnInit() {
        this.url = this.app.getMobileUrl('paybyqrcode', { uid: this.app.userinfo.uid });
        console.log(this.url);
    }
}