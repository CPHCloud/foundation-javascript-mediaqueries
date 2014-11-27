/**
 * Manipulation of the DOM via JavaScript on specific screen sizes
 * As layout can differ for different screen sizes, sometimes there's the
 * need for a little JavaScript to take care of things
 * 
 * Structure taken from
 * https://github.com/zurb/foundation/blob/master/js/foundation/foundation.interchange.js
 *
 */



;(function ($, window, document, undefined) {
	'use strict';

	Foundation.libs.mediaqueries = {
		name : 'Mediaqueries helper',

		settings : {
			named_queries : {
				'default' : 'only screen',
				small : Foundation.media_queries.small,
				medium : Foundation.media_queries.medium,
				large : Foundation.media_queries.large,
				xlarge : Foundation.media_queries.xlarge,
				xxlarge: Foundation.media_queries.xxlarge,
				landscape : 'only screen and (orientation: landscape)',
				portrait : 'only screen and (orientation: portrait)',
				retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
				'only screen and (min--moz-device-pixel-ratio: 2),' +
				'only screen and (-o-min-device-pixel-ratio: 2/1),' +
				'only screen and (min-device-pixel-ratio: 2),' +
				'only screen and (min-resolution: 192dpi),' +
				'only screen and (min-resolution: 2dppx)'
			}
		},
		
		//actions will be defined on init
		actions : null,

		/**
		 * On init this needs to be supplied with a function that can handle sizes
		 * @param actions
		 */
		init : function (actions) {
			Foundation.inherit(this, 'throttle random_str');
			this.events();
			this.actions = actions;
		},

		get_media_hash : function() {
			var mediaHash='';
			for (var queryName in this.settings.named_queries ) {
				mediaHash += matchMedia(this.settings.named_queries[queryName]).matches.toString();
			}
			return mediaHash;
		},

		/**
		 * Getter for the current size
		 * For now only returning
		 * small, medium, large - but can be extended
		 */
		get_current_size : function() {
			
			var isSmall = false;
			var isMedium = false;
			var isLarge = false;
			
			for (var queryName in this.settings.named_queries ) {
				var isTrue = matchMedia(this.settings.named_queries[queryName]).matches;
				
				//console.log(queryName, isTrue);

				switch(queryName) {
					case 'small':
						if (isTrue) {
							isSmall = true;
						}
						break;
					case 'medium':
						if (isTrue) {
							isMedium = true;
						}
						break;
					case 'large':
						if (isTrue) {
							isLarge = true;
						}
						break;
				}
			}
			
			//console.log (isSmall, isMedium, isLarge);
			
			if (isLarge && isMedium && isSmall) {
				return 'large';
			} else if (isMedium && isSmall) {
				return 'medium';
			} if (isSmall) {
				return 'small';
			}
		},

		/**
		 * Getter for the current orientation
		 * Returns either portrait or landscape
		 * @returns string
		 */
		get_current_orientation : function() {
			
			if (matchMedia(this.settings.named_queries['portrait']).matches) {
				return 'portrait';
			}
			if (matchMedia(this.settings.named_queries['landscape']).matches) {
				return 'landscape';
			}
		},

		events : function () {
			var self = this, prevMediaHash;

			$(window)
				.on('resize.fndtn.mediaqueries', self.throttle(function () {
					var currMediaHash = self.get_media_hash();
					if (currMediaHash !== prevMediaHash) {
						self.resize(currMediaHash);
					}
					prevMediaHash = currMediaHash;
				}, 50));

			return this;
		},

		/**
		 * Here we're taking care of the js manipulation based on which screen size we're on
		 * 
		 */
		resize : function () {
			var size = this.get_current_size();
			var orientation = this.get_current_orientation();
			this.actions(size, orientation);
		}
		

	};

}(jQuery, window, window.document));
