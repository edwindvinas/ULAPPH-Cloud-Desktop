(function() {

  // I WANT TO WRITE THE CRAPPIEST CODE OF ALL TIME RIGHT HERE!!!

  window.config = {
    //post_comment_url: '/comment/add'
  };

  var loc_path = location.pathname;

  // Mark Active Links
  if (loc_path.indexOf('recent') !== -1) {
    $('a.recent').addClass('active');
  } else if (loc_path.indexOf('picks') !== -1
            || loc_path === '/'
            || loc_path === '/walkthroughs'
            || loc_path === '/codecasts') {
    $('a.picks').addClass('active');
  } else if (loc_path.indexOf('popular') !== -1) {
    $('a.popular').addClass('active');
  } else if (loc_path.indexOf('from-friends') !== -1) {
    $('a.from_friends').addClass('active');
  } else if (loc_path.indexOf('interesting') !== -1) {
    $('a.interesting').addClass('active');
  }

  // Mark active tabs in user profile
  if (loc_path.indexOf('/user') === 0) {
    if (loc_path.indexOf('/items') === 5) {
      $('.user_tabs li:eq(0)').addClass('active');
    } else if (loc_path.indexOf('/private') === 5) {
      $('.user_tabs li:eq(1)').addClass('active');
    } else if (loc_path.indexOf('/posts') === 5) {
      $('.user_tabs li:eq(2)').addClass('active');
    } else if (loc_path.indexOf('/followers') === 5) {
      $('.user_tabs li:eq(2)').addClass('active');
    } else if (loc_path.indexOf('/following') === 5) {
      $('.user_tabs li:eq(3)').addClass('active');
    } else {
      if ($('ul.items').length) {
        $('.user_tabs li:eq(0)').addClass('active');
      }
      if ($('ul.posts').length) {
        $('.user_tabs li:eq(2)').addClass('active');
      }
    }

    if (loc_path.indexOf('/likes') === 5) {
      $('.nav-pills li.liked').addClass('active');
    } else if (loc_path.indexOf('/comments') === 5) {
      $('.nav-pills li.comments').addClass('active');
    } else if (loc_path.indexOf('/forks') === 5) {
      $('.nav-pills li.forked').addClass('active');
    } else {
      $('.nav-pills li.created').addClass('active');
    }
  }

  // By chance if some 404 item shows up somewhere
  // nuke it ;D
  if (location.href.search('://secure.') !== -1 && top !== self) {
    $('html').html('');
  }

  // Fixing #main short height bg issues

  if ($('#main').height() < $('body > aside').height())
    $('#main').css('min-height', $('body > aside').height() );

  // Back to Top
  $('.logoBottom').on('click', function() {
    $('html, body').animate({scrollTop: '0px'});
    
    return false;
  });

  // DropDowns
  $(".dropdown").each(function() {
      var height = $("header").height();
      //Hide the dropdowns
      $(this).css({
          "top": height,
          "opacity": 0,
          "display": "none"
      });
  });

  $("ul li").has(".dropdown").hover(function(){
      //console.log("Dropdown exists!");
      
      $(this).find(".dropdown").stop(true, true)
      .css("display", "block")
      .animate({
          "opacity": 1,
      }, 200);
      
  }, function() {
      
      $(this).find(".dropdown").stop(true, true)
      .css({
        "display": "none",
        "opacity": 0
      });

  });

  
  /* Like */
  $('.like a').click(function() {
    var $this = $(this),
        post_url = $this.attr('href');

    if( $this.attr('data-creator') == 'true' ) return false;
    
    var data = {item_id: +$this.attr('data-item_id')};
    
    $.post(post_url, data, function(data) {
      if( data.status == 'success' ) {
        $this.next('.like_count').text( +$this.next('.like_count').text() + 1 );
      }
      
      if( data.status == 'error' && data.redirect_to ) {
        location.href = data.redirect_to;
      }
    }, 'json');
    
    return false;
  });

  $('pre.codeblock.css').removeClass('css').addClass('brush:css');
  $('pre.codeblock.xml').removeClass('xml').addClass('brush:xml');
  $('pre.codeblock.html').removeClass('html').addClass('brush:xml');


  // Syntax Highlighter
  if (typeof SyntaxHighlighter !== 'undefined') {
    SyntaxHighlighter.defaults.toolbar = false;
    SyntaxHighlighter.all();
  }


  $('a[rel="tooltip"], i[rel="tooltip"]').tooltip({placement: 'bottom'});
  $('a[rel="popover"], i[rel="popover"]').popover();

  // FOLLOW
  $('.follow_user, .unfollow_user').hover(
    function () {
      var $this = $(this),
          badge = $this.find('.badge');
    
      if ($this.hasClass('unfollow_user'))
        badge.removeClass('badge-success').addClass('badge-important');
      else
        badge.removeClass('badge-important').addClass('badge-success');
    },
    function() {
      var $this = $(this),
          badge = $this.find('.badge');
    
      badge.removeClass('badge-success').removeClass('badge-important');
    }
  );

  $('.follow_user, .unfollow_user').on('click', function() {
    var $this = $(this),
        badge = $this.find('.badge'),
        url = $this.data('href');
    
    $.post(url, {}, function(data) {
    
      if (data.redirect_to) {
        location.href = data.redirect_to;
      }
      
      if (data.next_action) {
        $this.addClass(data.next_action.add_class);
        $this.removeClass(data.next_action.remove_class);
        $this.data('href', data.next_action.href);
        badge.text(data.next_action.text);
      }
    
    }, 'json');
  
    return false;
  });

  // Clear all notifications
  // dont use 'json' type for response
  // since we just clear DB and dont return
  // true/false (send status) on backend
  $('.clear_notif').on('click', function() {
    var $this = $(this),
        badge = $this.find('.badge'),
        url = $this.data('href');
    
    $.post(url, {}, function(data) {
      
      location.href = location.href;
    
    });
  
    return false;
  });

    // SHARE FEEDBACK
  $('#share_feedback').on('click', function() {
    form_data = $(this).closest('#feedback_modal').find('form').serialize();
    $.post('/share-feedback', form_data, function(data) {
    
      if( data['status'] == 'success' ) {
        $('#feedback_modal').modal('hide');
        alert('Thanks for Sharing your Feedback');
      }
      
      if( data['status'] == 'failure' ) {
        alert( data['error'] );
      }
    
    }, 'json');
  });


  /*
  Delete Creations
  */
  $('.remove_bin').on('click', function() {
    var $el = $(this),
        post_url = $el.data('href'),
        bin_id = $el.data('bin_id');

    var delete_confirm = confirm('Are you sure ? Deletion cannot be undone!');
    if (!delete_confirm)
      return false;

    $.post(post_url, {bin_id: bin_id}, function(data) {

      if (data.status === 'ok')
        $el.closest('.single_item').remove();
    }, 'json');

    return false;
  });

  /*
  Lazy Rendering of Iframes
  */

  var elementInViewPort = function(el) {
    var rect = el.getBoundingClientRect()
    //console.log(rect)
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth 
        )
  }

  var lazy_rendering = function() {

  };

  $(window).bind('scroll', function (e) {
    
    $.each($('iframe.gallery[data-src]:not(.scrolled_off)'), function(index, iframe) {

      var $iframe = $(iframe)
      //console.log(elementInViewPort(iframe));
      // if (elementInViewPort(iframe)) { // disabling cuz FF sometimes doesnt renders some items :(
      if (true) {

        $iframe.addClass('scrolled_off');

        var src = $iframe.data('src');
        $iframe.removeAttr('data-src');
        $iframe.attr('src', src);
      } else {
        $iframe.removeClass('scrolled_off');
      }
    });

  }).scroll();

  //Pagination positioning
  var paginate = $(".paginate");
  paginate.css("marginLeft", - paginate.width() / 2);
  //console.log(paginate.children().length);

  if(paginate.children().length == 1) {
    paginate.find("li a").css("border-radius", "5px");
  }

}());