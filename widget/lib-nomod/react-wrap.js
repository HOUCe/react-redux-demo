define('react', function(require, exports, module){
    module.exports = require('demo:widget/lib/react.min.js');
});

define('react-dom', function(require, exports, module){
    module.exports = require('demo:widget/lib/react-dom.js');
});

define('redux', function(require, exports, module){
    module.exports.Redux = require('demo:widget/lib/redux.min.js');
});

define('react-redux', function(require, exports, module){
    module.exports.ReactRedux = require('demo:widget/lib/react-redux.js');
});

define('redux-thunk', function(require, exports, module){
    module.exports = require('demo:widget/lib/redux-thunk.es');
});

// define('react-contenteditable', function(require, exports, module){
//     module.exports = require('message:widget/js/react-contenteditable.js');
// });

// define('react-modal', function(require, exports, module){
//     module.exports = require('message:widget/js/react-modal.js');
// });