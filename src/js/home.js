import $ from 'jquery';
import '../css/main';
import { createMenu } from './common/utils';
$(".container").html("<ul>" + createMenu() + "</ul><div class='inner'><h1>出塞二首·其一</h1><h2>--王昌龄·唐</h2><p>秦时明月汉时关，万里长征人未还。</p><p>但使龙城飞将在，不教胡马度阴山。</p></div>");

if (module.hot) {
    module.hot.accept();
}