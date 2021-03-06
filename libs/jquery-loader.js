(function() {
  // Default to the local version.
  var path = '../node_modules/jquery/dist/jquery.js';
  // Get any jquery=___ param from the query string.
  var jqversion = location.search.match(/[?&]jquery=(.*?)(?=&|$)/);
  // If a version was specified, use that version from code.jquery.com.
  if (jqversion) {
    path = 'http://code.jquery.com/jquery-' + jqversion[1] + '.js';
  }
  // This is the only time I'll ever use document.write, I promise!
  /* jshint -W060 */
  document.write('<script src="' + path + '"></script>'); // eslint-disable-line no-implied-eval
  /* jshint +W060 */
}());
