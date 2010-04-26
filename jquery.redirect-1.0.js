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
		var form = $('<form action="' + url + '" method="post">').appendTo("body");
		if (params) {
			for (var name in params) {
				form.append('<input type="hidden" name="' + name + '" value="' + params[name] + '" />');
			}
		}
		form.submit();
	};
})(jQuery);
