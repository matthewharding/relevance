(function( $ ) {
	'use strict';
	

	module( 'environment' );

	test( 'test elements are in test form', 20, function() {

		strictEqual( $( 'form#test' ).length, 1, 'form#test exists' );
		// rgb radio buttons exist
		strictEqual( $( ':radio', 'form#test .rgb-radio-buttons' ).length, 3, '3 radio buttons in form#test exists' );
		strictEqual( $( ':radio', 'form#test .rgb-radio-buttons' ).eq( 0 ).val(), 'red', 'red radio button in form#test exists' );
		strictEqual( $( ':radio', 'form#test .rgb-radio-buttons' ).eq( 1 ).val(), 'green', 'green radio button in form#test exists' );
		strictEqual( $( ':radio', 'form#test .rgb-radio-buttons' ).eq( 2 ).val(), 'blue', 'blue radio button in form#test exists' );
		// red, green, blue items exist
		strictEqual( $( '#red', 'form#test' ).length, 1, '#red exists in form#test' );
		strictEqual( $( '#green', 'form#test' ).length, 1, '#green exists in form#test' );
		strictEqual( $( '#blue', 'form#test' ).length, 1, '#blue exists in form#test' );
		// cymk checkboxes exist
		strictEqual( $( ':checkbox', 'form#test' ).length, 4, '4 checkboxes in form#test exists' );
		strictEqual( $( ':checkbox', 'form#test' ).eq( 0 ).val(), 'cyan', 'cyan checkbox in form#test exists' );
		strictEqual( $( ':checkbox', 'form#test' ).eq( 1 ).val(), 'magenta', 'magenta checkbox in form#test exists' );
		strictEqual( $( ':checkbox', 'form#test' ).eq( 2 ).val(), 'yellow', 'yellow checkbox in form#test exists' );
		strictEqual( $( ':checkbox', 'form#test' ).eq( 3 ).val(), 'black', 'black checkbox in form#test exists' );
		// colour space question exists
		strictEqual( $( 'select#colour-space', 'form#test' ).length, 1, 'select#colour-space exists' );
		strictEqual( $( 'option', '#colour-space' ).eq( 0 ).val(), 'RGB', 'select#colour-space option 1 is RGB' );
		strictEqual( $( 'option', '#colour-space' ).eq( 1 ).val(), 'CMYK', 'select#colour-space option 2 is CMYK' );
		// cyan, magenta, yellow items exist
		strictEqual( $( '#cyan', 'form#test' ).length, 1, '#cyan exists in form#test' );
		strictEqual( $( '#magenta', 'form#test' ).length, 1, '#magenta exists in form#test' );
		strictEqual( $( '#yellow', 'form#test' ).length, 1, '#yellow exists in form#test' );
		strictEqual( $( '#black', 'form#test' ).length, 1, '#black exists in form#test' );

	});

	test( 'test elements are after form', 4, function() {

		// cymk sections are after form
		strictEqual( $( 'form#test' ).nextAll( '#cyan-after' ).length, 1, '#cyan is after form#test' );
		strictEqual( $( 'form#test' ).nextAll( '#magenta-after' ).length, 1, '#magenta is after form#test' );
		strictEqual( $( 'form#test' ).nextAll( '#yellow-after' ).length, 1, '#yellow is after form#test' );
		strictEqual( $( 'form#test' ).nextAll( '#black-after' ).length, 1, '#black is after form#test' );

	});

	test( 'elements are initially visible', 4, function() {

		strictEqual( $( ':radio', '#test' ).filter( ':visible' ).length, 3, 'RGB radio buttons are visible' );
		strictEqual( $( '#red, #green, #blue' ).filter( ':visible' ).length, 3, 'RGB elements are visible' );
		strictEqual( $( ':checkbox', '#test' ).filter( ':visible' ).length, 4, 'CMYK checkboxes are visible' );
		strictEqual( $( '#cyan, #magenta, #yellow, #black' ).filter( ':visible' ).length, 4, 'CMYK elements are visible' );


	});


	module( 'relevantWhen within form' );

	test( 'can setup relevance using @name', 10, function() {

		strictEqual( $( '#red, #green, #blue' ).filter( ':visible' ).length, 3, '#red, #green, #blue are visible' );

		// setup relevance
		$( '#red' ).forcesRelevance( 'relevantWhen', { name: 'rgb', value: 'red' });
		$( '#green' ).forcesRelevance( 'relevantWhen', { name: 'rgb', value: 'green' });
		$( '#blue' ).forcesRelevance( 'relevantWhen', { name: 'rgb', value: 'blue' });
		strictEqual( $( '#red' ).filter( ':hidden' ).length, 1, '#red is hidden after relevantWhen setup' );
		strictEqual( $( '#green' ).filter( ':visible' ).length, 1, '#green is visible after relevantWhen setup' );
		strictEqual( $( '#blue' ).filter( ':hidden' ).length, 1, '#blue is hidden after relevantWhen setup' );

		// click 'red' radio button
		$( ':radio[value="red"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#red' ).filter( ':visible' ).length, 1, '#red is visible after choosing "red" value' );
		strictEqual( $( '#green' ).filter( ':hidden' ).length, 1, '#green is hidden after choosing "red" value' );
		strictEqual( $( '#blue' ).filter( ':hidden' ).length, 1, '#blue is hidden after choosing "red" value' );

		// click 'blue' radio button
		$( ':radio[value="blue"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#red' ).filter( ':hidden' ).length, 1, '#red is hidden after choosing "blue" value' );
		strictEqual( $( '#green' ).filter( ':hidden' ).length, 1, '#green is hidden after choosing "blue" value' );
		strictEqual( $( '#blue' ).filter( ':visible' ).length, 1, '#blue is visible after choosing "blue" value' );

	});

	test( 'can setup relevance using @id', 10, function() {

		strictEqual( $( '#red, #green, #blue' ).filter( ':visible' ).length, 3, '#red, #green, #blue are visible' );

		// setup relevance
		$( '#red' ).forcesRelevance( 'relevantWhen', { id: 'rgb-red', value: 'red' });
		$( '#green' ).forcesRelevance( 'relevantWhen', { id: 'rgb-green', value: 'green' });
		$( '#blue' ).forcesRelevance( 'relevantWhen', { id: 'rgb-blue', value: 'blue' });
		strictEqual( $( '#red' ).filter( ':hidden' ).length, 1, '#red is hidden after relevantWhen setup' );
		strictEqual( $( '#green' ).filter( ':visible' ).length, 1, '#green is visible after relevantWhen setup' );
		strictEqual( $( '#blue' ).filter( ':hidden' ).length, 1, '#blue is hidden after relevantWhen setup' );

		// click 'red' radio button
		$( ':radio[value="red"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#red' ).filter( ':visible' ).length, 1, '#red is visible after choosing "red" value' );
		strictEqual( $( '#green' ).filter( ':hidden' ).length, 1, '#green is hidden after choosing "red" value' );
		strictEqual( $( '#blue' ).filter( ':hidden' ).length, 1, '#blue is hidden after choosing "red" value' );

		// click 'blue' radio button
		$( ':radio[value="blue"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#red' ).filter( ':hidden' ).length, 1, '#red is hidden after choosing "blue" value' );
		strictEqual( $( '#green' ).filter( ':hidden' ).length, 1, '#green is hidden after choosing "blue" value' );
		strictEqual( $( '#blue' ).filter( ':visible' ).length, 1, '#blue is visible after choosing "blue" value' );

	});

	test( 'can setup relevance using container selector', 10, function() {

		strictEqual( $( '#red, #green, #blue' ).filter( ':visible' ).length, 3, '#red, #green, #blue are visible' );

		// setup relevance
		$( '#red' ).forcesRelevance( 'relevantWhen', { container: '.rgb-radio-buttons', value: 'red' });
		$( '#green' ).forcesRelevance( 'relevantWhen', { container: '.rgb-radio-buttons', value: 'green' });
		$( '#blue' ).forcesRelevance( 'relevantWhen', { container: '.rgb-radio-buttons', value: 'blue' });
		strictEqual( $( '#red' ).filter( ':hidden' ).length, 1, '#red is hidden after relevantWhen setup' );
		strictEqual( $( '#green' ).filter( ':visible' ).length, 1, '#green is visible after relevantWhen setup' );
		strictEqual( $( '#blue' ).filter( ':hidden' ).length, 1, '#blue is hidden after relevantWhen setup' );

		// click 'red' radio button
		$( ':radio[value="red"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#red' ).filter( ':visible' ).length, 1, '#red is visible after choosing "red" value' );
		strictEqual( $( '#green' ).filter( ':hidden' ).length, 1, '#green is hidden after choosing "red" value' );
		strictEqual( $( '#blue' ).filter( ':hidden' ).length, 1, '#blue is hidden after choosing "red" value' );

		// click 'blue' radio button
		$( ':radio[value="blue"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#red' ).filter( ':hidden' ).length, 1, '#red is hidden after choosing "blue" value' );
		strictEqual( $( '#green' ).filter( ':hidden' ).length, 1, '#green is hidden after choosing "blue" value' );
		strictEqual( $( '#blue' ).filter( ':visible' ).length, 1, '#blue is visible after choosing "blue" value' );

	});

	test( 'can setup relevance using @values', 10, function() {

		strictEqual( $( '#red, #green, #blue' ).filter( ':visible' ).length, 3, '#red, #green, #blue are visible' );

		// setup relevance
		$( '#red' ).forcesRelevance( 'relevantWhen', { name: 'rgb', values: [ 'red' ] });
		$( '#green' ).forcesRelevance( 'relevantWhen', { name: 'rgb', values: [ 'green' ] });
		$( '#blue' ).forcesRelevance( 'relevantWhen', { name: 'rgb', values: [ 'blue' ] });
		strictEqual( $( '#red' ).filter( ':hidden' ).length, 1, '#red is hidden after relevantWhen setup' );
		strictEqual( $( '#green' ).filter( ':visible' ).length, 1, '#green is visible after relevantWhen setup' );
		strictEqual( $( '#blue' ).filter( ':hidden' ).length, 1, '#blue is hidden after relevantWhen setup' );

		// click 'red' radio button
		$( ':radio[value="red"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#red' ).filter( ':visible' ).length, 1, '#red is visible after choosing "red" value' );
		strictEqual( $( '#green' ).filter( ':hidden' ).length, 1, '#green is hidden after choosing "red" value' );
		strictEqual( $( '#blue' ).filter( ':hidden' ).length, 1, '#blue is hidden after choosing "red" value' );

		// click 'blue' radio button
		$( ':radio[value="blue"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#red' ).filter( ':hidden' ).length, 1, '#red is hidden after choosing "blue" value' );
		strictEqual( $( '#green' ).filter( ':hidden' ).length, 1, '#green is hidden after choosing "blue" value' );
		strictEqual( $( '#blue' ).filter( ':visible' ).length, 1, '#blue is visible after choosing "blue" value' );

	});

	module( 'dependencies' );

	test( 'dependencies are managed', 14, function() {

		// colour space relevance
		$( '.rgb-radio-buttons' ).forcesRelevance( 'relevantWhen', { name: 'colourSpace', value: 'RGB' });
		$( ':checkbox[name="cmyk"]' ).forcesRelevance( 'relevantWhen', { id: 'colour-space', value: 'CMYK' });

		// rgb question relevance
		$( '#red' ).forcesRelevance( 'relevantWhen', { id: 'rgb-red', value: 'red' });
		$( '#green' ).forcesRelevance( 'relevantWhen', { id: 'rgb-green', value: 'green' });
		$( '#blue' ).forcesRelevance( 'relevantWhen', { id: 'rgb-blue', value: 'blue' });

		// cmyk question relevance
		// $( '#cyan' ).forcesRelevance( 'relevantWhen', { name: 'cmyk', value: 'cyan' });
		// $( '#magenta' ).forcesRelevance( 'relevantWhen', { name: 'cmyk', value: 'magenta' });
		// $( '#yellow' ).forcesRelevance( 'relevantWhen', { name: 'cmyk', value: 'yellow' });
		// $( '#black' ).forcesRelevance( 'relevantWhen', { name: 'cmyk', value: 'black' });

		// check initial state
		strictEqual( $( '#colour-space' ).val(), 'RGB', 'RGB is the colour space' );
		strictEqual( $( ':radio[value="red"]' ).is( ':checked' ), false, 'red is not checked' );
		strictEqual( $( '#red:hidden' ).length, 1, '#red is hidden' );
		strictEqual( $( ':radio[value="green"]' ).is( ':checked' ), true, 'green is checked' );
		strictEqual( $( '#green:visible' ).length, 1, '#green is visible' );
		strictEqual( $( ':radio[value="blue"]' ).is( ':checked' ), false, 'blue is not checked' );
		strictEqual( $( '#blue:hidden' ).length, 1, '#blue is hidden' );

		// toggle relevance by changing selection
		$( '#colour-space' ).each(function() { this.selectedIndex = 1; }).trigger( 'change' );

		// check state after relevance change
		strictEqual( $( '#colour-space' ).val(), 'CMYK', 'CMYK is the colour space' );
		strictEqual( $( ':radio[value="red"]' ).is( ':disabled' ), true, 'red is disabled' );
		strictEqual( $( '#red:hidden' ).length, 1, '#red is hidden' );
		strictEqual( $( ':radio[value="green"]' ).is( ':disabled' ), true, 'green is disabled' );
		strictEqual( $( '#green:hidden' ).length, 1, '#green is hidden' );
		strictEqual( $( ':radio[value="blue"]' ).is( ':disabled' ), true, 'blue is disabled' );
		strictEqual( $( '#blue:hidden' ).length, 1, '#blue is hidden' );

	});



	// TODO test chaining, e.g. both #red and #green toggled when relevant = blue
	// TODO nested dependencies
	// TODO test initial relevance using checkboxes (e.g. cyan and yellow both checked, is yellow visible?)
	// TODO update relevantWhen rule. e.g. relevantWhen rgb = red, then relevantWhen rgb = green


	// set of values e.g. magenta: relevantWhen rgb = red or blue
	module( 'set of values' );

	test( 'value in set', 10, function() {

		strictEqual( $( '#cyan, #magenta, #yellow' ).filter( ':visible' ).length, 3, '#cyan, #magenta, #yellow are visible' );

		// setup relevance
		$( '#cyan' ).forcesRelevance( 'relevantWhen', { name: 'rgb', values: [ 'red', 'green' ] });
		$( '#magenta' ).forcesRelevance( 'relevantWhen', { name: 'rgb', values: [ 'red', 'blue' ] });
		$( '#yellow' ).forcesRelevance( 'relevantWhen', { name: 'rgb', values: [ 'green', 'blue' ] });
		strictEqual( $( '#cyan' ).filter( ':visible' ).length, 1, '#cyan is visible after relevantWhen setup' );
		strictEqual( $( '#magenta' ).filter( ':hidden' ).length, 1, '#magenta is hidden after relevantWhen setup' );
		strictEqual( $( '#yellow' ).filter( ':visible' ).length, 1, '#yellow is visible after relevantWhen setup' );

		// click 'red' radio button
		$( ':radio[value="red"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#cyan' ).filter( ':visible' ).length, 1, '#cyan is visible after choosing "red" value' );
		strictEqual( $( '#magenta' ).filter( ':visible' ).length, 1, '#magenta is visible after choosing "red" value' );
		strictEqual( $( '#yellow' ).filter( ':hidden' ).length, 1, '#yellow is hidden after choosing "red" value' );

		// click 'blue' radio button
		$( ':radio[value="blue"]', 'form#test' )[ 0 ].click();
		strictEqual( $( '#cyan' ).filter( ':hidden' ).length, 1, '#cyan is hidden after choosing "blue" value' );
		strictEqual( $( '#magenta' ).filter( ':visible' ).length, 1, '#magenta is visible after choosing "blue" value' );
		strictEqual( $( '#yellow' ).filter( ':visible' ).length, 1, '#yellow is visible after choosing "blue" value' );

	});


}( jQuery ));