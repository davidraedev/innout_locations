var chai = require( "chai" );
chai.use( require( "chai-json-schema" ) );
var expect = chai.expect;

var innoutLocations = require( "../index.js" );

var storeSchema = {
	retrieved_at: { type: "date" },
	data: [
		{
			StoreNumber: { type: "number" },
			Name: { type: "string" },
			StreetAddress: { type: "string" },
			City: { type: "string" },
			State: { type: "string" },
			ZipCode: { type: "number" },
			Latitude: { type: "number" },
			Longitude: { type: "number" },
		}
	]
};

describe( "Request Data", function() {

	it( "Retrieves valid JSON", function() {

		return innoutLocations.get().then( function( json ){
			expect( json ).to.be.jsonSchema( storeSchema );
		}).catch( function( error ){
			throw new Error( error );
		});

	});

});

describe( "Get Saved Data", function() {

	it( "Returns valid JSON", function() {

		var json = innoutLocations.data();
		expect( json ).to.be.jsonSchema( storeSchema );

	});

});