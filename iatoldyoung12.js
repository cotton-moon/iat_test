define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Old', //Will appear in the data.
			title : {
				media : {word : 'Old'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'old1.jpg'}, 
    			{image : 'old2.jpg'}, 
    			{image : 'old3.jpg'}, 
    			{image : 'old4.jpg'}, 
    			{image : 'old5.jpg'}, 
    			{image : 'old6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Young', //Will appear in the data.
			title : {
				media : {word : 'Young'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'young1.jpg'}, 
    			{image : 'young2.jpg'}, 
    			{image : 'young3.jpg'}, 
    			{image : 'young4.jpg'}, 
    			{image : 'young5.jpg'}, 
    			{image : 'young6.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		attribute2 :
			{
				name : 'Active',
				title : {
					media : {word : 'Active'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'dynamic'},
					{word: 'energetic'},
					{word: 'fast'},
					{word: 'lively'},
					{word: 'quick'},
					{word: 'strong'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
		attribute1 :
			{
				name : 'Inactive',
				title : {
					media : {word : 'Inactive'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'forgetful'},
					{word: 'lethargic'},
					{word: 'slow'},
					{word: 'tired'},
					{word: 'weak'},
					{word: 'weary'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},

		base_url : {//Where are your images at?
			image : 'https://cotton-moon.github.io/iat_test/'
		} 
	});
});
