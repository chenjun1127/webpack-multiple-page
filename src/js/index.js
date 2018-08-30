import $ from 'jquery';
import '../css/main';
import { Person, createMenu } from './common/utils';
$(".container").html(`<ul>${createMenu()}</ul><div class='inner'>Hello,${new Person('jone',30).speak()},This page is index!</div>`);

// 让HMR知道这个文件是可以热加载的，
if (module.hot) {
    module.hot.accept();
}