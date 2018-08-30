import $ from 'jquery';
import '../css/main';
import { Person, createMenu } from './common/utils';
$("body").html("<div class='public_title'>这是首页</div><div id='container'></div>").css('background',`url(${require('../images/1-1600.jpg')}) no-repeat center center`);
$("#container").html("<div class='inner'>" + new Person('Jone', 30).speak() + "</div><ul>" + createMenu() + "</ul>");

// 让HMR知道这个文件是可以热加载的，
if (module.hot) {
    module.hot.accept();
}