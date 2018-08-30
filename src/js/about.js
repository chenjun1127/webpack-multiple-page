import $ from 'jquery';
import '../css/main';
import { Person, createMenu } from './common/utils';
$("body").html("<div class='public_title'>这是关于我们页面</div><div id='container'></div>");
$("#container").html("<div class='inner'>青海长云暗雪山，孤城遥望玉门关。黄沙百战穿金甲，不破楼兰终不还。</div><ul>" + createMenu() + "</ul>");

// 让HMR知道这个文件是可以热加载的，
if (module.hot) {
    module.hot.accept();
}