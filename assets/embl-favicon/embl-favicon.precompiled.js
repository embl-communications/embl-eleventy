/**
 * Precompiled Nunjucks template: embl-favicon.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["embl-favicon"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"https://dev.beta.embl.org/guidelines/design/assets/embl-favicon/assets/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"https://dev.beta.embl.org/guidelines/design/assets/embl-favicon/assets//favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"https://dev.beta.embl.org/guidelines/design/assets/embl-favicon/assets/favicon-16x16.png\">\n<link rel=\"manifest\" href=\"https://dev.beta.embl.org/guidelines/design/assets/embl-favicon/assets/site.webmanifest\">\n<link rel=\"mask-icon\" href=\"https://dev.beta.embl.org/guidelines/design/assets/embl-favicon/assets/safari-pinned-tab.svg\" color=\"#ffffff\">\n<meta name=\"msapplication-TileColor\" content=\"#ffffff\">\n<meta name=\"theme-color\" content=\"#ffffff\">\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
