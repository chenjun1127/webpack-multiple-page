import $ from 'jquery';
import '../css/main';
import { createMenu } from './common/utils';
$(".container").prepend("<ul>" + createMenu() + "</ul>");

// 让HMR知道这个文件是可以热加载的，
if (module.hot) {
    module.hot.accept();
}