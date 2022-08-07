
	  /**
	   * Push left instantiation and action.
	   */
	  var pushLeft = new Menu({
		wrapper: '#o-wrapper',
		type: 'push-left',
		menuOpenerClass: '.c-button',
		maskId: '#c-mask'
	  });

	  var pushLeftBtn = document.querySelector('#c-button--push-left');
	  
	  pushLeftBtn.addEventListener('click', function(e) {
		e.preventDefault;
		pushLeft.open();
	  });
	  

	  /**
	   * Push right instantiation and action.
	   */
	  var pushRight = new Menu({
		wrapper: '#o-wrapper',
		type: 'push-right',
		menuOpenerClass: '.c-button',
		maskId: '#c-mask'
	  });

	  var pushRightBtn = document.querySelector('#c-button--push-right');
	  
	  pushRightBtn.addEventListener('click', function(e) {
		e.preventDefault;
		pushRight.open();
	  });


	  /**
	   * Push top instantiation and action.
	   */
	  var pushTop = new Menu({
		wrapper: '#o-wrapper',
		type: 'push-top',
		menuOpenerClass: '.c-button',
		maskId: '#c-mask'
	  });

	  var pushTopBtn = document.querySelector('#c-button--push-top');
	  
	  pushTopBtn.addEventListener('click', function(e) {
		e.preventDefault;
		pushTop.open();
	  });


	  /**
	   * Push bottom instantiation and action.
	   */
	  var pushBottom = new Menu({
		wrapper: '#o-wrapper',
		type: 'push-bottom',
		menuOpenerClass: '.c-button',
		maskId: '#c-mask'
	  });

	  var pushBottomBtn = document.querySelector('#c-button--push-bottom');
	  
	  pushBottomBtn.addEventListener('click', function(e) {
		e.preventDefault;
		pushBottom.open();
	  });