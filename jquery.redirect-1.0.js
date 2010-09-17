/*!
 * jQuery.postRedirect
 * Dual licensed under MIT and GPL.
 * Date: 2010-04-16
 *
 * @projectDescription Redirect to a page with parameters via POST
 * @author Jim Yi
 * @version 1.0.0
 *
 * @id jQuery.postRedirect
 * @id jQuery.fn.postRedirect
 * @param {string} url The URL to redirect to
 * @param {Object} params Hash of POST parameters (optional)
 *
 */
(function($){
    $.postRedirect = function(url, params) {
        $("body").append('<form action="' + url + '" method="post" style="display:none" id="jquery_post_redirect"></form>');
        var form = $("#jquery_post_redirect");
        if (params) {
            for (var name in params) {
                form.append('<input type="hidden" name="' + name + '" value="' + params[name] + '" />');
            }
        }
        form.trigger("submit");
    };
})(jQuery);
