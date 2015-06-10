	jQuery(document).ready(function($) {
		$('audio,video').mediaelementplayer({
			videoWidth: '100%',
			videoHeight: '100%',
			audioWidth: '100%',
			features: ['playpause','progress','tracks','volume'],
			videoVolume: 'horizontal'
		});
	});
