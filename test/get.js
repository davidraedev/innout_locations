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

	it( "Retrieves valid JSON", async function() {

		const json = await innoutLocations.get()
		expect( json ).to.be.jsonSchema( storeSchema );

	});

});

describe( "Get Saved Data", function() {

	it( "Returns valid JSON", function() {

		var json = innoutLocations.data();
		expect( json ).to.be.jsonSchema( storeSchema );

	});

});