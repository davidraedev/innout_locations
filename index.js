var fetch = require( "node-fetch" );

var default_url = "http://locations.in-n-out.com/api/finder/search";

var locations = null;
var fetch_time = null;

var data = function() {
	return {
		retrieved_at: fetch_time,
		data: locations,
	};
};

var get = function ( url ){
	
	url = url || default_url;

	return new Promise( function( resolve, reject ) {
		var self = this;

		fetch_time = new Date();

		fetch( url )
			.then( function( res ) {
				return res.json();
			})
			.then( function( json ) {
				locations = json;
				resolve( data() );
			})
			.catch( function( error ) {
				reject( error );
			});

	});
};

module.exports = {
	get: get,
	data: data,
};