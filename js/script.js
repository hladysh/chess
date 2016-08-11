$(".checker").draggable({
    revert: "invalid",
    stop: function() {
        $(this).draggable('option', 'revert', 'invalid');
    }
});
$(".checker").droppable({
    greedy: true,
    tolerance: 'touch',
    drop: function(event, ui) {
        ui.draggable.draggable('option', 'revert', true);
    }
});
$("tr:nth-child(even) td:nth-child(odd),tr:nth-child(odd) td:nth-child(even)").droppable({
    accept: '.checker'
});
$(".knockedWhite td").droppable({
    accept: '.checker.white'
});
$(".knockedBlack td").droppable({
    accept: '.checker.black'
});