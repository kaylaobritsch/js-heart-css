var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $firstchild = $('main p:first-child');
var $h2 = $('h2');
var $mainList = $('main ul');
var $images = $('img');
var $firstlist = $('ul li:first-child');
var $lastlist = $('ul li:last-child');
var $dl = $('dl');
var $dt = $('dt');
var $last = $('main > section > ul > li:last-child');

$header.addClass('masthead');
$h1.removeClass('big-heading');
$h1.addClass('logo');
$main.addClass('wrapper');
$firstchild.addClass('intro');
$h2.addClass('slug-head');
$mainList.addClass('slug-list');
$images.addClass('slug-img');
$firstlist.addClass('slug-list-first');
$lastlist.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');
$last.show();
