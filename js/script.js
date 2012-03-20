$(function() {
    
    /* syntax highlighting */
	$('pre code').each(function(i, e) {
		hljs.highlightBlock(e, '    ')
	});
    
    /* toggle demo code blocks */
	$('pre.show').on("click", function() {
		this.className = this.className.indexOf("show") !== -1 ?
    		this.className.replace("show", "collapse") : this.className.replace("collapse", "show");
	});
    
    /* twitter */
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    
    /* google +1
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);*/

});