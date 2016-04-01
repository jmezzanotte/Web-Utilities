# Web-Utilities

#Author
John Mezzanotte

#Created On
3-28-2016

#Overview
This project contains a javascript library that assists in common web development tasks. So far I have one utility in this
project, and that is navtools.js. This script has mainly assisted me in creating dynamic submenus for navigation bars. 

#navtools.js
______________________________________________________________________________________________________________________________________
#Usage

navtools.js -  Creating a dynamic submenu.
Here is a quick sample of how to use this package using pure JavaScript. Here I have just created very simple navbar with one submenu. We use a simple unordered list with a single nested unordered list that we will use as our submenu. 

The HTML:
```
<!-- Some example html markup for a generic nav bar   -->
<nav>
		<ul>
			<li><a href="#">Test Section 1</a></li>
			<li id="section-2"><a href="#">Test Section 2</a>
			  <ul class="submenu" id="section-2-submenu">
					<li><a href="#">Submenu Item 1</a></li>
					<li><a href="#">Submenu Item 2</a></li>
				</ul>
			</li>
			<li><a href="#">Test Section 3</a></li>
		</ul>
	</nav>

```

The JavaScript
```
// A Few quick helper functions
function addEvent(obj, type, fn){
	
	'use strict';
	
	if(obj && obj.addEventListener){ // W3C
		obj.addEventListener(type, fn, false); 
	}else if (obj && obj.attachEvent){ //Older IE
		obj.attachEvent('on' + type, fn);
	}
	
}

function $(id){
	
	'use strict';
	
	if(typeof id == 'string'){
		return document.getElementById(id);
	}
}


window.onload = function(){
	
	addEvent($('section-2'), 'mouseover', navtools.submenus.open); 
	addEvent($('section-2'), 'mouseout', function(){navtools.submenus.close(1000)});
	addEvent($('section-2-submenu'), 'mouseover', navtools.submenus.keep);
	addEvent($('section-2-submenu'), 'mouseout', function(){navtools.submenus.close(1000)});
	
}

```
