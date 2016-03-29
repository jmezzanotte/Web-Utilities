var navtools = {
		submenus : {
			submenu : null, 
			timer: 0,
			open : function(e){
				
				'use strict'; 
				
				if(e == 'undefined') e = window.event; 
				
				var target = e.target || e.srcElement;
				
				// if the menu is already visible, close it 
				if(navtools.submenus.submenu) {
					if(navtools.submenus.submenu.className !='submenu'){
						navtools.submenus.submenu.style.visibility = 'hidden'; 
					}
				}
				
				if(target.nextElementSibling != null) {
					if (target.nextElementSibling.className == 'submenu'){
						navtools.submenus.submenu = target.nextElementSibling;
						navtools.submenus.submenu.style.visibility = 'visible';
						window.clearTimeout(navtools.submenus.timer); // important! Wierd things happen if we don't clear the timer here
					}
					
					
				}
				
			}, // end openMenu
			close(){
				
				navtools.submenus.timer = window.setTimeout(function(){
					// if submenu is open 
					if(navtools.submenus.submenu){
						navtools.submenus.submenu.style.visibility = 'hidden';
						console.log("timer");
						console.log(navtools.submenus.timer);
						
					} // end if
				}, 1000);
				
			}, 
			keep : function(){
				console.log(this.timer);
				window.clearTimeout(navtools.submenus.timer);
			
			} // end keepSubMenu
		}
}