// var csv = "Title,Artist,Year,Group,Genre,Length,Country,Month,Sex,Label\nHotel California,The Eagles,1977,TRUE,Rock,6:30,US,February,Male,Asylum\nThe Tracks Of My Tears,Smokey Robinson & The Miracles,1965,TRUE,Soul,2:55,US,June,Male,Tamla\nThe Message,Grandmaster Flash and the Furious Five,1982,TRUE,Hip-Hop,7:10,US,July,Male,Sugar Hill\nWhen Doves Cry,Prince,1984,FALSE,Soul,5:52,US,May,Male,Warner Bros.\nWhen A Man Loves A Woman,Percy Sledge,1966,FALSE,RnB,2:51,US,February,Male,Atlantic\nLouie Louie,The Kingsmen,1963,TRUE,Rock,2:42,US,April,Male,Wand\nLong Tall Sally,Little Richard,1956,FALSE,Rock,2:10,US,February,Male,Specialty\nAnarchy In The U.K.,Sex Pistols,1976,TRUE,Rock,3:31,UK,October,Male,EMI\nA Whiter Shade Of Pale,Procol Harum,1967,TRUE,Rock,4:03,UK,March,Male,Deram Records\nBillie Jean,Michael Jackson,1983,FALSE,RnB,4:54,US,January,Male,Epic\nThe Times They Are a-Changin',Bob Dylan,1963,FALSE,Folk,3:15,US,October,Male,Columbia\nLet's Stay Together,Al Green,1971,FALSE,Soul,3:16,US,November,Male,Hi Records\nWhole Lotta Shakin' Goin' On,Jerry Lee Lewis,1957,FALSE,Rock,2:52,US,April,Male,Sun Records\nBo Diddley,Bo Diddley,1955,FALSE,Rock,2:27,,March,Male,Checker\nFor What It's Worth,Buffalo Springfield,1967,TRUE,Rock,2:37,,January,Male,Atco\nShe Loves You,The Beatles,1963,TRUE,Rock,2:18,UK,August,Male,Parlophone\nSunshine Of Your Love,Cream,1968,TRUE,Rock,4:10,UK,January,Male,Atco\nRedemption Song,Bob Marley,1980,FALSE,Folk,3:49,,October,Male,Island Records\nJailhouse Rock,Elvis Presley,1957,FALSE,Rock,2:26,,September,Male,RCA\nTangled Up In Blue,Bob Dylan,1975,FALSE,Rock,5:42,,January,Male,Columbia\nCrying,Roy Orbison,1961,FALSE,Rock,2:46,,July,Male,Monument\nWalk On By,Dionne Warwick,1964,FALSE,Soul,2:55,,April,Female,Scepter\nPapa's Got A Brand New Bag,James Brown,1965,FALSE,RnB,1:55,,June,Male,King\nCalifornia Girls,The Beach Boys,1965,TRUE,Pop,2:46,,July,Male,Capitol\nSuperstition,Stevie Wonder,1972,FALSE,Funk,4:26,,October,Male,Tamla\nSummertime Blues,Eddie Cochran,1958,FALSE,Rock,1:53,,July,Male,Liberty\nWhole Lotta Love,Led Zeppelin,1969,TRUE,Rock,5:33,,November,Male,Atlantic\nStrawberry Fields Forever,The Beatles,1967,TRUE,Rock,4:05,,February,Male,Parlophone\nMystery Train,Elvis Presley,1955,FALSE,Rock,2:24,,August,Male,Sun\nI Got You (I Feel Good),James Brown,1965,FALSE,RnB,2:44,,October,Male,King\nMr. Tambourine Man,The Byrds,1965,TRUE,Rock,2:29,,April,Male,Columbia\nYou Really Got Me,The Kinks,1964,TRUE,Rock,2:14,,August,Male,Pye\nI Heard It Through The Grapevine,Marvin Gaye,1968,FALSE,RnB,3:16,,October,Male,Tamla\nBlueberry Hill,Fats Domino,1956,FALSE,Rock,2:28,,September,Male,Imperial\nNorwegian Wood (This Bird Has Flown),The Beatles,1965,TRUE,Rock,2:05,,December,Male,EMI\nEvery Breath You Take,The Police,1983,FALSE,Rock,4:13,,May,Male,A&M\nCrazy,Patsy Cline,1961,FALSE,Country,2:41,,November,Female,Decca\nThunder Road,Bruce Springsteen,1975,FALSE,Rock,4:49,,August,Male,Columbia\nRing Of Fire,Johnny Cash,1963,FALSE,Country,2:38,,April,Male,Columbia\nMy Girl,The Temptations,1964,TRUE,Soul,2:59,,December,Male,Gordy\nCalifornia Dreamin',The Mamas & The Papas,1965,TRUE,Pop,2:38,,November,Male,Dunhill Records\nIn The Still Of The Night,The Five Satins,1956,TRUE,Doo-wop,3:02,,February,Male,Standard Records\nSuspicious Minds,Elvis Presley,1969,FALSE,Soul,4:22,,August,Male,RCA\nBlitzkrieg Bop,Ramones,1976,TRUE,Rock,2:12,,February,Male,Sire/ABC\nI Still Haven't Found What I'm Looking For,U2,1987,TRUE,Rock,4:37,Ireland,May,Male,Island Records\nGood Golly Miss Molly,Little Richard,1958,FALSE,Rock,2:04,,January,Male,Specialty\nBlue Suede Shoes,Carl Perkins,1955,FALSE,Rock,2:14,,January,Male,Sun Records\nGreat Balls Of Fire,Jerry Lee Lewis,1967,FALSE,Rock,1:52,,November,Male,Sun Records\nRoll Over Beethoven,Chuck Berry,1956,FALSE,Rock,2:23,,April,Male,Chess\nLove And Happiness,Al Green,1972,FALSE,Soul,5:07,,October,Male,London Records\nFortunate Son,Creedence Clearwater Revival,1969,TRUE,Rock,2:21,,September,Male,Fantasy\nCrazy,Gnarls Barkley,2006,TRUE,Pop,2:58,,March,Male,Downtown Records"

var csv = "Title,Artist,Year,Group,Genre,Length,Country,Month,Sex,Label\nLike A Rolling Stone,Bob Dylan,1965,FALSE,Rock,6:13,US,July,Male,Columbia\n(I Can't Get No) Satisfaction,The Rolling Stones,1965,TRUE,Rock,3:44,UK,June,Male,Decca\nImagine,John Lennon,1971,FALSE,Rock,3:03,UK,October,Male,Apple\nWhat's Going On,Marvin Gaye,1971,FALSE,Soul,3:40,US,January,Male,Tamla\nRespect,Aretha Franklin,1965,FALSE,RnB,2:08,US,August,Female,Volt\nGood Vibrations,The Beach Boys,1966,TRUE,Pop,3:35,US,October,Male,Capitol\nJohnny B. Goode,Chuck Berry,1958,FALSE,Rock,2:41,US,March,Male,Chess\nHey Jude,The Beatles,1968,TRUE,Rock,7:11,UK,August,Male,Apple\nSmells Like Teen Spirit,Nirvana,1991,TRUE,Rock,5:01,US,September,Male,DGC\nWhat'd I Say,Ray Charles,1959,FALSE,RnB,6:30,US,July,Male,Atlantic\nMy Generation,The Who,1965,TRUE,Rock,3:18,UK,October,Male,Decca\nA Change Is Gonna Come,Sam Cooke,1964,FALSE,RnB,3:12,US,December,Male,RCA \nYesterday,The Beatles,1965,TRUE,Pop,2:03,UK,August,Male,Parlophone\nBlowin' In The Wind,Bob Dylan,1963,FALSE,Folk,2:48,US,August,Male,Columbia\nLondon Calling,The Clash,1979,TRUE,Rock,3:18,UK,December,Male,CBS\nI Want To Hold Your Hand,The Beatles,1963,TRUE,Rock,2:24,UK,November,Male,Parlophone\nPurple Haze,The Jimi Hendrix Experience,1967,TRUE,Rock,2:46,US,March,Male,Track\nMaybellene,Chuck Berry,1955,FALSE,Rock,2:19,US,July,Male,Chess\nHound Dog,Elvis Presley,1956,FALSE,Rock,2:15,US,July,Male,RCA Records\nLet It Be,The Beatles,1970,TRUE,Rock,3:50,UK,March,Male,Apple\nBorn To Run,Bruce Springsteen,1975,FALSE,Rock,4:30,US,August,Male,Columbia\nBe My Baby,The Ronettes,1963,TRUE,Pop,2:41,US,August,Female,Philles Records\nIn My Life,The Beatles,1965,TRUE,Pop,2:28,UK,December,Male,Parlophone\nPeople Get Ready,The Impressions,1965,TRUE,Soul,2:38,US,February,Male,ABC-Paramount\nGod Only Knows,The Beach Boys,1966,TRUE,Pop,2:55,US,July,Male,Capitol\n(Sittin' On) The Dock Of The Bay,Otis Redding,1968,FALSE,RnB,2:38,US,January,Male,Atco\nLayla,Derek And The Dominos,1971,TRUE,Rock,7:02,UK,September,Male,Atco\nA Day In The Life,The Beatles,1978,TRUE,Rock,5:35,UK,September,Male,Parlophone\nHelp!,The Beatles,1965,TRUE,Rock,2:18,UK,July,Male,Parlophone\nI Walk The Line,Johnny Cash,1956,FALSE,Country,2:45,US,May,Male,Sun\nStairway To Heaven,Led Zeppelin,1971,TRUE,Rock,8:03,UK,November,Male,Atlantic\nSympathy For The Devil,The Rolling Stones,1968,TRUE,Rock,6:18,UK,June,Male,Decca\nRiver Deep, Mountain High,Ike & Tina Turner,1966,TRUE,Soul,3:40,US,May,Both,Philles\nYou've Lost That Lovin' Feelin',The Righteous Brothers,1964,TRUE,RnB,3:45,US,November,Male,Philles\nLight My Fire,The Doors,1967,TRUE,Rock,2:52,US,May,Male,Elektra\nOne,U2,1992,TRUE,Rock,4:36,Ireland,March,Male,Island Records\nNo Woman, No Cry,Bob Marley & The Wailers,1975,TRUE,Reggae,7:12,Jamaica,July,Male,Island Records\nGimme Shelter,The Rolling Stones,1969,TRUE,Rock,4:37,UK,December,Male,Decca\nThat'll Be The Day,Buddy Holly & The Crickets,1957,TRUE,Rock,2:16,US,May,Male,Brunswick\nDancing In The Street,Martha Reeves & The Vandellas,1964,TRUE,Soul,2:40,US,July,Female,Gordy\nThe Weight,The Band,1968,TRUE,Rock,4:34,Canada,January,Male,Capitol\nWaterloo Sunset,The Kinks,1967,TRUE,Rock,3:16,UK,May,Male,Pye\nTutti Frutti,Little Richard,1955,FALSE,Rock,2:23,US,November,Male,Specialty\nGeorgia On My Mind,Ray Charles,1960,FALSE,Jazz,3:35,US,September,Male,ABC Records\nHeartbreak Hotel,Elvis Presley,1956,FALSE,Rock,2:08,US,January,Male,RCA\nHeroes,David Bowie,1977,FALSE,Rock,3:32,UK,September,Male,RCA\nAll Along The Watchtower,The Jimi Hendrix Experience,1968,TRUE,Rock,4:00,UK,October,Male,Track Records\nBridge Over Troubled Water,Simon & Garfunkel,1970,TRUE,Rock,4:55,US,January,Male,Columbia\nHotel California,The Eagles,1977,TRUE,Rock,6:30,US,February,Male,Asylum\nThe Tracks Of My Tears,Smokey Robinson & The Miracles,1965,TRUE,Soul,2:55,US,June,Male,Tamla\nThe Message,Grandmaster Flash and the Furious Five,1982,TRUE,Hip-Hop,7:10,US,July,Male,Sugar Hill\nWhen Doves Cry,Prince,1984,FALSE,Soul,5:52,US,May,Male,Warner Bros.\nWhen A Man Loves A Woman,Percy Sledge,1966,FALSE,RnB,2:51,US,February,Male,Atlantic\nLouie Louie,The Kingsmen,1963,TRUE,Rock,2:42,US,April,Male,Wand\nLong Tall Sally,Little Richard,1956,FALSE,Rock,2:10,US,February,Male,Specialty\nAnarchy In The U.K.,Sex Pistols,1976,TRUE,Rock,3:31,UK,October,Male,EMI\nA Whiter Shade Of Pale,Procol Harum,1967,TRUE,Rock,4:03,UK,March,Male,Deram Records\nBillie Jean,Michael Jackson,1983,FALSE,RnB,4:54,US,January,Male,Epic\nThe Times They Are a-Changin',Bob Dylan,1963,FALSE,Folk,3:15,US,October,Male,Columbia\nLet's Stay Together,Al Green,1971,FALSE,Soul,3:16,US,November,Male,Hi Records\nWhole Lotta Shakin' Goin' On,Jerry Lee Lewis,1957,FALSE,Rock,2:52,US,April,Male,Sun Records\nBo Diddley,Bo Diddley,1955,FALSE,Rock,2:27,US,March,Male,Checker\nFor What It's Worth,Buffalo Springfield,1967,TRUE,Rock,2:37,US,January,Male,Atco\nShe Loves You,The Beatles,1963,TRUE,Rock,2:18,UK,August,Male,Parlophone\nSunshine Of Your Love,Cream,1968,TRUE,Rock,4:10,UK,January,Male,Atco\nRedemption Song,Bob Marley,1980,FALSE,Folk,3:49,Jamaica,October,Male,Island Records\nJailhouse Rock,Elvis Presley,1957,FALSE,Rock,2:26,US,September,Male,RCA\nTangled Up In Blue,Bob Dylan,1975,FALSE,Rock,5:42,US,January,Male,Columbia\nCrying,Roy Orbison,1961,FALSE,Rock,2:46,US,July,Male,Monument\nWalk On By,Dionne Warwick,1964,FALSE,Soul,2:55,US,April,Female,Scepter\nPapa's Got A Brand New Bag,James Brown,1965,FALSE,RnB,1:55,US,June,Male,King\nCalifornia Girls,The Beach Boys,1965,TRUE,Pop,2:46,US,July,Male,Capitol\nSuperstition,Stevie Wonder,1972,FALSE,Funk,4:26,US,October,Male,Tamla\nSummertime Blues,Eddie Cochran,1958,FALSE,Rock,1:53,US,July,Male,Liberty\nWhole Lotta Love,Led Zeppelin,1969,TRUE,Rock,5:33,US,November,Male,Atlantic\nStrawberry Fields Forever,The Beatles,1967,TRUE,Rock,4:05,UK,February,Male,Parlophone\nMystery Train,Elvis Presley,1955,FALSE,Rock,2:24,US,August,Male,Sun\nI Got You (I Feel Good),James Brown,1965,FALSE,RnB,2:44,US,October,Male,King\nMr. Tambourine Man,The Byrds,1965,TRUE,Rock,2:29,US,April,Male,Columbia\nYou Really Got Me,The Kinks,1964,TRUE,Rock,2:14,UK,August,Male,Pye\nI Heard It Through The Grapevine,Marvin Gaye,1968,FALSE,RnB,3:16,US,October,Male,Tamla\nBlueberry Hill,Fats Domino,1956,FALSE,Rock,2:28,US,September,Male,Imperial\nNorwegian Wood (This Bird Has Flown),The Beatles,1965,TRUE,Rock,2:05,UK,December,Male,EMI\nEvery Breath You Take,The Police,1983,FALSE,Rock,4:13,UK,May,Male,A&M\nCrazy,Patsy Cline,1961,FALSE,Country,2:41,US,November,Female,Decca\nThunder Road,Bruce Springsteen,1975,FALSE,Rock,4:49,US,August,Male,Columbia\nRing Of Fire,Johnny Cash,1963,FALSE,Country,2:38,US,April,Male,Columbia\nMy Girl,The Temptations,1964,TRUE,Soul,2:59,US,December,Male,Gordy\nCalifornia Dreamin',The Mamas & The Papas,1965,TRUE,Pop,2:38,US,November,Male,Dunhill Records\nIn The Still Of The Night,The Five Satins,1956,TRUE,Doo-wop,3:02,US,February,Male,Standard Records\nSuspicious Minds,Elvis Presley,1969,FALSE,Soul,4:22,US,August,Male,RCA\nBlitzkrieg Bop,Ramones,1976,TRUE,Rock,2:12,US,February,Male,Sire/ABC\nI Still Haven't Found What I'm Looking For,U2,1987,TRUE,Rock,4:37,Ireland,May,Male,Island Records\nGood Golly Miss Molly,Little Richard,1958,FALSE,Rock,2:04,US,January,Male,Specialty\nBlue Suede Shoes,Carl Perkins,1955,FALSE,Rock,2:14,US,January,Male,Sun Records\nGreat Balls Of Fire,Jerry Lee Lewis,1967,FALSE,Rock,1:52,US,November,Male,Sun Records\nRoll Over Beethoven,Chuck Berry,1956,FALSE,Rock,2:23,US,April,Male,Chess\nLove And Happiness,Al Green,1972,FALSE,Soul,5:07,US,October,Male,London Records\nFortunate Son,Creedence Clearwater Revival,1969,TRUE,Rock,2:21,US,September,Male,Fantasy\nCrazy,Gnarls Barkley,2006,TRUE,Pop,2:58,US,March,Male,Downtown Records";

var lengthSliderRange;
var lengths = ["1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00", "10:15", "10:30", "10:45", "11:00"];

var timeSliderRange;
var firstYear;
var lastYear;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var mostCommonYear = 1965;
var mostCommonMonth = 7;
var mostCommonLength = 8;

var sexQuery = "";
var yearQuery = "";
var lengthQuery = "";
var monthQuery = "";
var countryQuery = "";
var labelQuery = "";
var genreQuery = "";


function init() {

    var json = $.csv.toObjects(csv);
    firstYear = 1900;
    lastYear = 2015;

    for (var i in json) {

        $(".country .dropdown-text").addClass("US");
        $(".genre .dropdown-text").addClass("Rock");

        $d = $("<div>");
        $description = $("<div class='description-box'>");
        $p = $("<p>");
        $d.append($p);
        $d.append($description);
        var infoHTML = createSongHTML(json[i]);
        $info = $(infoHTML);
        $description.append($info);
        var player = new iTunesPreviewPlayer(json[i].Artist + " " + json[i].Title);
        $info.hide();

        $d.click(function(e) {
            $(this).find(".description-box").find(".info").toggle("slow");

        });

        //Add Classes
        $p.addClass(json[i].Year);
        if (json[i].Group) {
            $p.addClass("Group");
        } else {
            $p.addClass("Solo");
        }

        var length = json[i].Length.split(":");
        var minutes = parseInt(length[0]);
        var seconds = parseInt(length[1]);

        var s = Math.round(seconds / 15) * 15;
        var m = minutes;
        if (s == 60) {
            s = "00";
            m = minutes + 1;
        } else if (s == 0) {
            s = "00";
        }

        $p.addClass("Length-" + m + "-" + s);
        $p.addClass("Year-" + json[i].Year);
        $p.addClass(json[i].Genre);
        $p.addClass(json[i].Sex);
        $p.addClass(json[i].Label);
        $p.addClass("Month-" + json[i].Month);
        $p.addClass(json[i].Country);

        //Add Text
        $p.html(json[i].Title);
        $p.prepend(player.DOMElement());

        if (i < json.length / 2) {
            $(".left-songs").append($d);

        } else {

            $(".right-songs").append($d);
        }

    }


    /************** TIME **************/

    timeSliderRange = [mostCommonYear, mostCommonYear];
    // With JQuery
    $("#time-slider").slider({
        tooltip: 'always',
        min: firstYear,
        max: lastYear,
        value: [mostCommonYear, mostCommonYear],
        focus: true,
        formatter: function(value) {
            if (value.length > 0) {
                timeSliderRange = timeSlider(value, firstYear, lastYear);
            }
            return value[0] + " : " + value[1];
        }
    });

    /************** MONTH **************/

    monthSliderRange = [mostCommonMonth, mostCommonMonth];

    // With JQuery
    $("#month-slider").slider({
        min: 1,
        max: 12,
        ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        value: [mostCommonMonth, mostCommonMonth],
        tooltip: 'always',
        formatter: function(value) {
            var bigger = Math.max(value[0], value[1]);
            var smaller = Math.min(value[0], value[1]);
            if (value.length > 0) {
                monthSliderRange = monthSlider([smaller - 1, bigger - 1]);
                return (months[smaller - 1] + " : " + months[bigger - 1]);
            }
        },
        focus: true
    });

    /************** LENGTH **************/

    lengthSliderRange = [mostCommonLength, mostCommonLength];

    // With JQuery
    $("#length-slider").slider({
        min: 0,
        max: lengths.length - 1,
        value: [mostCommonLength, mostCommonLength],
        tooltip: 'always',
        formatter: function(value) {
            if (value.length > 1) {
                lengthSliderRange = lengthSlider(value);
                return (lengths[value[0]] + " - " + lengths[value[1]]);
            }
        },
        focus: true
    });

    reset();

}

function reset() {
    monthSliderRange = [mostCommonMonth, mostCommonMonth];
    monthSlider(monthSliderRange);
    $("#month-slider").slider("setValue", monthSliderRange);

    timeSliderRange = [mostCommonYear, mostCommonYear];
    timeSlider(timeSliderRange, firstYear, lastYear);
    $("#time-slider").slider("setValue", timeSliderRange);

    lengthSliderRange = [mostCommonLength, mostCommonLength];
    lengthSlider(lengthSliderRange);
    $("#length-slider").slider("setValue", lengthSliderRange);

    $('.sex').children('h3').removeClass("clicked-category");
    $('.year').children('h3').removeClass("clicked-category");
    $('.length').children('h3').removeClass("clicked-category");
    $('.month').children('h3').removeClass("clicked-category");
    $('.country').children('h3').removeClass("clicked-category");

    sexQuery = "";
    yearQuery = "";
    lengthQuery = "";
    monthQuery = "";
    countryQuery = "";

    $(".country .dropdown-button").removeClass();
    $(".country .dropdown-button").addClass("US");
    if ($(".country .dropdown-text").text() != "United States") {
        var switchText = $(".country .dropdown-text").text(); //text to add back to drop-list
        $(".country .dropdown-text").text("United States"); //reset to United States
        $(".country .dropdown-box p:contains('United States')").text(switchText);
    }
    $(".genre .dropdown-button").removeClass();
    $(".genre .dropdown-button").addClass("Rock");
    if ($(".genre .dropdown-text").text() != "Rock") {
        var switchText = $(".genre .dropdown-text").text(); //text to add back to drop-list
        $(".genre .dropdown-text").text("Rock"); //reset to Rock
        $(".genre .dropdown-box p:contains('Rock')").text(switchText);
    }


    if ($(".sex p").text() == "Female") {
        $('.Female').removeClass('hover');
        $(".sex p").removeClass("Female");
        $(".sex p").addClass("Male");
        $(".sex p").text("Male");
        $('.Male').addClass('hover');
    }    


    $('.hover').removeClass('hover');
    $('.clicked-category').removeClass('clicked-category');

}

function createSongHTML(json) {
    var info = "<div class='info'><p>Singer: " + json.Artist + "</p>" + "<p>Year: " + json.Year + "</p>" + "<p>Genre: " + json.Genre + "</p>" + "<p>Label: " + json.Label + "</p>" + "<p>Month Released: " + json.Month + "</p>" + "<p>Length: " + json.Length + "</p>" + "<p>Sex of the Singer(s): " + json.Sex + "</p>" + "<p>Country of the Singer(s): " + json.Country + "</p>";
    if (json.Group == "TRUE") {
        info += "<p>Group Band</p></div>";
    } else {
        info += "<p>Solo Artist</p></div>";
    }
    return info;
}


function monthSlider(value) {

    monthQuery = "";
    for (var i = 0; i <= 11; i++) {
        month_class = '.Month-' + months[i];
        if (i >= value[0] && i <= value[1]) {
            monthQuery += month_class + ", ";
            $(month_class).addClass('hover');
        } else {
            $(month_class).removeClass('hover');
        }
    }
    return value;

}

function timeSlider(value, first, last) {

    var year_class;
    yearQuery = "";

    for (var i = first; i <= last; i++) {
        year_class = '.Year-' + i;
        if (i >= value[0] && i <= value[1]) {
            yearQuery += year_class + ", ";
            $(year_class).addClass('hover');
        } else {
            $(year_class).removeClass('hover');
        }

    }

    return value;
}

function lengthSlider(value) {

    var length_class;
    var length;
    lengthQuery = "";
    for (var i = 0; i < lengths.length; i++) {
        length = lengths[i].replace(":", "-");
        length_class = '.Length-' + length;

        // TODO: if (i == value[0]) {
        if (i >= value[0] && i <= value[1]) {
            lengthQuery += length_class + ", ";
            $(length_class).addClass('hover');
        } else {
            $(length_class).removeClass('hover');
        }

    }
    return value;
}

// comma is or
// connected is and
function multiselect() {

    if (yearQuery.substring(yearQuery.length - 2, yearQuery.length - 1) == ",") {
        yearQuery = yearQuery.substring(0, yearQuery.length - 2);
    }

    if (monthQuery.substring(monthQuery.length - 2, monthQuery.length - 1) == ",") {
        monthQuery = monthQuery.substring(0, monthQuery.length - 2);
    }
    if (lengthQuery.substring(lengthQuery.length - 2, lengthQuery.length - 1) == ",") {
        lengthQuery = lengthQuery.substring(0, lengthQuery.length - 2);
    }

    var ys = yearQuery.split(", ");
    var ms = monthQuery.split(", ");
    var ls = lengthQuery.split(", ");

    var lastPhrase = "";
    var search = "";



    if ($('.sex').children('h3').hasClass("clicked-category")) {
        if ($(".sex p").text() == "Male") {
            $(".Male").addClass('sex_selected');
        } else {
            $(".Female").addClass('sex_selected');
        }
        search += ".sex_selected";
    }
    if ($('.genre').children('h3').hasClass("clicked-category")) {
        console.log("hi");
        var genre = $(".genre .dropdown-text").text();
        if (genre == "Rock") $('.Rock').addClass('genre_selected');
        if (genre == "Soul") $('.Soul').addClass('genre_selected');
        if (genre == "Folk") $('.Folk').addClass('genre_selected');
        if (genre == "RnB") $('.RnB').addClass('genre_selected');
        if (genre == "Country") $('.Country').addClass('genre_selected');
        if (genre == "Reggae") $('.Reggae').addClass('genre_selected');
        if (genre == "Hip-Hop") $('.Hip-Hop').addClass('genre_selected');
        if (genre == "Funk") $('.Funk').addClass('genre_selected');
        if (genre == "Doo-wop") $('.Doo-wop').addClass('genre_selected');
        if (genre == "Pop") $('.Pop').addClass('genre_selected');
        if (genre == "Jazz") $('.Jazz').addClass('genre_selected');
        search += ".genre_selected";
    }
    if ($('.year').children('h3').hasClass("clicked-category")) {
        console.log("hi");
        for (var y in ys) {
            var a = $(ys[y]);
            a.addClass("year_selected");
        }
        search += ".year_selected";
    }
    if ($('.length').children('h3').hasClass("clicked-category")) {
        for (var l in ls) {
            var c = $(ls[l]);
            c.addClass("length_selected");
        }

        search += ".length_selected";
    }
    if ($('.month').children('h3').hasClass("clicked-category")) {
        for (var m in ms) {
            var b = $(ms[m]);
            b.addClass("month_selected");
        }

        search += ".month_selected";

    }
    if ($('.country').children('h3').hasClass("clicked-category")) {
        var country = $(".country .dropdown-text").text();
        if (country == "United States") $('.US').addClass("country_selected");
        if (country == "United Kingdom") $('.UK').addClass("country_selected");
        if (country == "Ireland") $('.Ireland').addClass("country_selected");
        if (country == "Jamaica") $('.Jamaica').addClass("country_selected");
        search += ".country_selected";
    }

    var a = $(search);
    a.addClass('hover');
}

function removeHighlights() {
    console.log("Highlights");
    console.log($('.hover'));
    $('.hover').removeClass('hover');
    $('.clicked-category').removeClass('clicked-category');

    $('.country_selected').removeClass('country_selected');
    $('.month_selected').removeClass('month_selected');
    $('.length_selected').removeClass('length_selected');
    $('.year_selected').removeClass('year_selected');
    $('.genre_selected').removeClass('genre_selected');
    $('sex_selected').removeClass('sex_selected');
}
