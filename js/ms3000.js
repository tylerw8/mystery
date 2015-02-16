$(document).ready(function() {  

	$('.category').click(function(e){
        e.preventDefault(); //stop default action of the link
		  cat = $(this).attr("href");  //get category from URL
		  loadAJAX(cat);  //load AJAX and parse JSON file
	});
});	


function loadAJAX(cat)
{
	$.ajax({  
		type: "GET",
		dataType: "json",  
		url: "api.php?cat=" + cat,
		success: ms3000JSON,
	});

	$('#episodes').html('');//clear data
}

function toConsole(data)
{//return data to console for JSON examination
	console.log(data); //to view,use Chrome console, ctrl + shift + j
}

function ms3000JSON(data){
	$('#output').text(JSON.stringify(data));  //uncomment to view raw output
	var header = data.title;
	$('#episodetitle').html(header);
	$.each(data.films, function(i,item){
	
		var text = '<b>Show</b>: ' + item.Show + '<br />';
        text += '<b>Season</b>: ' + item.Season + '<br />';
		text += '<b>Episode</b>: ' + item.Episode + '<br />';
		text += '<b>Original Air Date</b>: ' + item.Date + '<br />';
		text += '<b>Movie Name</b>: ' + item.Name + '<br />';
		text += '<b>Rating</b>: ' + item.Rating + '<br />';
        text += '<b>Director</b>: ' + item.Director + '<br />';
		text += '<b>Writers</b>: ' + item.Writers + '<br />';
        text += '<b>Stars</b>: ' + item.Stars + '<br />';
        text += '<b>Synopsis</b>: ' + item.Synopsis + '<br />';
		text += '<div id="pic"><img src= "item.Image" /></div>';
		$('<div></div>').html(text).appendTo('#episodes');  
	});
}
