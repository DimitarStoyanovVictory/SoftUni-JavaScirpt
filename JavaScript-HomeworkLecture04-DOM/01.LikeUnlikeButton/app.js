$(document).ready(function () {
    $('#likeUnlikeBut').click(function () {
        $(this).text(function (i, text) {
            return text === 'Like' ? 'Unlike' : 'Like';
        });
    });
});

