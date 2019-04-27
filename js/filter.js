$(document).ready(function(){
    $('.filter-type').click(function(){
        $('.filter-type__sub').slideToggle('invisible');
        $('.filter-type__arrow').toggleClass('arrow-up');
    });
    $('.filter-metal').click(function(){
        $('.filter-metal__sub').slideToggle('invisible');
        $('.filter-metal__arrow').toggleClass('arrow-up');
    });
    $('.filter-insert').click(function(){
        $('.filter-insert__sub').slideToggle('invisible');
        $('.filter-insert__arrow').toggleClass('arrow-up');
    });
    $('.filter-additionally').click(function(){
        $('.filter-additionally__sub').slideToggle('invisible');
        $('.filter-additionally__arrow').toggleClass('arrow-up');
    });
    $('.filter-price').click(function(){
        $('.filter-price__sub').slideToggle('invisible');
        $('.filter-price__arrow').toggleClass('arrow-up');
    });
    $('.filter-color').click(function(){
        $('.filter-color__sub').slideToggle('invisible');
        $('.filter-color__arrow').toggleClass('arrow-up');
    });
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 0, 10000 ],
        stop: function(event, ui){
            $('input#minCost').val($('#slider-range').slider('values', 0));
            $('input#maxCost').val($('#slider-range').slider('values', 1));
        },
        slide: function(event, ui){
            $('input#minCost').val($('#slider-range').slider('values', 0));
            $('input#maxCost').val($('#slider-range').slider('values', 1));
        }
    });
    $('input#minCost').change(function(){
        var value1 = $('input#minCost').val();
        var value2 = $('input#maxCost').val();
        
        if (parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $('input#minCost').val(value1);
        }
        $('#slider-range').slider('values', 0, value1);
    });
    $('input#maxCost').change(function(){
        var value1 = $('input#minCost').val();
        var value2 = $('input#maxCost').val();

        if (value2 > 10000){value2 = 10000; $('input#maxCost').val(10000)}
        if (parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $('input#maxCost').val(value2);
        }
        $('#slider-range').slider('values', 1, value2);
    })
});