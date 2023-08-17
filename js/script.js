const singerNameTag = '#singers .singer-name',
quotesTags = '#singers .singer-quote',
userMessageInputTag = '#contact .contact textarea',
remainingCharsTag = '#contact .contact p span',
concertDate = '26 february 2024 9:00:00',
navItemsTag = 'nav .nav-items',
navHolderTag = 'nav .nav-holder',
navCloserTag = 'nav .nav-items i',
charLimit = 100;

// Function to countdown to concert date
function countDownToTime(countTo) {
    let futureDate = new Date(countTo),
    now = new Date();

    futureDate = (futureDate.getTime()/1000);
    now = (now.getTime()/1000);

    const timeDifference = futureDate - now;
        
    const days = Math.floor(timeDifference / (24*60*60)),
    hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600),
    mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60),
    secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)));

    $(".days").find('h3').html(`${days} D`);
    $(".hours").find('h3').html(`${hours} h`);
    $(".minutes").find('h3').html(`${mins} m`);
    $('.seconds').find('h3').html(`${secs} s`);

    setInterval(function() {  countDownToTime(countTo); }, 1000);
}

// Function to display user message char limit
function displayCharCount() {
    const chars = $(userMessageInputTag).val().length,
    remainingChars = charLimit - chars;
    if (remainingChars >= 0) {
        $(remainingCharsTag).html(remainingChars);
    } else {
        $(remainingCharsTag).html('EXCEEDED');
    }
}


// Handling click of navbar menu icon
$(navHolderTag).click(function () { 
    if ($(navItemsTag).css('display') == 'block') {
        $(navItemsTag).hide(1000);
    } else {
        $(navItemsTag).show(1000)
    }
});

// Handling click of navbar close icon
$(navCloserTag).click(function () { 
    $(navItemsTag).hide(1000);
});

// Handling singer click ---- accordion effect
$(singerNameTag).click(function () { 
    $(quotesTags).slideUp(400, 'linear');
    if ($(this).next().css('display') != 'block') {
        $(this).next().slideDown(400, 'linear');
    }
});

// Handling user message input
$(userMessageInputTag).keyup(function () {
    displayCharCount();
});


// onload defaults
$(window).on("load", function() {
    countDownToTime(concertDate);
    $(navItemsTag).hide();
    $(quotesTags).hide();
    displayCharCount();
});