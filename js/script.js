var zoom1 = new ch.Zoom(ch('#zoom-default')[0]);


var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
    pagination: false
});

var dropdown1 = new ch.Dropdown(document.querySelector('.demo-dropdown1'));
var dropdown2 = new ch.Dropdown(document.querySelector('.demo-dropdown2'), {
	'shortcuts': false,
});

var tabs = new ch.Tabs(ch(".demo-tabs")[0]);
