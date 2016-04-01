# Web-Utilities

#Author
John Mezzanotte

#Created On
3-28-2016

#Overview
This project contains a javascript library that assists in common web development tasks. So far I have one utility in this
project, and that is navtools.js. This script has mainly assisted me in creating dynamic submenus for navigation bars. 

#Package Contents 
- navtools.js

______________________________________________________________________________________________________________________________________
#Usage

navtools.js
- Creating a dynamic submenu :Here is a quick sample of how to use this package using pure JavaScript. Here I have just created very simple navbar with one submenu. We use a simple unordered list with a single nested unordered list that we will use as our submenu. 

Limitations of navtools.js 
- So far navtools.js does not support nested submenus. navtools.js works best and has been tested for use with a single submenu. This is a good idea for future development -- extending this script to handle nested submenus. For now stick with using this script for simple navigation bar applications only one submenu per navbar item. 

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
After running this code (along with some css styling) the result will look this:
![navtools_ex1](https://cloud.githubusercontent.com/assets/11713216/14199107/516ac4c8-f796-11e5-8cfa-ee2b8bb0abc4.png)

Test section 2 is assigned the navtools.submenus.open() function on the mouseover event and navtools.submenus.close(1000) on the mouse out event. Navtools will look for the next sibling of the 'section-2' element. Navtools identifies That next element by looking for the "submenu" class which is given the the unordered list element nested inside of section-2 element. In order for the submenu to stay active for a moment we assign the submenu ("section-2-submenu") the navtools.submenus.keep() function on the mouseover event. This function will clear the timer that was set on the element during the navtools.submenus.open function. In order to ensure the submenu closes once the user moves out of the element we assign the navtools.submenus.close() function to the mouseout event. 
