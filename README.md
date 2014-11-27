# Zurb Foundation 5 JavaScript Mediaqueries

Helper for working with Zurb Foundation's breakpoints with JavaScript

## Example usage

	Foundation.libs.mediaqueries.init(function(size, orientation) {
		
		//logging/using current size and orientation
		console.log('size:', size);
		console.log(orientation);
		
		myFunction(size, orientation);

	});
	$(window).load(function(){
		$(window)
			.trigger('resize.fndtn.mediaqueries')
	});

