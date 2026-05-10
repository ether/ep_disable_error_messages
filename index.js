'use strict';

const {hideCSS} = require('ep_plugin_helpers');

// Hide error gritter notifications on the pad page. Previously this
// injected the CSS client-side from postAceInit; serving it from
// eejsBlock_styles instead makes it available before the editor
// initialises, so users never see the error popup flash on load.
exports.eejsBlock_styles = hideCSS('#gritter-container > .error');
