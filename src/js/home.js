import $ from 'jquery';
import '../css/main';
import { Person, createMenu } from './common/utils';
$("body").html("<div class='public_title'>这是公司简介页面</div><div id='container'></div>");
$("#container").html("<div class='inner'>秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。</div><ul>" + createMenu() + "</ul>");