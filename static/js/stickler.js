	    $(document).ready(function(){
			$('#example-1').sticklr({
				showOn		: 'click',
				stickTo     : 'left'
			});
	        $('#example-2').sticklr({
				showOn		: 'hover',
				stickTo     : 'right',
				size        : 32
			});
			$('#example-3').sticklr({
			    animate     : true,
			    relativeTo  : 'top',
				showOn		: 'hover',
				stickTo     : 'right'
			});
			$.localScroll();
	    });