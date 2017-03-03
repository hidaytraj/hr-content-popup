//Coded By : Md Hidaytullah Rahmani - HTML5, CSS3, JavaScript , JQuery
// Animated Popup System

	$.fn.hrContent_popup = function(option){

		var setting = $.extend({

			event : "click", // click , mouseover
			cssClass : ".hr-popup",
			dataHeight : 238,
			popCloseAnywhere : false,
			popupButton : ".popupButton",
			buttonType : "sign" //sign , close

		},option);

		var btnType;
		(setting.buttonType=="sign") ? btnType = "X" : btnType = "Close";

		//Popup wrapper DOM
		$("body").append('<div class="hr-popup-wrapper"><div class="popup-container"><div class="close-btn">'+btnType+'</div><div class="hr-datas"></div></div></div>');


		$(setting.cssClass+" "+setting.popupButton).on(setting.event,function(){
		
			//Show popup
			$(".hr-popup-wrapper").fadeIn();
			
			//for animation
			$(".popup-container").removeClass("bottom-to-top");
			$(".popup-container").addClass("top-to-bot");
			
			//keep content in var
			var cont = $(this).parent().html();
			
			//add content to popup data
			$(".hr-datas").html(cont);
			$(".hr-datas .data-starts").removeClass("data-starts");
			
			//for maximum text active scroll
			var dheight = $(".hr-datas").height();
			if(dheight > setting.dataHeight)
			{
				$(this).parents("body").find(".hr-datas").addClass("biggerValue");
			}
		
	});

	var closeIt = setting.popCloseAnywhere;
	(closeIt==true) ? closeIt = ".hr-popup-wrapper" : closeIt = ".close-btn";

	// for close popup
	$(closeIt).on("click",function(){
			
			$(".hr-popup-wrapper").fadeOut();
			$(".popup-container").removeClass("top-to-bot");
			$(".popup-container").addClass("bottom-to-top");

			$(this).parents("body").find(".hr-datas").removeClass("biggerValue").delay(2000);
		});

}
	
