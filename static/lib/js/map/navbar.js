(function($) {

    $(function() {

        var color = 0;

        function toggleButton(button) {
            if (!button) {
                $('.dropdown-button').css('backgroundColor', 'white');
                return ;
            }
            if (color) {
                button.css('backgroundColor', 'white');
                color = 0;
            }
            else {
                button.css('backgroundColor', '#dfdfdf');
                color = 1;
            }
        }

        $('.dropdown-button').click(function(e) {
            toggleButton($(this));
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();

        });

        $('html').click(function() {
            toggleButton();
            $('.nav-dropdown').hide();
        });

    });

    document.querySelector('#nav-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
    });

    $('#nav-toggle').click(function() {
        $('.nav-list').toggle();
    });

})(jQuery);
