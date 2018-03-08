import { HomePage } from './home-page/home-page';
import { CardPage } from './card-page/card-page';
import { RechargePage } from './recharge-page/recharge-page';
import { LogPage } from './log-page/log-page';

import { SharePage } from './share-page/share-page';
import { CarPage } from './car-page/car-page';
import { MoneyPage } from './money-page/money-page';


import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';
import { ForgetPage } from './forget-page/forget-page';
import { MyInfoPage } from './my-info/my-info';
import { MessagePage } from './message-page/message-page';
import { XichePage } from './xiche-page/xiche-page';
import { CouponPage } from './coupon-page/coupon-page';

import { QrcodePayPage } from './qrcode-pay/qrcode-pay';
import { QrcodeXichePage } from './qrcode-xiche/qrcode-xiche';
import { QrcodeJifenPage } from './qrcode-jifen/qrcode-jifen';

import { MessageDetailPage } from './message-detail/message-detail';

import { CarAddPage } from './car-add/car-add';
import { CarNumPage } from './car-num/car-num';

export const routes = [{
    path: 'qrcodepay',
    component: QrcodePayPage,
    login: true
}, {
    path: 'qrcodexiche',
    component: QrcodeXichePage,
    login: true
}, {
    path: 'qrcodejifen',
    component: QrcodeJifenPage,
    login: true
}, {
    path: 'index',
    component: CardPage,
    login: false
}, {
    path: 'home',
    component: CardPage,
    login: false
}, {
    path: 'card',
    component: CardPage,
    login: true
}, {
    path: 'recharge',
    component: RechargePage,
    login: true
}, {
    path: 'log',
    component: LogPage,
    login: true
}, {
    path: 'login',
    component: LoginPage,
    login: false
}, {
    path: 'register',
    component: RegisterPage,
    login: false
}, {
    path: 'forget',
    component: ForgetPage,
    login: false
}, {
    path: 'share',
    component: SharePage,
    login: true
}, {
    path: 'car',
    component: CarPage,
    login: true
}, {
    path: 'money',
    component: MoneyPage,
    login: true
}, {
    path: 'myinfo',
    component: MyInfoPage,
    login: true
}, {
    path: 'message',
    component: MessagePage,
    login: true
}, {
    path: 'xiche',
    component: XichePage,
    login: true
}, {
    path: 'coupon',
    component: CouponPage,
    login: true
}, {
    path: 'messagedetail',
    component: MessageDetailPage,
    login: true
}, {
    path: 'carAdd',
    component: CarAddPage,
    login: true
}, {
    path: 'carNum',
    component: CarNumPage,
    login: true
}];

export const components = [
    HomePage,
    CardPage,
    RechargePage,
    LogPage,
    LoginPage,
    RegisterPage,
    ForgetPage,
    SharePage,
    CarPage,
    MoneyPage,
    MyInfoPage,
    MessagePage,
    XichePage,
    CouponPage,
    QrcodePayPage,
    QrcodeXichePage,
    MessageDetailPage,
    QrcodeJifenPage,
    CarAddPage,
    CarNumPage
];
