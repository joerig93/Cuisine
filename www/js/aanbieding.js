(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 200,
	fps: 24,
	color: "#783218",
	webfonts: {},
	manifest: [
		{src:"images/animate/airplane.mp3", id:"airplane"},
		{src:"images/animate/click.mp3", id:"click"},
		{src:"images/animate/hover.mp3", id:"hover"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.boek1 = function() {
	this.spriteSheet = ss["aanbieding_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boek12 = function() {
	this.spriteSheet = ss["aanbieding_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boek2 = function() {
	this.spriteSheet = ss["aanbieding_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.vliegtuig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// noun_24748_cc.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirB2QidgVhVgSIg0gMIAAgBIgOjUIBGAAIBDBeQAWAfAiAMQARAFANgBII6AAIApADQApAEAUAUQABADAHAGQAJAJAJADQAMAEALAKQAOAMABANQABAXgnARIgJAEQgbAKgjAEQg7AHiLAAQiDAAjVgdgAnEA8IApAJQBQARCiAWQDTAdCDAAQCKAAA6gHQAjgDAZgLIAKgDQAfgPAAgPQgBgKgMgJQgJgIgJgDIgFgCIhYAAIAAgcIA3AAQgSgOgkgEIgggCIo7AAQgPABgSgEQglgMgYgiIhAhaIg3AAIALCyIAHgWIA2AAIBKApIgEAJIhJgoIgrAAgAGjApIgHgIIg4AAIAAAIIA/AAgAB2AhIhdAAIgYBNIgHgDIAIgfIghAAIAAgvIApAAIAAASIAIgYIBmAAIAPAIIAAgCIAsAAIAAAaIAMAHIAAghIAsAAIAAAvIgTAAIA0AcIgFAJgADJBCIAYAAIAAgbIgYAAgAgVBCIAVAAIAAgbIgVAAgACpAwIAAgJIgSAAgAD3BMIAAgvIAsAAIAAAvgAEBBCIAYAAIAAgbIgYAAgAhXBMIAAgvIArAAIAAAvgAhNBCIAXAAIAAgbIgXAAgAiPBMIAAgvIArAAIAAAvgAiFBCIAXAAIAAgbIgXAAgAjHBMIAAgvIArAAIAAAvgAi9BCIAXAAIAAgbIgXAAg");
	this.shape.setTransform(49.7,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0,96.1,29.5);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boek12();
	this.instance.setTransform(-42.5,-87.7,0.279,0.279,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-87.7,144.6,175.5);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boek2();
	this.instance.setTransform(-62,-75.4,0.279,0.279,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-80.6,124,161.3);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boek2();
	this.instance.setTransform(-47.6,-85.2,0.279,0.279,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-85.2,137,170.5);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boek1();
	this.instance.setTransform(-72.7,-59,0.268,0.268,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-86.3,145.5,172.7);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boek1();
	this.instance.setTransform(-59.5,-72.2,0.268,0.268,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-77.4,119.1,154.9);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Bij aanschaf van 3 boeken,\nHet 3e boek GRATIS!", "26px 'Industry Book'", "#00CC00");
	this.text.lineHeight = 37;
	this.text.lineWidth = 397;
	this.text.setTransform(-200.2,-53.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.2,-53.6,400.5,107.2);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Bij aanschaf van 3 boeken,\nHet 3e boek GRATIS!", "26px 'Industry Book'", "#00CC00");
	this.text.lineHeight = 37;
	this.text.lineWidth = 397;
	this.text.setTransform(-200.2,-53.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.2,-53.6,400.5,107.2);


(lib.klik_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("click");
	}
	this.frame_2 = function() {
		playSound("hover");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.text = new cjs.Text("Klik hier!\nEn ga direct naar de\n webshop", "19px 'Industry Book'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 190;
	this.text.setTransform(107.7,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvPIyQhkgBAAhjIAAubQAAhjBkgBIefAAQBkABAABjIAAObQAABjhkABg");
	this.shape.setTransform(107.7,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08CC00").s().p("AvPIyQhkgBAAhjIAAubQAAhjBkgBIefAAQBkABAABjIAAObQAABjhkABg");
	this.shape_1.setTransform(107.7,56.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#636363").s().p("AvPIyQhkgBAAhjIAAubQAAhjBkgBIefAAQBkABAABjIAAObQAABjhkABg");
	this.shape_2.setTransform(107.7,56.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.3,112.4);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("GRATIS!", "29px 'Industry Book'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 148;
	this.text.setTransform(6.3,-70.9,1,1,10.4);

	this.instance = new lib.Tween18("synched",0);
	this.instance.setTransform(-5.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.1,-87.7,166.4,175.5);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("GRATIS!", "29px 'Industry Book'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 148;
	this.text.setTransform(6.3,-70.9,1,1,10.4);

	this.instance = new lib.Tween18("synched",0);
	this.instance.setTransform(-5.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.1,-87.7,166.4,175.5);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vliegtuig("synched",0);
	this.instance.setTransform(330.4,33.2,1.853,1.853,0,0,0,47.9,44.8);

	this.text = new cjs.Text("WEEKAANBIEDING!", "26px 'Industry Book'", "#08CC00");
	this.text.lineHeight = 37;
	this.text.lineWidth = 271;
	this.text.setTransform(-387.4,-26.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A9GgIQMgiMLjBWQLgBUIUA4QISA5GDiA");
	this.shape.setTransform(73.6,-10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2pEoQhkAAAAhkIAAmHQAAhkBkAAMAtTAAAQBkAAAABkIAACJIAAD+QAABkhkAAg");
	this.shape_1.setTransform(-267.8,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.8,-49.8,845.6,99.7);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vliegtuig("synched",0);
	this.instance.setTransform(330.4,33.2,1.853,1.853,0,0,0,47.9,44.8);

	this.text = new cjs.Text("WEEKAANBIEDING!", "26px 'Industry Book'", "#08CC00");
	this.text.lineHeight = 37;
	this.text.lineWidth = 271;
	this.text.setTransform(-387.4,-26.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A9GgIQMgiMLjBWQLgBUIUA4QITA5GDiA");
	this.shape.setTransform(73.6,-10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2pEoQhkAAAAhkIAAmHQAAhkBkAAMAtTAAAQBkAAAABkIAACIIAAD/QAABkhkAAg");
	this.shape_1.setTransform(-267.8,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.8,-49.8,845.6,99.7);


// stage content:
(lib.aanbieding = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		playSound("airplane");
	}
	this.frame_81 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("pages/boeken.html", "_self");
		}
	}
	this.frame_119 = function() {
		this.gotoAndPlay(100);
		console.log('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(72).call(this.frame_81).wait(38).call(this.frame_119).wait(1));

	// button
	this.button_btn = new lib.klik_btn();
	this.button_btn.setTransform(521.1,97.1,0.005,0.009,0,0,0,108.5,56.1);
	this.button_btn._off = true;
	new cjs.ButtonHelper(this.button_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_btn).wait(81).to({_off:false},0).to({regX:108.6,scaleX:0.93,scaleY:0.93,x:549.4,y:105.3},18).to({regX:108.7,scaleX:1,scaleY:1},10).to({regX:108.6,scaleX:0.93,scaleY:0.93},10).wait(1));

	// boek3
	this.instance = new lib.Tween20("synched",0);
	this.instance.setTransform(1051.4,152.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.setTransform(900.2,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},64).to({state:[{t:this.instance_1}]},17).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({_off:true,x:900.2,y:135},17).wait(39));

	// boek2
	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.setTransform(1127.4,133.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.setTransform(824.3,130.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},46).to({state:[{t:this.instance_3}]},17).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({_off:true,x:824.3,y:130.1},17).wait(57));

	// boek1
	this.instance_4 = new lib.Tween9("synched",0);
	this.instance_4.setTransform(1056.8,136.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween10("synched",0);
	this.instance_5.setTransform(748.1,136.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},37).to({state:[{t:this.instance_5}]},17).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({_off:true,x:748.1,y:136.5},17).wait(66));

	// tekst
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(-138.9,156.8);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.setTransform(269.5,156.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},44).to({state:[{t:this.instance_7}]},25).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({_off:true,x:269.5},25).wait(51));

	// weekaanbieding
	this.instance_8 = new lib.Tween5("synched",0);
	this.instance_8.setTransform(-459.9,69.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween6("synched",0);
	this.instance_9.setTransform(456.7,69.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},50).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({_off:true,x:456.7},50).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;