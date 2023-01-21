$(function() {
	window.addEventListener('message', function(event) {
		if (event.data.type == "enableui") {
			document.body.style.display = event.data.enable ? "block" : "none";
		}
	});

	document.onkeyup = function (data) {
		if (data.which == 27) { // Escape key
			$.post('http://Kam_Identity/escape', JSON.stringify({}));
		}
	};
	
	$("#kamion").submit(function(event) {
		event.preventDefault(); // Prevent form from submitting
		$.post('http://Kam_Identity/kamion', JSON.stringify({
			firstname: $("#firstname").val(),
			lastname: $("#lastname").val(),
			sex: $(".sex:checked").val(),
			height: $("#height").val()
		}));
	});
});

var rangeSlider = function(){
	var slider = $('.range-slider'),
	    range = $('.range-slider__range'),
	    value = $('.range-slider__value');
	  
	slider.each(function(){
   
	  value.each(function(){
	    var value = $(this).prev().attr('value');
	    $(this).html(value);
	  });
   
	  range.on('input', function(){
	    $(this).next(value).html(this.value);
	  });
	});
   };
   
rangeSlider();