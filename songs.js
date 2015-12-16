$(document).ready(function() {

    $(".categories").mouseenter(function() {
        // reset();
        $('.clicked-category').removeClass('clicked-category');

        $('.multiselect-btn').removeClass("multiselect-clicked");
        $('.hover').removeClass('.hover');

        removeHighlights();


    });

    //Slider mouseovers

    $('#time-slider-container').mouseover(function() {
        timeSlider(timeSliderRange, firstYear, lastYear);
    });
    $('#time-slider-container').mouseout(function() {
        for (var i = firstYear; i <= lastYear; i++) {
            year_class = '.Year-' + i;
            $(year_class).removeClass('hover');
        }
    });

    $('#month-slider-container').mouseover(function() {
        monthSlider(monthSliderRange);
    });

    $('#month-slider-container').mouseout(function() {
        for (var i = 0; i <= 11; i++) {
            month_class = '.Month-' + months[i];
            $(month_class).removeClass('hover');
        }
    });

    $('#length-slider-container').mouseover(function() {
        lengthSlider(lengthSliderRange);
    });

    $('#length-slider-container').mouseout(function() {
        for (var i = 0; i < lengths.length; i++) {

            length = lengths[i].replace(":", "-");
            length_class = '.Length-' + length;
            $(length_class).removeClass('hover');
        }
    });

    $('#month-slider-container').mouseover(function() {
        monthSlider(monthSliderRange, 1, 12);
    });

    $('#month-slider-container').mouseout(function() {
        for (var i = 0; i <= 11; i++) {
            month_class = '.' + months[i];
            $(month_class).removeClass('hover');
        }
    });

    // Reset Animation

    $(".reset-button").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });


    $(".country .dropdown-button").click(function() {
        $('.country .dropdown-box').slideToggle();
    });

    $('.country .dropdown-box p').click(function() {
        $('.country').mouseout();
        var choice = $(this).text();
        $('.country .dropdown-box').slideToggle();
        var switchText = $(".country .dropdown-text").text();
        $(this).text(switchText);
        $(".country .dropdown-text").text(choice);

        $(".country .dropdown-text").removeClass("US UK Ireland Jamaica");
        var country = "";
        if (choice == "United States") country = "US";
        if (choice == "United Kingdom") country = "UK";
        else country = choice;
        $(".country .dropdown-text").addClass(country);
    });

    $(".genre .dropdown-button").click(function() {
        $('.genre .dropdown-box').slideToggle();
    });

    $('.genre .dropdown-box p').click(function() {
        $('.genre').mouseout();
        var choice = $(this).text();
        $('.genre .dropdown-box').slideToggle();
        var switchText = $(".genre .dropdown-text").text();
        $(this).text(switchText);
        $(".genre .dropdown-text").text(choice);
        $(".genre .dropdown-text").removeClass("Rock Soul Folk RnB Country Reggae Hip-Hop Funk Doo-wop Pop Jazz");
        $(".genre .dropdown-text").addClass(choice);
    });

    $('.genre').mouseover(function() {
        var genre = $(".genre .dropdown-text").text();
        if (genre == "Rock") $('.Rock').addClass('hover');
        if (genre == "Soul") $('.Soul').addClass('hover');
        if (genre == "Folk") $('.Folk').addClass('hover');
        if (genre == "RnB") $('.RnB').addClass('hover');
        if (genre == "Country") $('.Country').addClass('hover');
        if (genre == "Reggae") $('.Reggae').addClass('hover');
        if (genre == "Hip-Hop") $('.Hip-Hop').addClass('hover');
        if (genre == "Funk") $('.Funk').addClass('hover');
        if (genre == "Doo-wop") $('.Doo-wop').addClass('hover');
        if (genre == "Pop") $('.Pop').addClass('hover');
        if (genre == "Jazz") $('.Jazz').addClass('hover');

    });

    $('.genre').mouseout(function() {
        var genre = $(".genre .dropdown-text").text();
        if (genre == "Rock") $('.Rock').removeClass('hover');
        if (genre == "Soul") $('.Soul').removeClass('hover');
        if (genre == "Folk") $('.Folk').removeClass('hover');
        if (genre == "RnB") $('.RnB').removeClass('hover');
        if (genre == "Country") $('.Country').removeClass('hover');
        if (genre == "Reggae") $('.Reggae').removeClass('hover');
        if (genre == "Hip-Hop") $('.Hip-Hop').removeClass('hover');
        if (genre == "Funk") $('.Funk').removeClass('hover');
        if (genre == "Doo-wop") $('.Doo-wop').removeClass('hover');
        if (genre == "Pop") $('.Pop').removeClass('hover');
        if (genre == "Jazz") $('.Jazz').removeClass('hover');
    });

    $('.sex').mouseover(function() {
        if ($(".sex p").text() == "Male")
            $('.Male').addClass('hover');
        else
            $('.Female').addClass('hover');
    });

    $('.sex').mouseout(function() {
        if ($(".sex p").text() == "Male")
            $('.Male').removeClass('hover');
        else
            $('.Female').removeClass('hover');
    });

    $(".sex p").click(function() {
        if ($(".sex p").text() == "Male") {
            $('.Male').removeClass('hover');
            $(".sex p").removeClass("Male");
            $(".sex p").addClass("Female");
            $(".sex p").text("Female");
            $('.Female').addClass('hover');
        } else {
            $('.Female').removeClass('hover');
            $(".sex p").removeClass("Female");
            $(".sex p").addClass("Male");
            $(".sex p").text("Male");
            $('.Male').addClass('hover');
        }
    })


    $('.label').mouseover(function() {
        $('.Columbia').addClass('hover');
    });

    $('.label').mouseout(function() {
        $('.Columbia').removeClass('hover');
    });

    $('.country').mouseover(function() {
        var country = $(".country .dropdown-text").text();
        if (country == "United States") $('.US').addClass('hover');
        if (country == "United Kingdom") $('.UK').addClass('hover');
        if (country == "Ireland") $('.Ireland').addClass('hover');
        if (country == "Jamaica") $('.Jamaica').addClass('hover');
    });

    $('.country').mouseout(function() {
        var country = $(".country .dropdown-text").text();
        if (country == "United States") $('.US').removeClass('hover');
        if (country == "United Kingdom") $('.UK').removeClass('hover');
        if (country == "Ireland") $('.Ireland').removeClass('hover');
        if (country == "Jamaica") $('.Jamaica').removeClass('hover');

    });

    $('#questionBtn').click(function() {
        $('#questionBox').toggle('slow');
    })


    $('.category.sex').click(function() {

        if ($('.sex').children('h3').hasClass("clicked-category")) {
            $('.sex').children('h3').removeClass("clicked-category");
            sexQuery = "";
        } else {
            $('.sex').children('h3').addClass("clicked-category");
        }
    });

    $('.category.genre').click(function() {
        console.log("a");
        if ($('.genre').children('h3').hasClass("clicked-category")) {
            $('.genre').children('h3').removeClass("clicked-category");
            genreQuery = "";
        } else {
            $('.genre').children('h3').addClass("clicked-category");
        }
    });

    $('.category.year').click(function() {

        if ($('.year').children('h3').hasClass("clicked-category")) {
            $('.year').children('h3').removeClass("clicked-category");
            yearQuery = "";
        } else {
            $('.year').children('h3').addClass("clicked-category");
        }
    });
    $('.category.length').click(function() {

        if ($('.length').children('h3').hasClass("clicked-category")) {
            $('.length').children('h3').removeClass("clicked-category");
            lengthQuery = "";
        } else {
            $('.length').children('h3').addClass("clicked-category");
        }
    });
    $('.category.month').click(function() {

        if ($('.month').children('h3').hasClass("clicked-category")) {
            $('.month').children('h3').removeClass("clicked-category");
            monthQuery = "";
        } else {
            $('.month').children('h3').addClass("clicked-category");
        }
    });
    $('.category.country').click(function() {

        if ($('.country').children('h3').hasClass("clicked-category")) {
            $('.country').children('h3').removeClass("clicked-category");
            countryQuery = "";
        } else {
            $('.country').children('h3').addClass("clicked-category");
        }
    });


    $('.multiselect-btn').click(function() {
        if ($('.multiselect-btn').hasClass("multiselect-clicked")) {
            $('.multiselect-btn').removeClass("multiselect-clicked");
            $('.clicked-category').removeClass('clicked-category');
            $('.hover').removeClass('.hover');
            removeHighlights();
            // reset();
        } else {
            $('.multiselect-btn').addClass("multiselect-clicked");
            multiselect();
        }
    });

    $('.multi-info-btn').click(function() {
        $('.multi-info-box').toggle('slow');
    });
});
