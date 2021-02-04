function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// Random made up CUSTOM place
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				lat: 25.471568816555163,
				lng: 87.26537757042422,
				name: "Sutara Mehi Mission School",
				street: "Over the rainbow, Up high way",
				userData: 99
			}

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


