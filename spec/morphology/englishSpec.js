const getForms = require( "../../src/morphology/english/getForms.js" );

const simpleWordsToTest = [
	[ "word", "words", "wording", "worded" ],
	[ "fly", "flies", "flying", "flew", "flown" ],
];

const complexWordsToTest = [
	[ "foot", [ "feet", "footing", "footed" ] ],
	[ "feet", [ "foot" ] ],
	[ "analysis", [ "analyses" ] ],
	[ "analyses", [ "analysis", "analyse", "analysing", "analysed" ] ],
	[ "analyse", [ "analyses", "analysing", "analysed" ] ],
	[ "analysing", [ "analyses", "analyse", "analysed" ] ],
	[ "analysed", [ "analyse", "analysing", "analyses" ] ],
	[ "embargo", [ "embargos", "embargoes", "embargoing", "embargoed" ] ],
	[ "embargos", [ "embargo", "embargoes" ] ],
	[ "embargoes", [ "embargo", "embargos", "embargoing", "embargoed" ] ],
	[ "embargoing", [ "embargo", "embargoes", "embargoed" ] ],
	[ "embargoed", [ "embargo", "embargoes", "embargoing" ] ],
];

describe( "Test for getting all possible word forms for regular words", function() {
	simpleWordsToTest.forEach( function( paradigm ) {
		paradigm.forEach( function( wordInParadigm ) {
			it( "returns an array of word forms for a regular word", function() {
				const receivedForms = getForms( wordInParadigm );
				paradigm.forEach( function( form ) {
					expect( receivedForms ).toContain( form );
				} );
			} );
		} );
	} );
} );

describe( "Test for getting all possible word forms for complex words", function() {
	complexWordsToTest.forEach( function( paradigm ) {
		const receivedForms = getForms( paradigm[ 0 ] );
		const expectedForms = paradigm[ 1 ];
		expectedForms.forEach( function( wordExpected ) {
			it( "returns an array of word forms for a complex word", function() {
				expect( receivedForms ).toContain( wordExpected );
			} );
		} );
	} );
} );