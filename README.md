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


## Attributions

The structure is adapted from [Foundation Interchange](https://github.com/zurb/foundation/blob/master/js/foundation/foundation.interchange.js), and is thus leveraging
Foundation's internal methos for accessing media queries.


## Resources

The plugin has been developed based on research, and the following discussions:

* <https://github.com/zurb/foundation/issues/5139>
* <https://github.com/zurb/foundation/issues/5178>



## Research

From my research - other (non-foundation ways) to accomplish this:

* <http://viget.com/extend/sharing-data-between-sass-and-javascript-with-json>
* <https://github.com/7sempra/rosetta>
* <http://hugogiraudel.com/2014/01/20/json-in-sass/>

