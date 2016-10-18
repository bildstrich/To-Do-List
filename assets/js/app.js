// Check of specific Todos by clicking
$("ul").on("click", "li", function(){				// new lis arent existing when code runs. When an li inside an ul is clicked then run! 
	$(this).toggleClass("completed");
});

// CLick on x to delete
$("ul").on("click", "span", function(event){		// on() fires events on new Elements (toDos)! click() does not!
$(this).parent().fadeOut(500, function(){
	$(this).remove();								// remove li after(!) fading is completed!
});
event.stopPropagation();							// preventing from bubbling events to their parent elements!
});

// New ToDo
$("input[type = 'text']").keypress(function(event){
	if (event.which === 13) {
		// grabbing new todo text from input
		var toDoText = $(this).val();
		$(this).val("");
		// create new to do
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + toDoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});