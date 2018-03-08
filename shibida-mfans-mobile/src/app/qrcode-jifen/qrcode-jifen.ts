import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../shared/app.service';
@Component({
    selector: 'qrcode-jifen',
    templateUrl: 'qrcode-jifen.html'
})
export class QrcodeJifenPage implements OnInit {
    url: string;
    constructor(
        public app: AppService
    ) { }

    ngOnInit() {
        this.url = this.app.getMobileUrl('paybyjifen', { uid: this.app.userinfo.uid });
        console.log(this.url);
    }
}