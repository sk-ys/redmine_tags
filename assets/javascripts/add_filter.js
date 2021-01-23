$(function () {
    var update_option = function () {
        if ($('#operators_tags').length && !$('#operators_tags option[value="and"]').length) {
            var option_equals = $('#operators_tags option[value="="]');
            option_equals.after('<option value="and">' + option_equals.text() + ' (and)</option>');
            option_equals.text(option_equals.text() + ' (or)');
        }
    }

    var observer_rsize_filter =
            new MutationObserver(function (mutations) {
                update_option();
            });
    observer_rsize_filter.observe(
        $('#filters')[0], {
            childList : true,
            subtree: true
        });

    // initial invoke
    update_option();

    if (location.search.indexOf(encodeURI('op[tags]=and'))>0) {
        setTimeout(function () {$('#operators_tags').val('and');});
    }
});
