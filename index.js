const yesbtn=document.getElementById("yes");

function openNewPage() {
    window.location.href = 'pg2.html';
}

// Attach the click event listener to the button
yesbtn.addEventListener('click', openNewPage);

function moveButtonRandomly() {
    $(".tricky").css({
        left: (Math.random() * 90) + "%",
        top: (Math.random() * 90) + "%",
        transform: 'scale(1)'
    });
}

// Attach the mouseover event handler
$(".tricky").on({
    mouseover: function () {
        moveButtonRandomly();
    }
});

// Add hover effect using CSS class toggle
$(".btn-wrap").hover(function () {
    $(this).toggleClass('active');
});

// Touchstart event handler for mobile devices
$('.tricky').bind('touchstart', function () {
    moveButtonRandomly();
});