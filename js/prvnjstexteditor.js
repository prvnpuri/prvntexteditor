(function($){
	$.fn.prvnjstexteditor=function(options){
		$(this).each(function(){
			var target_elmt=this;
			var settings=$.extend({
				css:{
					border:$(target_elmt).css("border"),
					width:$(target_elmt).width(),
					height:$(target_elmt).height(),
					display:$(target_elmt).css("display"),
					resize: $(target_elmt).css("resize")
				},
			},options);
			
			var editor_panel=$(document.createElement("div")).insertBefore(target_elmt);
			$(editor_panel).attr("contenteditable",true);
			$(editor_panel).css(settings.css);
			$(target_elmt).hide();
		});
		
	};
}(jQuery) );