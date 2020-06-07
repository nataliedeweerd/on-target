jQuery(function($) {
    $('circle').click(function(e){
        $this = $(this);
        alert($this.attr('id'));
    });
});