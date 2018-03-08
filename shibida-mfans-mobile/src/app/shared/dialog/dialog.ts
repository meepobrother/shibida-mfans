import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'dialog',
    templateUrl: 'dialog.html'
})

export class DialogComponent implements OnInit {
    @Input() props: any = {
        title: '操作成功',
        content: '恭喜您操作成功',
        btn: [{
            title: '我知道了',
            style: 'weui-dialog__btn_default',
            callback: () => { }
        }]
    }
    constructor() { }

    ngOnInit() { }

    doClick(item: any) {
        item.callback && item.callback();
    }
}