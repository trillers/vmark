webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';

	__webpack_require__(4);

	__webpack_require__(12);

	var _app = __webpack_require__(13);

	var _index = __webpack_require__(14);

	var _AppStore = __webpack_require__(18);

	var AppStore = _interopRequireWildcard(_AppStore);

	var _index2 = __webpack_require__(21);

	var _util = __webpack_require__(11);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	__webpack_require__(23);
	__webpack_require__(24);

	window.app = _app.app;
	window.actions = _index.actions;

	Object.keys(_index2.mixins).forEach(function (key) {
	    riot.mixin(key, _index2.mixins[key]);
	});

	var tags = riot.mount('*');

	tags.forEach(function (tag) {
	    _app.app.views[tag.name] = tag;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* Riot v2.3.18, @license MIT */

	;(function (window, undefined) {
	  'use strict';

	  var riot = { version: 'v2.3.18', settings: {} },

	  // be aware, internal usage
	  // ATTENTION: prefix the global dynamic variables with `__`

	  // counter to give a unique id to all the Tag instances
	  __uid = 0,

	  // tags instances cache
	  __virtualDom = [],

	  // tags implementation cache
	  __tagImpl = {},


	  /**
	   * Const
	   */
	  GLOBAL_MIXIN = '__global_mixin',


	  // riot specific prefixes
	  RIOT_PREFIX = 'riot-',
	      RIOT_TAG = RIOT_PREFIX + 'tag',
	      RIOT_TAG_IS = 'data-is',


	  // for typeof == '' comparisons
	  T_STRING = 'string',
	      T_OBJECT = 'object',
	      T_UNDEF = 'undefined',
	      T_FUNCTION = 'function',

	  // special native tags that cannot be treated like the others
	  SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
	      RESERVED_WORDS_BLACKLIST = ['_item', '_id', '_parent', 'update', 'root', 'mount', 'unmount', 'mixin', 'isMounted', 'isLoop', 'tags', 'parent', 'opts', 'trigger', 'on', 'off', 'one'],


	  // version# for IE 8-11, 0 for others
	  IE_VERSION = (window && window.document || {}).documentMode | 0,


	  // detect firefox to fix #1374
	  FIREFOX = window && !!window.InstallTrigger;
	  /* istanbul ignore next */
	  riot.observable = function (el) {

	    /**
	     * Extend the original object or create a new empty one
	     * @type { Object }
	     */

	    el = el || {};

	    /**
	     * Private variables and methods
	     */
	    var callbacks = {},
	        slice = Array.prototype.slice,
	        onEachEvent = function onEachEvent(e, fn) {
	      e.replace(/\S+/g, fn);
	    };

	    // extend the object adding the observable methods
	    Object.defineProperties(el, {
	      /**
	       * Listen to the given space separated list of `events` and execute the `callback` each time an event is triggered.
	       * @param  { String } events - events ids
	       * @param  { Function } fn - callback function
	       * @returns { Object } el
	       */
	      on: {
	        value: function value(events, fn) {
	          if (typeof fn != 'function') return el;

	          onEachEvent(events, function (name, pos) {
	            (callbacks[name] = callbacks[name] || []).push(fn);
	            fn.typed = pos > 0;
	          });

	          return el;
	        },
	        enumerable: false,
	        writable: false,
	        configurable: false
	      },

	      /**
	       * Removes the given space separated list of `events` listeners
	       * @param   { String } events - events ids
	       * @param   { Function } fn - callback function
	       * @returns { Object } el
	       */
	      off: {
	        value: function value(events, fn) {
	          if (events == '*' && !fn) callbacks = {};else {
	            onEachEvent(events, function (name) {
	              if (fn) {
	                var arr = callbacks[name];
	                for (var i = 0, cb; cb = arr && arr[i]; ++i) {
	                  if (cb == fn) arr.splice(i--, 1);
	                }
	              } else delete callbacks[name];
	            });
	          }
	          return el;
	        },
	        enumerable: false,
	        writable: false,
	        configurable: false
	      },

	      /**
	       * Listen to the given space separated list of `events` and execute the `callback` at most once
	       * @param   { String } events - events ids
	       * @param   { Function } fn - callback function
	       * @returns { Object } el
	       */
	      one: {
	        value: function value(events, fn) {
	          function on() {
	            el.off(events, on);
	            fn.apply(el, arguments);
	          }
	          return el.on(events, on);
	        },
	        enumerable: false,
	        writable: false,
	        configurable: false
	      },

	      /**
	       * Execute all callback functions that listen to the given space separated list of `events`
	       * @param   { String } events - events ids
	       * @returns { Object } el
	       */
	      trigger: {
	        value: function value(events) {

	          // getting the arguments
	          var arglen = arguments.length - 1,
	              args = new Array(arglen),
	              fns;

	          for (var i = 0; i < arglen; i++) {
	            args[i] = arguments[i + 1]; // skip first argument
	          }

	          onEachEvent(events, function (name) {

	            fns = slice.call(callbacks[name] || [], 0);

	            for (var i = 0, fn; fn = fns[i]; ++i) {
	              if (fn.busy) return;
	              fn.busy = 1;
	              fn.apply(el, fn.typed ? [name].concat(args) : args);
	              if (fns[i] !== fn) {
	                i--;
	              }
	              fn.busy = 0;
	            }

	            if (callbacks['*'] && name != '*') el.trigger.apply(el, ['*', name].concat(args));
	          });

	          return el;
	        },
	        enumerable: false,
	        writable: false,
	        configurable: false
	      }
	    });

	    return el;
	  }
	  /* istanbul ignore next */
	  ;(function (riot) {

	    /**
	     * Simple client-side router
	     * @module riot-route
	     */

	    var RE_ORIGIN = /^.+?\/\/+[^\/]+/,
	        EVENT_LISTENER = 'EventListener',
	        REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
	        ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
	        HAS_ATTRIBUTE = 'hasAttribute',
	        REPLACE = 'replace',
	        POPSTATE = 'popstate',
	        HASHCHANGE = 'hashchange',
	        TRIGGER = 'trigger',
	        MAX_EMIT_STACK_LEVEL = 3,
	        win = typeof window != 'undefined' && window,
	        doc = typeof document != 'undefined' && document,
	        hist = win && history,
	        loc = win && (hist.location || win.location),
	        // see html5-history-api
	    prot = Router.prototype,
	        // to minify more
	    clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
	        started = false,
	        central = riot.observable(),
	        routeFound = false,
	        debouncedEmit,
	        base,
	        current,
	        parser,
	        secondParser,
	        emitStack = [],
	        emitStackLevel = 0;

	    /**
	     * Default parser. You can replace it via router.parser method.
	     * @param {string} path - current path (normalized)
	     * @returns {array} array
	     */
	    function DEFAULT_PARSER(path) {
	      return path.split(/[/?#]/);
	    }

	    /**
	     * Default parser (second). You can replace it via router.parser method.
	     * @param {string} path - current path (normalized)
	     * @param {string} filter - filter string (normalized)
	     * @returns {array} array
	     */
	    function DEFAULT_SECOND_PARSER(path, filter) {
	      var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
	          args = path.match(re);

	      if (args) return args.slice(1);
	    }

	    /**
	     * Simple/cheap debounce implementation
	     * @param   {function} fn - callback
	     * @param   {number} delay - delay in seconds
	     * @returns {function} debounced function
	     */
	    function debounce(fn, delay) {
	      var t;
	      return function () {
	        clearTimeout(t);
	        t = setTimeout(fn, delay);
	      };
	    }

	    /**
	     * Set the window listeners to trigger the routes
	     * @param {boolean} autoExec - see route.start
	     */
	    function start(autoExec) {
	      debouncedEmit = debounce(emit, 1);
	      win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
	      win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
	      doc[ADD_EVENT_LISTENER](clickEvent, click);
	      if (autoExec) emit(true);
	    }

	    /**
	     * Router class
	     */
	    function Router() {
	      this.$ = [];
	      riot.observable(this); // make it observable
	      central.on('stop', this.s.bind(this));
	      central.on('emit', this.e.bind(this));
	    }

	    function normalize(path) {
	      return path[REPLACE](/^\/|\/$/, '');
	    }

	    function isString(str) {
	      return typeof str == 'string';
	    }

	    /**
	     * Get the part after domain name
	     * @param {string} href - fullpath
	     * @returns {string} path from root
	     */
	    function getPathFromRoot(href) {
	      return (href || loc.href)[REPLACE](RE_ORIGIN, '');
	    }

	    /**
	     * Get the part after base
	     * @param {string} href - fullpath
	     * @returns {string} path from base
	     */
	    function getPathFromBase(href) {
	      return base[0] == '#' ? (href || loc.href || '').split(base)[1] || '' : (loc ? getPathFromRoot(href) : href || '')[REPLACE](base, '');
	    }

	    function emit(force) {
	      // the stack is needed for redirections
	      var isRoot = emitStackLevel == 0;
	      if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) return;

	      emitStackLevel++;
	      emitStack.push(function () {
	        var path = getPathFromBase();
	        if (force || path != current) {
	          central[TRIGGER]('emit', path);
	          current = path;
	        }
	      });
	      if (isRoot) {
	        while (emitStack.length) {
	          emitStack[0]();
	          emitStack.shift();
	        }
	        emitStackLevel = 0;
	      }
	    }

	    function click(e) {
	      if (e.which != 1 // not left click
	       || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
	       || e.defaultPrevented // or default prevented
	      ) return;

	      var el = e.target;
	      while (el && el.nodeName != 'A') {
	        el = el.parentNode;
	      }if (!el || el.nodeName != 'A' // not A tag
	       || el[HAS_ATTRIBUTE]('download') // has download attr
	       || !el[HAS_ATTRIBUTE]('href') // has no href attr
	       || el.target && el.target != '_self' // another window or frame
	       || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1 // cross origin
	      ) return;

	      if (el.href != loc.href) {
	        if (el.href.split('#')[0] == loc.href.split('#')[0] // internal jump
	         || base != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
	         || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
	        ) return;
	      }

	      e.preventDefault();
	    }

	    /**
	     * Go to the path
	     * @param {string} path - destination path
	     * @param {string} title - page title
	     * @param {boolean} shouldReplace - use replaceState or pushState
	     * @returns {boolean} - route not found flag
	     */
	    function go(path, title, shouldReplace) {
	      if (hist) {
	        // if a browser
	        path = base + normalize(path);
	        title = title || doc.title;
	        // browsers ignores the second parameter `title`
	        shouldReplace ? hist.replaceState(null, title, path) : hist.pushState(null, title, path);
	        // so we need to set it manually
	        doc.title = title;
	        routeFound = false;
	        emit();
	        return routeFound;
	      }

	      // Server-side usage: directly execute handlers for the path
	      return central[TRIGGER]('emit', getPathFromBase(path));
	    }

	    /**
	     * Go to path or set action
	     * a single string:                go there
	     * two strings:                    go there with setting a title
	     * two strings and boolean:        replace history with setting a title
	     * a single function:              set an action on the default route
	     * a string/RegExp and a function: set an action on the route
	     * @param {(string|function)} first - path / action / filter
	     * @param {(string|RegExp|function)} second - title / action
	     * @param {boolean} third - replace flag
	     */
	    prot.m = function (first, second, third) {
	      if (isString(first) && (!second || isString(second))) go(first, second, third || false);else if (second) this.r(first, second);else this.r('@', first);
	    };

	    /**
	     * Stop routing
	     */
	    prot.s = function () {
	      this.off('*');
	      this.$ = [];
	    };

	    /**
	     * Emit
	     * @param {string} path - path
	     */
	    prot.e = function (path) {
	      this.$.concat('@').some(function (filter) {
	        var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter));
	        if (typeof args != 'undefined') {
	          this[TRIGGER].apply(null, [filter].concat(args));
	          return routeFound = true; // exit from loop
	        }
	      }, this);
	    };

	    /**
	     * Register route
	     * @param {string} filter - filter for matching to url
	     * @param {function} action - action to register
	     */
	    prot.r = function (filter, action) {
	      if (filter != '@') {
	        filter = '/' + normalize(filter);
	        this.$.push(filter);
	      }
	      this.on(filter, action);
	    };

	    var mainRouter = new Router();
	    var route = mainRouter.m.bind(mainRouter);

	    /**
	     * Create a sub router
	     * @returns {function} the method of a new Router object
	     */
	    route.create = function () {
	      var newSubRouter = new Router();
	      // assign sub-router's main method
	      var router = newSubRouter.m.bind(newSubRouter);
	      // stop only this sub-router
	      router.stop = newSubRouter.s.bind(newSubRouter);
	      return router;
	    };

	    /**
	     * Set the base of url
	     * @param {(str|RegExp)} arg - a new base or '#' or '#!'
	     */
	    route.base = function (arg) {
	      base = arg || '#';
	      current = getPathFromBase(); // recalculate current path
	    };

	    /** Exec routing right now **/
	    route.exec = function () {
	      emit(true);
	    };

	    /**
	     * Replace the default router to yours
	     * @param {function} fn - your parser function
	     * @param {function} fn2 - your secondParser function
	     */
	    route.parser = function (fn, fn2) {
	      if (!fn && !fn2) {
	        // reset parser for testing...
	        parser = DEFAULT_PARSER;
	        secondParser = DEFAULT_SECOND_PARSER;
	      }
	      if (fn) parser = fn;
	      if (fn2) secondParser = fn2;
	    };

	    /**
	     * Helper function to get url query as an object
	     * @returns {object} parsed query
	     */
	    route.query = function () {
	      var q = {};
	      var href = loc.href || current;
	      href[REPLACE](/[?&](.+?)=([^&]*)/g, function (_, k, v) {
	        q[k] = v;
	      });
	      return q;
	    };

	    /** Stop routing **/
	    route.stop = function () {
	      if (started) {
	        if (win) {
	          win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
	          win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
	          doc[REMOVE_EVENT_LISTENER](clickEvent, click);
	        }
	        central[TRIGGER]('stop');
	        started = false;
	      }
	    };

	    /**
	     * Start routing
	     * @param {boolean} autoExec - automatically exec after starting if true
	     */
	    route.start = function (autoExec) {
	      if (!started) {
	        if (win) {
	          if (document.readyState == 'complete') start(autoExec);
	          // the timeout is needed to solve
	          // a weird safari bug https://github.com/riot/route/issues/33
	          else win[ADD_EVENT_LISTENER]('load', function () {
	              setTimeout(function () {
	                start(autoExec);
	              }, 1);
	            });
	        }
	        started = true;
	      }
	    };

	    /** Prepare the router **/
	    route.base();
	    route.parser();

	    riot.route = route;
	  })(riot);
	  /* istanbul ignore next */

	  /**
	   * The riot template engine
	   * @version v2.3.22
	   */

	  /**
	   * riot.util.brackets
	   *
	   * - `brackets    ` - Returns a string or regex based on its parameter
	   * - `brackets.set` - Change the current riot brackets
	   *
	   * @module
	   */

	  var brackets = function (UNDEF) {

	    var REGLOB = 'g',
	        R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
	        R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
	        S_QBLOCKS = R_STRINGS.source + '|' + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
	        FINDBRACES = {
	      '(': RegExp('([()])|' + S_QBLOCKS, REGLOB),
	      '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
	      '{': RegExp('([{}])|' + S_QBLOCKS, REGLOB)
	    },
	        DEFAULT = '{ }';

	    var _pairs = ['{', '}', '{', '}', /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/];

	    var cachedBrackets = UNDEF,
	        _regex,
	        _cache = [],
	        _settings;

	    function _loopback(re) {
	      return re;
	    }

	    function _rewrite(re, bp) {
	      if (!bp) bp = _cache;
	      return new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : '');
	    }

	    function _create(pair) {
	      if (pair === DEFAULT) return _pairs;

	      var arr = pair.split(' ');

	      if (arr.length !== 2 || /[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)) {
	        throw new Error('Unsupported brackets "' + pair + '"');
	      }
	      arr = arr.concat(pair.replace(/(?=[[\]()*+?.^$|])/g, '\\').split(' '));

	      arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
	      arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
	      arr[6] = _rewrite(_pairs[6], arr);
	      arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB);
	      arr[8] = pair;
	      return arr;
	    }

	    function _brackets(reOrIdx) {
	      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx];
	    }

	    _brackets.split = function split(str, tmpl, _bp) {
	      // istanbul ignore next: _bp is for the compiler
	      if (!_bp) _bp = _cache;

	      var parts = [],
	          match,
	          isexpr,
	          start,
	          pos,
	          re = _bp[6];

	      isexpr = start = re.lastIndex = 0;

	      while (match = re.exec(str)) {

	        pos = match.index;

	        if (isexpr) {

	          if (match[2]) {
	            re.lastIndex = skipBraces(str, match[2], re.lastIndex);
	            continue;
	          }
	          if (!match[3]) {
	            continue;
	          }
	        }

	        if (!match[1]) {
	          unescapeStr(str.slice(start, pos));
	          start = re.lastIndex;
	          re = _bp[6 + (isexpr ^= 1)];
	          re.lastIndex = start;
	        }
	      }

	      if (str && start < str.length) {
	        unescapeStr(str.slice(start));
	      }

	      return parts;

	      function unescapeStr(s) {
	        if (tmpl || isexpr) {
	          parts.push(s && s.replace(_bp[5], '$1'));
	        } else {
	          parts.push(s);
	        }
	      }

	      function skipBraces(s, ch, ix) {
	        var match,
	            recch = FINDBRACES[ch];

	        recch.lastIndex = ix;
	        ix = 1;
	        while (match = recch.exec(s)) {
	          if (match[1] && !(match[1] === ch ? ++ix : --ix)) break;
	        }
	        return ix ? s.length : recch.lastIndex;
	      }
	    };

	    _brackets.hasExpr = function hasExpr(str) {
	      return _cache[4].test(str);
	    };

	    _brackets.loopKeys = function loopKeys(expr) {
	      var m = expr.match(_cache[9]);

	      return m ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] } : { val: expr.trim() };
	    };

	    _brackets.array = function array(pair) {
	      return pair ? _create(pair) : _cache;
	    };

	    function _reset(pair) {
	      if ((pair || (pair = DEFAULT)) !== _cache[8]) {
	        _cache = _create(pair);
	        _regex = pair === DEFAULT ? _loopback : _rewrite;
	        _cache[9] = _regex(_pairs[9]);
	      }
	      cachedBrackets = pair;
	    }

	    function _setSettings(o) {
	      var b;

	      o = o || {};
	      b = o.brackets;
	      Object.defineProperty(o, 'brackets', {
	        set: _reset,
	        get: function get() {
	          return cachedBrackets;
	        },
	        enumerable: true
	      });
	      _settings = o;
	      _reset(b);
	    }

	    Object.defineProperty(_brackets, 'settings', {
	      set: _setSettings,
	      get: function get() {
	        return _settings;
	      }
	    });

	    /* istanbul ignore next: in the browser riot is always in the scope */
	    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
	    _brackets.set = _reset;

	    _brackets.R_STRINGS = R_STRINGS;
	    _brackets.R_MLCOMMS = R_MLCOMMS;
	    _brackets.S_QBLOCKS = S_QBLOCKS;

	    return _brackets;
	  }();

	  /**
	   * @module tmpl
	   *
	   * tmpl          - Root function, returns the template value, render with data
	   * tmpl.hasExpr  - Test the existence of a expression inside a string
	   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
	   */

	  var tmpl = function () {

	    var _cache = {};

	    function _tmpl(str, data) {
	      if (!str) return str;

	      return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr);
	    }

	    _tmpl.haveRaw = brackets.hasRaw;

	    _tmpl.hasExpr = brackets.hasExpr;

	    _tmpl.loopKeys = brackets.loopKeys;

	    _tmpl.errorHandler = null;

	    function _logErr(err, ctx) {

	      if (_tmpl.errorHandler) {

	        err.riotData = {
	          tagName: ctx && ctx.root && ctx.root.tagName,
	          _riot_id: ctx && ctx._riot_id //eslint-disable-line camelcase
	        };
	        _tmpl.errorHandler(err);
	      }
	    }

	    function _create(str) {
	      var expr = _getTmpl(str);

	      if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr;

	      return new Function('E', expr + ';'); //eslint-disable-line no-new-func
	    }

	    var CH_IDEXPR = '⁗',
	        RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
	        RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
	        RE_DQUOTE = /\u2057/g,
	        RE_QBMARK = /\u2057(\d+)~/g;

	    function _getTmpl(str) {
	      var qstr = [],
	          expr,
	          parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);

	      if (parts.length > 2 || parts[0]) {
	        var i,
	            j,
	            list = [];

	        for (i = j = 0; i < parts.length; ++i) {

	          expr = parts[i];

	          if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"')) list[j++] = expr;
	        }

	        expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
	      } else {

	        expr = _parseExpr(parts[1], 0, qstr);
	      }

	      if (qstr[0]) {
	        expr = expr.replace(RE_QBMARK, function (_, pos) {
	          return qstr[pos].replace(/\r/g, '\\r').replace(/\n/g, '\\n');
	        });
	      }
	      return expr;
	    }

	    var RE_BREND = {
	      '(': /[()]/g,
	      '[': /[[\]]/g,
	      '{': /[{}]/g
	    };

	    function _parseExpr(expr, asText, qstr) {

	      expr = expr.replace(RE_QBLOCK, function (s, div) {
	        return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + '~' : s;
	      }).replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

	      if (expr) {
	        var list = [],
	            cnt = 0,
	            match;

	        while (expr && (match = expr.match(RE_CSNAME)) && !match.index) {
	          var key,
	              jsb,
	              re = /,|([[{(])|$/g;

	          expr = RegExp.rightContext;
	          key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

	          while (jsb = (match = re.exec(expr))[1]) {
	            skipBraces(jsb, re);
	          }jsb = expr.slice(0, match.index);
	          expr = RegExp.rightContext;

	          list[cnt++] = _wrapExpr(jsb, 1, key);
	        }

	        expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
	      }
	      return expr;

	      function skipBraces(ch, re) {
	        var mm,
	            lv = 1,
	            ir = RE_BREND[ch];

	        ir.lastIndex = re.lastIndex;
	        while (mm = ir.exec(expr)) {
	          if (mm[0] === ch) ++lv;else if (! --lv) break;
	        }
	        re.lastIndex = lv ? expr.length : ir.lastIndex;
	      }
	    }

	    // istanbul ignore next: not both
	    var // eslint-disable-next-line max-len
	    JS_CONTEXT = '"in this?this:' + ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' ? 'global' : 'window') + ').',
	        JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
	        JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

	    function _wrapExpr(expr, asText, key) {
	      var tb;

	      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
	        if (mvar) {
	          pos = tb ? 0 : pos + match.length;

	          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
	            match = p + '("' + mvar + JS_CONTEXT + mvar;
	            if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '[';
	          } else if (pos) {
	            tb = !JS_NOPROPS.test(s.slice(pos));
	          }
	        }
	        return match;
	      });

	      if (tb) {
	        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
	      }

	      if (key) {

	        expr = (tb ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""';
	      } else if (asText) {

	        expr = 'function(v){' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)';
	      }

	      return expr;
	    }

	    // istanbul ignore next: compatibility fix for beta versions
	    _tmpl.parse = function (s) {
	      return s;
	    };

	    _tmpl.version = brackets.version = 'v2.3.22';

	    return _tmpl;
	  }();

	  /*
	    lib/browser/tag/mkdom.js
	  
	    Includes hacks needed for the Internet Explorer version 9 and below
	    See: http://kangax.github.io/compat-table/es5/#ie8
	         http://codeplanet.io/dropping-ie8/
	  */
	  var mkdom = function _mkdom() {
	    var reHasYield = /<yield\b/i,
	        reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
	        reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
	        reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
	    var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
	        tblTags = IE_VERSION && IE_VERSION < 10 ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;

	    /**
	     * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
	     * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
	     *
	     * @param   {string} templ  - The template coming from the custom tag definition
	     * @param   {string} [html] - HTML content that comes from the DOM element where you
	     *           will mount the tag, mostly the original tag in the page
	     * @returns {HTMLElement} DOM element with _templ_ merged through `YIELD` with the _html_.
	     */
	    function _mkdom(templ, html) {
	      var match = templ && templ.match(/^\s*<([-\w]+)/),
	          tagName = match && match[1].toLowerCase(),
	          el = mkEl('div');

	      // replace all the yield tags with the tag inner html
	      templ = replaceYield(templ, html);

	      /* istanbul ignore next */
	      if (tblTags.test(tagName)) el = specialTags(el, templ, tagName);else el.innerHTML = templ;

	      el.stub = true;

	      return el;
	    }

	    /*
	      Creates the root element for table or select child elements:
	      tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
	    */
	    function specialTags(el, templ, tagName) {
	      var select = tagName[0] === 'o',
	          parent = select ? 'select>' : 'table>';

	      // trim() is important here, this ensures we don't have artifacts,
	      // so we can check if we have only one element inside the parent
	      el.innerHTML = '<' + parent + templ.trim() + '</' + parent;
	      parent = el.firstChild;

	      // returns the immediate parent if tr/th/td/col is the only element, if not
	      // returns the whole tree, as this can include additional elements
	      if (select) {
	        parent.selectedIndex = -1; // for IE9, compatible w/current riot behavior
	      } else {
	          // avoids insertion of cointainer inside container (ex: tbody inside tbody)
	          var tname = rootEls[tagName];
	          if (tname && parent.childElementCount === 1) parent = $(tname, parent);
	        }
	      return parent;
	    }

	    /*
	      Replace the yield tag from any tag template with the innerHTML of the
	      original tag in the page
	    */
	    function replaceYield(templ, html) {
	      // do nothing if no yield
	      if (!reHasYield.test(templ)) return templ;

	      // be careful with #1343 - string on the source having `$1`
	      var src = {};

	      html = html && html.replace(reYieldSrc, function (_, ref, text) {
	        src[ref] = src[ref] || text; // preserve first definition
	        return '';
	      }).trim();

	      return templ.replace(reYieldDest, function (_, ref, def) {
	        // yield with from - to attrs
	        return src[ref] || def || '';
	      }).replace(reYieldAll, function (_, def) {
	        // yield without any "from"
	        return html || def || '';
	      });
	    }

	    return _mkdom;
	  }();

	  /**
	   * Convert the item looped into an object used to extend the child tag properties
	   * @param   { Object } expr - object containing the keys used to extend the children tags
	   * @param   { * } key - value to assign to the new object returned
	   * @param   { * } val - value containing the position of the item in the array
	   * @returns { Object } - new object containing the values of the original item
	   *
	   * The variables 'key' and 'val' are arbitrary.
	   * They depend on the collection type looped (Array, Object)
	   * and on the expression used on the each tag
	   *
	   */
	  function mkitem(expr, key, val) {
	    var item = {};
	    item[expr.key] = key;
	    if (expr.pos) item[expr.pos] = val;
	    return item;
	  }

	  /**
	   * Unmount the redundant tags
	   * @param   { Array } items - array containing the current items to loop
	   * @param   { Array } tags - array containing all the children tags
	   */
	  function unmountRedundant(items, tags) {

	    var i = tags.length,
	        j = items.length,
	        t;

	    while (i > j) {
	      t = tags[--i];
	      tags.splice(i, 1);
	      t.unmount();
	    }
	  }

	  /**
	   * Move the nested custom tags in non custom loop tags
	   * @param   { Object } child - non custom loop tag
	   * @param   { Number } i - current position of the loop tag
	   */
	  function moveNestedTags(child, i) {
	    Object.keys(child.tags).forEach(function (tagName) {
	      var tag = child.tags[tagName];
	      if (isArray(tag)) each(tag, function (t) {
	        moveChildTag(t, tagName, i);
	      });else moveChildTag(tag, tagName, i);
	    });
	  }

	  /**
	   * Adds the elements for a virtual tag
	   * @param { Tag } tag - the tag whose root's children will be inserted or appended
	   * @param { Node } src - the node that will do the inserting or appending
	   * @param { Tag } target - only if inserting, insert before this tag's first child
	   */
	  function addVirtual(tag, src, target) {
	    var el = tag._root,
	        sib;
	    tag._virts = [];
	    while (el) {
	      sib = el.nextSibling;
	      if (target) src.insertBefore(el, target._root);else src.appendChild(el);

	      tag._virts.push(el); // hold for unmounting
	      el = sib;
	    }
	  }

	  /**
	   * Move virtual tag and all child nodes
	   * @param { Tag } tag - first child reference used to start move
	   * @param { Node } src  - the node that will do the inserting
	   * @param { Tag } target - insert before this tag's first child
	   * @param { Number } len - how many child nodes to move
	   */
	  function moveVirtual(tag, src, target, len) {
	    var el = tag._root,
	        sib,
	        i = 0;
	    for (; i < len; i++) {
	      sib = el.nextSibling;
	      src.insertBefore(el, target._root);
	      el = sib;
	    }
	  }

	  /**
	   * Manage tags having the 'each'
	   * @param   { Object } dom - DOM node we need to loop
	   * @param   { Tag } parent - parent tag instance where the dom node is contained
	   * @param   { String } expr - string contained in the 'each' attribute
	   */
	  function _each(dom, parent, expr) {

	    // remove the each property from the original tag
	    remAttr(dom, 'each');

	    var mustReorder = _typeof(getAttr(dom, 'no-reorder')) !== T_STRING || remAttr(dom, 'no-reorder'),
	        tagName = getTagName(dom),
	        impl = __tagImpl[tagName] || { tmpl: dom.outerHTML },
	        useRoot = SPECIAL_TAGS_REGEX.test(tagName),
	        root = dom.parentNode,
	        ref = document.createTextNode(''),
	        child = getTag(dom),
	        isOption = tagName.toLowerCase() === 'option',
	        // the option tags must be treated differently
	    tags = [],
	        oldItems = [],
	        hasKeys,
	        isVirtual = dom.tagName == 'VIRTUAL';

	    // parse the each expression
	    expr = tmpl.loopKeys(expr);

	    // insert a marked where the loop tags will be injected
	    root.insertBefore(ref, dom);

	    // clean template code
	    parent.one('before-mount', function () {

	      // remove the original DOM node
	      dom.parentNode.removeChild(dom);
	      if (root.stub) root = parent.root;
	    }).on('update', function () {
	      // get the new items collection
	      var items = tmpl(expr.val, parent),

	      // create a fragment to hold the new DOM nodes to inject in the parent tag
	      frag = document.createDocumentFragment();

	      // object loop. any changes cause full redraw
	      if (!isArray(items)) {
	        hasKeys = items || false;
	        items = hasKeys ? Object.keys(items).map(function (key) {
	          return mkitem(expr, key, items[key]);
	        }) : [];
	      }

	      // loop all the new items
	      var i = 0,
	          itemsLength = items.length;

	      for (; i < itemsLength; i++) {
	        // reorder only if the items are objects
	        var item = items[i],
	            _mustReorder = mustReorder && item instanceof Object && !hasKeys,
	            oldPos = oldItems.indexOf(item),
	            pos = ~oldPos && _mustReorder ? oldPos : i,

	        // does a tag exist in this position?
	        tag = tags[pos];

	        item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;

	        // new tag
	        if (!_mustReorder && !tag // with no-reorder we just update the old tags
	         || _mustReorder && ! ~oldPos || !tag // by default we always try to reorder the DOM elements
	        ) {

	            tag = new Tag(impl, {
	              parent: parent,
	              isLoop: true,
	              hasImpl: !!__tagImpl[tagName],
	              root: useRoot ? root : dom.cloneNode(),
	              item: item
	            }, dom.innerHTML);

	            tag.mount();

	            if (isVirtual) tag._root = tag.root.firstChild; // save reference for further moves or inserts
	            // this tag must be appended
	            if (i == tags.length || !tags[i]) {
	              // fix 1581
	              if (isVirtual) addVirtual(tag, frag);else frag.appendChild(tag.root);
	            }
	            // this tag must be insert
	            else {
	                if (isVirtual) addVirtual(tag, root, tags[i]);else root.insertBefore(tag.root, tags[i].root); // #1374 some browsers reset selected here
	                oldItems.splice(i, 0, item);
	              }

	            tags.splice(i, 0, tag);
	            pos = i; // handled here so no move
	          } else tag.update(item, true);

	        // reorder the tag if it's not located in its previous position
	        if (pos !== i && _mustReorder && tags[i] // fix 1581 unable to reproduce it in a test!
	        ) {
	            // update the DOM
	            if (isVirtual) moveVirtual(tag, root, tags[i], dom.childNodes.length);else root.insertBefore(tag.root, tags[i].root);
	            // update the position attribute if it exists
	            if (expr.pos) tag[expr.pos] = i;
	            // move the old tag instance
	            tags.splice(i, 0, tags.splice(pos, 1)[0]);
	            // move the old item
	            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
	            // if the loop tags are not custom
	            // we need to move all their custom tags into the right position
	            if (!child && tag.tags) moveNestedTags(tag, i);
	          }

	        // cache the original item to use it in the events bound to this node
	        // and its children
	        tag._item = item;
	        // cache the real parent tag internally
	        defineProperty(tag, '_parent', parent);
	      }

	      // remove the redundant tags
	      unmountRedundant(items, tags);

	      // insert the new nodes
	      if (isOption) {
	        root.appendChild(frag);

	        // #1374 FireFox bug in <option selected={expression}>
	        if (FIREFOX && !root.multiple) {
	          for (var n = 0; n < root.length; n++) {
	            if (root[n].__riot1374) {
	              root.selectedIndex = n; // clear other options
	              delete root[n].__riot1374;
	              break;
	            }
	          }
	        }
	      } else root.insertBefore(frag, ref);

	      // set the 'tags' property of the parent tag
	      // if child is 'undefined' it means that we don't need to set this property
	      // for example:
	      // we don't need store the `myTag.tags['div']` property if we are looping a div tag
	      // but we need to track the `myTag.tags['child']` property looping a custom child node named `child`
	      if (child) parent.tags[tagName] = tags;

	      // clone the items array
	      oldItems = items.slice();
	    });
	  }
	  /**
	   * Object that will be used to inject and manage the css of every tag instance
	   */
	  var styleManager = function (_riot) {

	    if (!window) return { // skip injection on the server
	      add: function add() {},
	      inject: function inject() {}
	    };

	    var styleNode = function () {
	      // create a new style element with the correct type
	      var newNode = mkEl('style');
	      setAttr(newNode, 'type', 'text/css');

	      // replace any user node or insert the new one into the head
	      var userNode = $('style[type=riot]');
	      if (userNode) {
	        if (userNode.id) newNode.id = userNode.id;
	        userNode.parentNode.replaceChild(newNode, userNode);
	      } else document.getElementsByTagName('head')[0].appendChild(newNode);

	      return newNode;
	    }();

	    // Create cache and shortcut to the correct property
	    var cssTextProp = styleNode.styleSheet,
	        stylesToInject = '';

	    // Expose the style node in a non-modificable property
	    Object.defineProperty(_riot, 'styleNode', {
	      value: styleNode,
	      writable: true
	    });

	    /**
	     * Public api
	     */
	    return {
	      /**
	       * Save a tag style to be later injected into DOM
	       * @param   { String } css [description]
	       */
	      add: function add(css) {
	        stylesToInject += css;
	      },
	      /**
	       * Inject all previously saved tag styles into DOM
	       * innerHTML seems slow: http://jsperf.com/riot-insert-style
	       */
	      inject: function inject() {
	        if (stylesToInject) {
	          if (cssTextProp) cssTextProp.cssText += stylesToInject;else styleNode.innerHTML += stylesToInject;
	          stylesToInject = '';
	        }
	      }
	    };
	  }(riot);

	  function parseNamedElements(root, tag, childTags, forceParsingNamed) {

	    walk(root, function (dom) {
	      if (dom.nodeType == 1) {
	        dom.isLoop = dom.isLoop || dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each') ? 1 : 0;

	        // custom child tag
	        if (childTags) {
	          var child = getTag(dom);

	          if (child && !dom.isLoop) childTags.push(initChildTag(child, { root: dom, parent: tag }, dom.innerHTML, tag));
	        }

	        if (!dom.isLoop || forceParsingNamed) setNamed(dom, tag, []);
	      }
	    });
	  }

	  function parseExpressions(root, tag, expressions) {

	    function addExpr(dom, val, extra) {
	      if (tmpl.hasExpr(val)) {
	        expressions.push(extend({ dom: dom, expr: val }, extra));
	      }
	    }

	    walk(root, function (dom) {
	      var type = dom.nodeType,
	          attr;

	      // text node
	      if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue);
	      if (type != 1) return;

	      /* element */

	      // loop
	      attr = getAttr(dom, 'each');

	      if (attr) {
	        _each(dom, tag, attr);return false;
	      }

	      // attribute expressions
	      each(dom.attributes, function (attr) {
	        var name = attr.name,
	            bool = name.split('__')[1];

	        addExpr(dom, attr.value, { attr: bool || name, bool: bool });
	        if (bool) {
	          remAttr(dom, name);return false;
	        }
	      });

	      // skip custom tags
	      if (getTag(dom)) return false;
	    });
	  }
	  function Tag(impl, conf, innerHTML) {

	    var self = riot.observable(this),
	        opts = inherit(conf.opts) || {},
	        parent = conf.parent,
	        isLoop = conf.isLoop,
	        hasImpl = conf.hasImpl,
	        item = cleanUpData(conf.item),
	        expressions = [],
	        childTags = [],
	        root = conf.root,
	        tagName = root.tagName.toLowerCase(),
	        attr = {},
	        propsInSyncWithParent = [],
	        dom;

	    // only call unmount if we have a valid __tagImpl (has name property)
	    if (impl.name && root._tag) root._tag.unmount(true);

	    // not yet mounted
	    this.isMounted = false;
	    root.isLoop = isLoop;

	    // keep a reference to the tag just created
	    // so we will be able to mount this tag multiple times
	    root._tag = this;

	    // create a unique id to this tag
	    // it could be handy to use it also to improve the virtual dom rendering speed
	    defineProperty(this, '_riot_id', ++__uid); // base 1 allows test !t._riot_id

	    extend(this, { parent: parent, root: root, opts: opts, tags: {} }, item);

	    // grab attributes
	    each(root.attributes, function (el) {
	      var val = el.value;
	      // remember attributes with expressions only
	      if (tmpl.hasExpr(val)) attr[el.name] = val;
	    });

	    dom = mkdom(impl.tmpl, innerHTML);

	    // options
	    function updateOpts() {
	      var ctx = hasImpl && isLoop ? self : parent || self;

	      // update opts from current DOM attributes
	      each(root.attributes, function (el) {
	        var val = el.value;
	        opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val;
	      });
	      // recover those with expressions
	      each(Object.keys(attr), function (name) {
	        opts[toCamel(name)] = tmpl(attr[name], ctx);
	      });
	    }

	    function normalizeData(data) {
	      for (var key in item) {
	        if (_typeof(self[key]) !== T_UNDEF && isWritable(self, key)) self[key] = data[key];
	      }
	    }

	    function inheritFromParent() {
	      if (!self.parent || !isLoop) return;
	      each(Object.keys(self.parent), function (k) {
	        // some properties must be always in sync with the parent tag
	        var mustSync = !contains(RESERVED_WORDS_BLACKLIST, k) && contains(propsInSyncWithParent, k);
	        if (_typeof(self[k]) === T_UNDEF || mustSync) {
	          // track the property to keep in sync
	          // so we can keep it updated
	          if (!mustSync) propsInSyncWithParent.push(k);
	          self[k] = self.parent[k];
	        }
	      });
	    }

	    /**
	     * Update the tag expressions and options
	     * @param   { * }  data - data we want to use to extend the tag properties
	     * @param   { Boolean } isInherited - is this update coming from a parent tag?
	     * @returns { self }
	     */
	    defineProperty(this, 'update', function (data, isInherited) {

	      // make sure the data passed will not override
	      // the component core methods
	      data = cleanUpData(data);
	      // inherit properties from the parent
	      inheritFromParent();
	      // normalize the tag properties in case an item object was initially passed
	      if (data && isObject(item)) {
	        normalizeData(data);
	        item = data;
	      }
	      extend(self, data);
	      updateOpts();
	      self.trigger('update', data);
	      update(expressions, self);

	      // the updated event will be triggered
	      // once the DOM will be ready and all the re-flows are completed
	      // this is useful if you want to get the "real" root properties
	      // 4 ex: root.offsetWidth ...
	      if (isInherited && self.parent)
	        // closes #1599
	        self.parent.one('updated', function () {
	          self.trigger('updated');
	        });else rAF(function () {
	        self.trigger('updated');
	      });

	      return this;
	    });

	    defineProperty(this, 'mixin', function () {
	      each(arguments, function (mix) {
	        var instance;

	        mix = (typeof mix === 'undefined' ? 'undefined' : _typeof(mix)) === T_STRING ? riot.mixin(mix) : mix;

	        // check if the mixin is a function
	        if (isFunction(mix)) {
	          // create the new mixin instance
	          instance = new mix();
	          // save the prototype to loop it afterwards
	          mix = mix.prototype;
	        } else instance = mix;

	        // loop the keys in the function prototype or the all object keys
	        each(Object.getOwnPropertyNames(mix), function (key) {
	          // bind methods to self
	          if (key != 'init') self[key] = isFunction(instance[key]) ? instance[key].bind(self) : instance[key];
	        });

	        // init method will be called automatically
	        if (instance.init) instance.init.bind(self)();
	      });
	      return this;
	    });

	    defineProperty(this, 'mount', function () {

	      updateOpts();

	      // add global mixin
	      var globalMixin = riot.mixin(GLOBAL_MIXIN);
	      if (globalMixin) self.mixin(globalMixin);

	      // initialiation
	      if (impl.fn) impl.fn.call(self, opts);

	      // parse layout after init. fn may calculate args for nested custom tags
	      parseExpressions(dom, self, expressions);

	      // mount the child tags
	      toggle(true);

	      // update the root adding custom attributes coming from the compiler
	      // it fixes also #1087
	      if (impl.attrs) walkAttributes(impl.attrs, function (k, v) {
	        setAttr(root, k, v);
	      });
	      if (impl.attrs || hasImpl) parseExpressions(self.root, self, expressions);

	      if (!self.parent || isLoop) self.update(item);

	      // internal use only, fixes #403
	      self.trigger('before-mount');

	      if (isLoop && !hasImpl) {
	        // update the root attribute for the looped elements
	        root = dom.firstChild;
	      } else {
	        while (dom.firstChild) {
	          root.appendChild(dom.firstChild);
	        }if (root.stub) root = parent.root;
	      }

	      defineProperty(self, 'root', root);

	      // parse the named dom nodes in the looped child
	      // adding them to the parent as well
	      if (isLoop) parseNamedElements(self.root, self.parent, null, true);

	      // if it's not a child tag we can trigger its mount event
	      if (!self.parent || self.parent.isMounted) {
	        self.isMounted = true;
	        self.trigger('mount');
	      }
	      // otherwise we need to wait that the parent event gets triggered
	      else self.parent.one('mount', function () {
	          // avoid to trigger the `mount` event for the tags
	          // not visible included in an if statement
	          if (!isInStub(self.root)) {
	            self.parent.isMounted = self.isMounted = true;
	            self.trigger('mount');
	          }
	        });
	    });

	    defineProperty(this, 'unmount', function (keepRootTag) {
	      var el = root,
	          p = el.parentNode,
	          ptag,
	          tagIndex = __virtualDom.indexOf(self);

	      self.trigger('before-unmount');

	      // remove this tag instance from the global virtualDom variable
	      if (~tagIndex) __virtualDom.splice(tagIndex, 1);

	      if (p) {

	        if (parent) {
	          ptag = getImmediateCustomParentTag(parent);
	          // remove this tag from the parent tags object
	          // if there are multiple nested tags with same name..
	          // remove this element form the array
	          if (isArray(ptag.tags[tagName])) each(ptag.tags[tagName], function (tag, i) {
	            if (tag._riot_id == self._riot_id) ptag.tags[tagName].splice(i, 1);
	          });else
	            // otherwise just delete the tag instance
	            ptag.tags[tagName] = undefined;
	        } else while (el.firstChild) {
	          el.removeChild(el.firstChild);
	        }if (!keepRootTag) p.removeChild(el);else {
	          // the riot-tag and the data-is attributes aren't needed anymore, remove them
	          remAttr(p, RIOT_TAG_IS);
	          remAttr(p, RIOT_TAG); // this will be removed in riot 3.0.0
	        }
	      }

	      if (this._virts) {
	        each(this._virts, function (v) {
	          if (v.parentNode) v.parentNode.removeChild(v);
	        });
	      }

	      self.trigger('unmount');
	      toggle();
	      self.off('*');
	      self.isMounted = false;
	      delete root._tag;
	    });

	    // proxy function to bind updates
	    // dispatched from a parent tag
	    function onChildUpdate(data) {
	      self.update(data, true);
	    }

	    function toggle(isMount) {

	      // mount/unmount children
	      each(childTags, function (child) {
	        child[isMount ? 'mount' : 'unmount']();
	      });

	      // listen/unlisten parent (events flow one way from parent to children)
	      if (!parent) return;
	      var evt = isMount ? 'on' : 'off';

	      // the loop tags will be always in sync with the parent automatically
	      if (isLoop) parent[evt]('unmount', self.unmount);else {
	        parent[evt]('update', onChildUpdate)[evt]('unmount', self.unmount);
	      }
	    }

	    // named elements available for fn
	    parseNamedElements(dom, this, childTags);
	  }
	  /**
	   * Attach an event to a DOM node
	   * @param { String } name - event name
	   * @param { Function } handler - event callback
	   * @param { Object } dom - dom node
	   * @param { Tag } tag - tag instance
	   */
	  function setEventHandler(name, handler, dom, tag) {

	    dom[name] = function (e) {

	      var ptag = tag._parent,
	          item = tag._item,
	          el;

	      if (!item) while (ptag && !item) {
	        item = ptag._item;
	        ptag = ptag._parent;
	      }

	      // cross browser event fix
	      e = e || window.event;

	      // override the event properties
	      if (isWritable(e, 'currentTarget')) e.currentTarget = dom;
	      if (isWritable(e, 'target')) e.target = e.srcElement;
	      if (isWritable(e, 'which')) e.which = e.charCode || e.keyCode;

	      e.item = item;

	      // prevent default behaviour (by default)
	      if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
	        if (e.preventDefault) e.preventDefault();
	        e.returnValue = false;
	      }

	      if (!e.preventUpdate) {
	        el = item ? getImmediateCustomParentTag(ptag) : tag;
	        el.update();
	      }
	    };
	  }

	  /**
	   * Insert a DOM node replacing another one (used by if- attribute)
	   * @param   { Object } root - parent node
	   * @param   { Object } node - node replaced
	   * @param   { Object } before - node added
	   */
	  function insertTo(root, node, before) {
	    if (!root) return;
	    root.insertBefore(before, node);
	    root.removeChild(node);
	  }

	  /**
	   * Update the expressions in a Tag instance
	   * @param   { Array } expressions - expression that must be re evaluated
	   * @param   { Tag } tag - tag instance
	   */
	  function update(expressions, tag) {

	    each(expressions, function (expr, i) {

	      var dom = expr.dom,
	          attrName = expr.attr,
	          value = tmpl(expr.expr, tag),
	          parent = expr.dom.parentNode;

	      if (expr.bool) {
	        value = !!value;
	      } else if (value == null) {
	        value = '';
	      }

	      // #1638: regression of #1612, update the dom only if the value of the
	      // expression was changed
	      if (expr.value === value) {
	        return;
	      }
	      expr.value = value;

	      // textarea and text nodes has no attribute name
	      if (!attrName) {
	        // about #815 w/o replace: the browser converts the value to a string,
	        // the comparison by "==" does too, but not in the server
	        value += '';
	        // test for parent avoids error with invalid assignment to nodeValue
	        if (parent) {
	          if (parent.tagName === 'TEXTAREA') {
	            parent.value = value; // #1113
	            if (!IE_VERSION) dom.nodeValue = value; // #1625 IE throws here, nodeValue
	          } // will be available on 'updated'
	          else dom.nodeValue = value;
	        }
	        return;
	      }

	      // ~~#1612: look for changes in dom.value when updating the value~~
	      if (attrName === 'value') {
	        dom.value = value;
	        return;
	      }

	      // remove original attribute
	      remAttr(dom, attrName);

	      // event handler
	      if (isFunction(value)) {
	        setEventHandler(attrName, value, dom, tag);

	        // if- conditional
	      } else if (attrName == 'if') {
	          var stub = expr.stub,
	              add = function add() {
	            insertTo(stub.parentNode, stub, dom);
	          },
	              remove = function remove() {
	            insertTo(dom.parentNode, dom, stub);
	          };

	          // add to DOM
	          if (value) {
	            if (stub) {
	              add();
	              dom.inStub = false;
	              // avoid to trigger the mount event if the tags is not visible yet
	              // maybe we can optimize this avoiding to mount the tag at all
	              if (!isInStub(dom)) {
	                walk(dom, function (el) {
	                  if (el._tag && !el._tag.isMounted) el._tag.isMounted = !!el._tag.trigger('mount');
	                });
	              }
	            }
	            // remove from DOM
	          } else {
	              stub = expr.stub = stub || document.createTextNode('');
	              // if the parentNode is defined we can easily replace the tag
	              if (dom.parentNode) remove();
	              // otherwise we need to wait the updated event
	              else (tag.parent || tag).one('updated', remove);

	              dom.inStub = true;
	            }
	          // show / hide
	        } else if (attrName === 'show') {
	            dom.style.display = value ? '' : 'none';
	          } else if (attrName === 'hide') {
	            dom.style.display = value ? 'none' : '';
	          } else if (expr.bool) {
	            dom[attrName] = value;
	            if (value) setAttr(dom, attrName, attrName);
	            if (FIREFOX && attrName === 'selected' && dom.tagName === 'OPTION') {
	              dom.__riot1374 = value; // #1374
	            }
	          } else if (value === 0 || value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== T_OBJECT) {
	              // <img src="{ expr }">
	              if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
	                attrName = attrName.slice(RIOT_PREFIX.length);
	              }
	              setAttr(dom, attrName, value);
	            }
	    });
	  }
	  /**
	   * Specialized function for looping an array-like collection with `each={}`
	   * @param   { Array } els - collection of items
	   * @param   {Function} fn - callback function
	   * @returns { Array } the array looped
	   */
	  function each(els, fn) {
	    var len = els ? els.length : 0;

	    for (var i = 0, el; i < len; i++) {
	      el = els[i];
	      // return false -> current item was removed by fn during the loop
	      if (el != null && fn(el, i) === false) i--;
	    }
	    return els;
	  }

	  /**
	   * Detect if the argument passed is a function
	   * @param   { * } v - whatever you want to pass to this function
	   * @returns { Boolean } -
	   */
	  function isFunction(v) {
	    return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === T_FUNCTION || false; // avoid IE problems
	  }

	  /**
	   * Detect if the argument passed is an object, exclude null.
	   * NOTE: Use isObject(x) && !isArray(x) to excludes arrays.
	   * @param   { * } v - whatever you want to pass to this function
	   * @returns { Boolean } -
	   */
	  function isObject(v) {
	    return v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === T_OBJECT; // typeof null is 'object'
	  }

	  /**
	   * Remove any DOM attribute from a node
	   * @param   { Object } dom - DOM node we want to update
	   * @param   { String } name - name of the property we want to remove
	   */
	  function remAttr(dom, name) {
	    dom.removeAttribute(name);
	  }

	  /**
	   * Convert a string containing dashes to camel case
	   * @param   { String } string - input string
	   * @returns { String } my-string -> myString
	   */
	  function toCamel(string) {
	    return string.replace(/-(\w)/g, function (_, c) {
	      return c.toUpperCase();
	    });
	  }

	  /**
	   * Get the value of any DOM attribute on a node
	   * @param   { Object } dom - DOM node we want to parse
	   * @param   { String } name - name of the attribute we want to get
	   * @returns { String | undefined } name of the node attribute whether it exists
	   */
	  function getAttr(dom, name) {
	    return dom.getAttribute(name);
	  }

	  /**
	   * Set any DOM attribute
	   * @param { Object } dom - DOM node we want to update
	   * @param { String } name - name of the property we want to set
	   * @param { String } val - value of the property we want to set
	   */
	  function setAttr(dom, name, val) {
	    dom.setAttribute(name, val);
	  }

	  /**
	   * Detect the tag implementation by a DOM node
	   * @param   { Object } dom - DOM node we need to parse to get its tag implementation
	   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
	   */
	  function getTag(dom) {
	    return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG_IS) || getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()];
	  }
	  /**
	   * Add a child tag to its parent into the `tags` object
	   * @param   { Object } tag - child tag instance
	   * @param   { String } tagName - key where the new tag will be stored
	   * @param   { Object } parent - tag instance where the new child tag will be included
	   */
	  function addChildTag(tag, tagName, parent) {
	    var cachedTag = parent.tags[tagName];

	    // if there are multiple children tags having the same name
	    if (cachedTag) {
	      // if the parent tags property is not yet an array
	      // create it adding the first cached tag
	      if (!isArray(cachedTag))
	        // don't add the same tag twice
	        if (cachedTag !== tag) parent.tags[tagName] = [cachedTag];
	      // add the new nested tag to the array
	      if (!contains(parent.tags[tagName], tag)) parent.tags[tagName].push(tag);
	    } else {
	      parent.tags[tagName] = tag;
	    }
	  }

	  /**
	   * Move the position of a custom tag in its parent tag
	   * @param   { Object } tag - child tag instance
	   * @param   { String } tagName - key where the tag was stored
	   * @param   { Number } newPos - index where the new tag will be stored
	   */
	  function moveChildTag(tag, tagName, newPos) {
	    var parent = tag.parent,
	        tags;
	    // no parent no move
	    if (!parent) return;

	    tags = parent.tags[tagName];

	    if (isArray(tags)) tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0]);else addChildTag(tag, tagName, parent);
	  }

	  /**
	   * Create a new child tag including it correctly into its parent
	   * @param   { Object } child - child tag implementation
	   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
	   * @param   { String } innerHTML - inner html of the child node
	   * @param   { Object } parent - instance of the parent tag including the child custom tag
	   * @returns { Object } instance of the new child tag just created
	   */
	  function initChildTag(child, opts, innerHTML, parent) {
	    var tag = new Tag(child, opts, innerHTML),
	        tagName = getTagName(opts.root),
	        ptag = getImmediateCustomParentTag(parent);
	    // fix for the parent attribute in the looped elements
	    tag.parent = ptag;
	    // store the real parent tag
	    // in some cases this could be different from the custom parent tag
	    // for example in nested loops
	    tag._parent = parent;

	    // add this tag to the custom parent tag
	    addChildTag(tag, tagName, ptag);
	    // and also to the real parent tag
	    if (ptag !== parent) addChildTag(tag, tagName, parent);
	    // empty the child node once we got its template
	    // to avoid that its children get compiled multiple times
	    opts.root.innerHTML = '';

	    return tag;
	  }

	  /**
	   * Loop backward all the parents tree to detect the first custom parent tag
	   * @param   { Object } tag - a Tag instance
	   * @returns { Object } the instance of the first custom parent tag found
	   */
	  function getImmediateCustomParentTag(tag) {
	    var ptag = tag;
	    while (!getTag(ptag.root)) {
	      if (!ptag.parent) break;
	      ptag = ptag.parent;
	    }
	    return ptag;
	  }

	  /**
	   * Helper function to set an immutable property
	   * @param   { Object } el - object where the new property will be set
	   * @param   { String } key - object key where the new property will be stored
	   * @param   { * } value - value of the new property
	  * @param   { Object } options - set the propery overriding the default options
	   * @returns { Object } - the initial object
	   */
	  function defineProperty(el, key, value, options) {
	    Object.defineProperty(el, key, extend({
	      value: value,
	      enumerable: false,
	      writable: false,
	      configurable: true
	    }, options));
	    return el;
	  }

	  /**
	   * Get the tag name of any DOM node
	   * @param   { Object } dom - DOM node we want to parse
	   * @returns { String } name to identify this dom node in riot
	   */
	  function getTagName(dom) {
	    var child = getTag(dom),
	        namedTag = getAttr(dom, 'name'),
	        tagName = namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();

	    return tagName;
	  }

	  /**
	   * Extend any object with other properties
	   * @param   { Object } src - source object
	   * @returns { Object } the resulting extended object
	   *
	   * var obj = { foo: 'baz' }
	   * extend(obj, {bar: 'bar', foo: 'bar'})
	   * console.log(obj) => {bar: 'bar', foo: 'bar'}
	   *
	   */
	  function extend(src) {
	    var obj,
	        args = arguments;
	    for (var i = 1; i < args.length; ++i) {
	      if (obj = args[i]) {
	        for (var key in obj) {
	          // check if this property of the source object could be overridden
	          if (isWritable(src, key)) src[key] = obj[key];
	        }
	      }
	    }
	    return src;
	  }

	  /**
	   * Check whether an array contains an item
	   * @param   { Array } arr - target array
	   * @param   { * } item - item to test
	   * @returns { Boolean } Does 'arr' contain 'item'?
	   */
	  function contains(arr, item) {
	    return ~arr.indexOf(item);
	  }

	  /**
	   * Check whether an object is a kind of array
	   * @param   { * } a - anything
	   * @returns {Boolean} is 'a' an array?
	   */
	  function isArray(a) {
	    return Array.isArray(a) || a instanceof Array;
	  }

	  /**
	   * Detect whether a property of an object could be overridden
	   * @param   { Object }  obj - source object
	   * @param   { String }  key - object property
	   * @returns { Boolean } is this property writable?
	   */
	  function isWritable(obj, key) {
	    var props = Object.getOwnPropertyDescriptor(obj, key);
	    return _typeof(obj[key]) === T_UNDEF || props && props.writable;
	  }

	  /**
	   * With this function we avoid that the internal Tag methods get overridden
	   * @param   { Object } data - options we want to use to extend the tag instance
	   * @returns { Object } clean object without containing the riot internal reserved words
	   */
	  function cleanUpData(data) {
	    if (!(data instanceof Tag) && !(data && _typeof(data.trigger) == T_FUNCTION)) return data;

	    var o = {};
	    for (var key in data) {
	      if (!contains(RESERVED_WORDS_BLACKLIST, key)) o[key] = data[key];
	    }
	    return o;
	  }

	  /**
	   * Walk down recursively all the children tags starting dom node
	   * @param   { Object }   dom - starting node where we will start the recursion
	   * @param   { Function } fn - callback to transform the child node just found
	   */
	  function walk(dom, fn) {
	    if (dom) {
	      // stop the recursion
	      if (fn(dom) === false) return;else {
	        dom = dom.firstChild;

	        while (dom) {
	          walk(dom, fn);
	          dom = dom.nextSibling;
	        }
	      }
	    }
	  }

	  /**
	   * Minimize risk: only zero or one _space_ between attr & value
	   * @param   { String }   html - html string we want to parse
	   * @param   { Function } fn - callback function to apply on any attribute found
	   */
	  function walkAttributes(html, fn) {
	    var m,
	        re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;

	    while (m = re.exec(html)) {
	      fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
	    }
	  }

	  /**
	   * Check whether a DOM node is in stub mode, useful for the riot 'if' directive
	   * @param   { Object }  dom - DOM node we want to parse
	   * @returns { Boolean } -
	   */
	  function isInStub(dom) {
	    while (dom) {
	      if (dom.inStub) return true;
	      dom = dom.parentNode;
	    }
	    return false;
	  }

	  /**
	   * Create a generic DOM node
	   * @param   { String } name - name of the DOM node we want to create
	   * @returns { Object } DOM node just created
	   */
	  function mkEl(name) {
	    return document.createElement(name);
	  }

	  /**
	   * Shorter and fast way to select multiple nodes in the DOM
	   * @param   { String } selector - DOM selector
	   * @param   { Object } ctx - DOM node where the targets of our search will is located
	   * @returns { Object } dom nodes found
	   */
	  function $$(selector, ctx) {
	    return (ctx || document).querySelectorAll(selector);
	  }

	  /**
	   * Shorter and fast way to select a single node in the DOM
	   * @param   { String } selector - unique dom selector
	   * @param   { Object } ctx - DOM node where the target of our search will is located
	   * @returns { Object } dom node found
	   */
	  function $(selector, ctx) {
	    return (ctx || document).querySelector(selector);
	  }

	  /**
	   * Simple object prototypal inheritance
	   * @param   { Object } parent - parent object
	   * @returns { Object } child instance
	   */
	  function inherit(parent) {
	    function Child() {}
	    Child.prototype = parent;
	    return new Child();
	  }

	  /**
	   * Get the name property needed to identify a DOM node in riot
	   * @param   { Object } dom - DOM node we need to parse
	   * @returns { String | undefined } give us back a string to identify this dom node
	   */
	  function getNamedKey(dom) {
	    return getAttr(dom, 'id') || getAttr(dom, 'name');
	  }

	  /**
	   * Set the named properties of a tag element
	   * @param { Object } dom - DOM node we need to parse
	   * @param { Object } parent - tag instance where the named dom element will be eventually added
	   * @param { Array } keys - list of all the tag instance properties
	   */
	  function setNamed(dom, parent, keys) {
	    // get the key value we want to add to the tag instance
	    var key = getNamedKey(dom),
	        isArr,

	    // add the node detected to a tag instance using the named property
	    add = function add(value) {
	      // avoid to override the tag properties already set
	      if (contains(keys, key)) return;
	      // check whether this value is an array
	      isArr = isArray(value);
	      // if the key was never set
	      if (!value)
	        // set it once on the tag instance
	        parent[key] = dom;
	        // if it was an array and not yet set
	      else if (!isArr || isArr && !contains(value, dom)) {
	          // add the dom node into the array
	          if (isArr) value.push(dom);else parent[key] = [value, dom];
	        }
	    };

	    // skip the elements with no named properties
	    if (!key) return;

	    // check whether this key has been already evaluated
	    if (tmpl.hasExpr(key))
	      // wait the first updated event only once
	      parent.one('mount', function () {
	        key = getNamedKey(dom);
	        add(parent[key]);
	      });else add(parent[key]);
	  }

	  /**
	   * Faster String startsWith alternative
	   * @param   { String } src - source string
	   * @param   { String } str - test string
	   * @returns { Boolean } -
	   */
	  function startsWith(src, str) {
	    return src.slice(0, str.length) === str;
	  }

	  /**
	   * requestAnimationFrame function
	   * Adapted from https://gist.github.com/paulirish/1579671, license MIT
	   */
	  var rAF = function (w) {
	    var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;

	    if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {
	      // buggy iOS6
	      var lastTime = 0;

	      raf = function raf(cb) {
	        var nowtime = Date.now(),
	            timeout = Math.max(16 - (nowtime - lastTime), 0);
	        setTimeout(function () {
	          cb(lastTime = nowtime + timeout);
	        }, timeout);
	      };
	    }
	    return raf;
	  }(window || {});

	  /**
	   * Mount a tag creating new Tag instance
	   * @param   { Object } root - dom node where the tag will be mounted
	   * @param   { String } tagName - name of the riot tag we want to mount
	   * @param   { Object } opts - options to pass to the Tag instance
	   * @returns { Tag } a new Tag instance
	   */
	  function mountTo(root, tagName, opts) {
	    var tag = __tagImpl[tagName],

	    // cache the inner HTML to fix #855
	    innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;

	    // clear the inner html
	    root.innerHTML = '';

	    if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML);

	    if (tag && tag.mount) {
	      tag.mount();
	      // add this tag to the virtualDom variable
	      if (!contains(__virtualDom, tag)) __virtualDom.push(tag);
	    }

	    return tag;
	  }
	  /**
	   * Riot public api
	   */

	  // share methods for other riot parts, e.g. compiler
	  riot.util = { brackets: brackets, tmpl: tmpl };

	  /**
	   * Create a mixin that could be globally shared across all the tags
	   */
	  riot.mixin = function () {
	    var mixins = {};

	    /**
	     * Create/Return a mixin by its name
	     * @param   { String } name - mixin name (global mixin if missing)
	     * @param   { Object } mixin - mixin logic
	     * @returns { Object } the mixin logic
	     */
	    return function (name, mixin) {
	      if (isObject(name)) {
	        mixin = name;
	        mixins[GLOBAL_MIXIN] = extend(mixins[GLOBAL_MIXIN] || {}, mixin);
	        return;
	      }

	      if (!mixin) return mixins[name];
	      mixins[name] = mixin;
	    };
	  }();

	  /**
	   * Create a new riot tag implementation
	   * @param   { String }   name - name/id of the new riot tag
	   * @param   { String }   html - tag template
	   * @param   { String }   css - custom tag css
	   * @param   { String }   attrs - root tag attributes
	   * @param   { Function } fn - user function
	   * @returns { String } name/id of the tag just created
	   */
	  riot.tag = function (name, html, css, attrs, fn) {
	    if (isFunction(attrs)) {
	      fn = attrs;
	      if (/^[\w\-]+\s?=/.test(css)) {
	        attrs = css;
	        css = '';
	      } else attrs = '';
	    }
	    if (css) {
	      if (isFunction(css)) fn = css;else styleManager.add(css);
	    }
	    name = name.toLowerCase();
	    __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn };
	    return name;
	  };

	  /**
	   * Create a new riot tag implementation (for use by the compiler)
	   * @param   { String }   name - name/id of the new riot tag
	   * @param   { String }   html - tag template
	   * @param   { String }   css - custom tag css
	   * @param   { String }   attrs - root tag attributes
	   * @param   { Function } fn - user function
	   * @returns { String } name/id of the tag just created
	   */
	  riot.tag2 = function (name, html, css, attrs, fn) {
	    if (css) styleManager.add(css);
	    //if (bpair) riot.settings.brackets = bpair
	    __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn };
	    return name;
	  };

	  /**
	   * Mount a tag using a specific tag implementation
	   * @param   { String } selector - tag DOM selector
	   * @param   { String } tagName - tag implementation name
	   * @param   { Object } opts - tag logic
	   * @returns { Array } new tags instances
	   */
	  riot.mount = function (selector, tagName, opts) {

	    var els,
	        allTags,
	        tags = [];

	    // helper functions

	    function addRiotTags(arr) {
	      var list = '';
	      each(arr, function (e) {
	        if (!/[^-\w]/.test(e)) {
	          e = e.trim().toLowerCase();
	          list += ',[' + RIOT_TAG_IS + '="' + e + '"],[' + RIOT_TAG + '="' + e + '"]';
	        }
	      });
	      return list;
	    }

	    function selectAllTags() {
	      var keys = Object.keys(__tagImpl);
	      return keys + addRiotTags(keys);
	    }

	    function pushTags(root) {
	      if (root.tagName) {
	        var riotTag = getAttr(root, RIOT_TAG_IS) || getAttr(root, RIOT_TAG);

	        // have tagName? force riot-tag to be the same
	        if (tagName && riotTag !== tagName) {
	          riotTag = tagName;
	          setAttr(root, RIOT_TAG_IS, tagName);
	          setAttr(root, RIOT_TAG, tagName); // this will be removed in riot 3.0.0
	        }
	        var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);

	        if (tag) tags.push(tag);
	      } else if (root.length) {
	        each(root, pushTags); // assume nodeList
	      }
	    }

	    // ----- mount code -----

	    // inject styles into DOM
	    styleManager.inject();

	    if (isObject(tagName)) {
	      opts = tagName;
	      tagName = 0;
	    }

	    // crawl the DOM to find the tag
	    if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === T_STRING) {
	      if (selector === '*')
	        // select all the tags registered
	        // and also the tags found with the riot-tag attribute set
	        selector = allTags = selectAllTags();else
	        // or just the ones named like the selector
	        selector += addRiotTags(selector.split(/, */));

	      // make sure to pass always a selector
	      // to the querySelectorAll function
	      els = selector ? $$(selector) : [];
	    } else
	      // probably you have passed already a tag or a NodeList
	      els = selector;

	    // select all the registered and mount them inside their root elements
	    if (tagName === '*') {
	      // get all custom tags
	      tagName = allTags || selectAllTags();
	      // if the root els it's just a single tag
	      if (els.tagName) els = $$(tagName, els);else {
	        // select all the children for all the different root elements
	        var nodeList = [];
	        each(els, function (_el) {
	          nodeList.push($$(tagName, _el));
	        });
	        els = nodeList;
	      }
	      // get rid of the tagName
	      tagName = 0;
	    }

	    pushTags(els);

	    return tags;
	  };

	  /**
	   * Update all the tags instances created
	   * @returns { Array } all the tags instances
	   */
	  riot.update = function () {
	    return each(__virtualDom, function (tag) {
	      tag.update();
	    });
	  };

	  /**
	   * Export the Virtual DOM
	   */
	  riot.vdom = __virtualDom;

	  /**
	   * Export the Tag constructor
	   */
	  riot.Tag = Tag;
	  // support CommonJS, AMD & browser
	  /* istanbul ignore next */
	  if (( false ? 'undefined' : _typeof(exports)) === T_OBJECT) module.exports = riot;else if (( false ? 'undefined' : _typeof(__webpack_require__(2))) === T_FUNCTION && _typeof(__webpack_require__(3)) !== T_UNDEF) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return riot;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else window.riot = riot;
	})(typeof window != 'undefined' ? window : void 0);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _fetchMonkeyPatch = __webpack_require__(5);

	var fetch = _interopRequireWildcard(_fetchMonkeyPatch);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var _ = __webpack_require__(11);

	;(function (root, undefined) {
	    'use strict';

	    var _jQuery = root.jQuery;
	    if (_jQuery) {
	        return _jQuery;
	    }

	    var domify = function domify(obj) {
	        if (!obj) {
	            return;
	        }
	        var domApi = {

	            append: function append(str) {
	                var me = this;
	                var div = document.createElement('div');
	                div.innerHTML = str;
	                while (div.children.length > 0) {
	                    me.appendChild(div.children[0]);
	                }
	                return this;
	            },

	            css: function css(opts) {
	                if (typeof opts === 'string') {
	                    return this.style[opts];
	                }
	                for (var p in opts) {
	                    this.style[p] = opts[p];
	                }
	                return this;
	            },

	            parent: function parent() {
	                return domify(this.parentNode);
	            },

	            next: function next() {
	                return domify(this.nextSbiling);
	            },

	            remove: function remove() {
	                if (!this.parentNode) {
	                    return;
	                }
	                this.parentNode.removeChild(this);
	            },

	            addClass: function addClass(cls) {
	                if (!this.hasClass(cls)) this.className += " " + cls;
	            },

	            removeClass: function removeClass(cls) {
	                if (this.hasClass(cls)) {
	                    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	                    this.className = this.className.replace(reg, ' ');
	                }
	            },

	            hasClass: function hasClass(cls) {
	                return this.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	            },

	            outerWidth: function outerWidth() {
	                if (this.css && (this.css('marginLeft') || this.css('marginRight'))) {
	                    return this.offsetWidth + parseInt(this.css('marginLeft') || 0, 10) + parseInt(this.css('marginRight') || 0, 10);
	                }
	                return this.offsetWidth;
	            },

	            height: function height() {
	                return this.offsetHeight;
	            }
	        };
	        if (Array.isArray(obj)) {
	            obj.each = obj.forEach;
	            return obj.map(function (o) {
	                return _.mixin(o, domApi);
	            });
	        }
	        return _.mixin(obj, domApi);
	    };

	    var jQuery = function jQuery(selector) {
	        if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
	            return domify(selector);
	        }
	        var nodes = document.querySelectorAll(selector);
	        nodes = [].slice.apply(nodes);
	        return nodes.length === 1 ? domify(nodes[0]) : domify(nodes);
	    };

	    jQuery = _.mixin(jQuery, fetch);

	    root.$ = jQuery;
	})(window);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.del = exports.put = exports.post = exports.get = undefined;

	var _es6Promise = __webpack_require__(6);

	__webpack_require__(9);

	(0, _es6Promise.polyfill)();


	function post(url, json) {
	    return fetch(url, {
	        method: 'post',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify(json)
	    }).then(function (res) {
	        return checkStatus(res);
	    }).then(function (res) {
	        return parseJSON(res);
	    });
	}

	function get(url) {
	    return fetch(url, { method: 'get' }).then(function (res) {
	        return checkStatus(res);
	    }).then(function (res) {
	        return parseJSON(res);
	    });
	}

	function put(url, json) {
	    return fetch(url, {
	        method: 'put',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify(json)
	    }).then(function (res) {
	        return checkStatus(res);
	    }).then(function (res) {
	        return parseJSON(res);
	    });
	}

	function del(url) {
	    return fetch(url, { method: 'delete' }).then(function (res) {
	        return checkStatus(res);
	    }).then(function (res) {
	        return parseJSON(res);
	    });
	}

	function checkStatus(response) {
	    if (response.status >= 200 && response.status < 300) {
	        return response;
	    } else {
	        var error = new Error(response.statusText);
	        error.response = response;
	        throw error;
	    }
	}

	function parseJSON(response) {
	    try {
	        return response.json();
	    } catch (e) {
	        var error = new Error('parse json error');
	        error.response = response;
	        throw error;
	    }
	}

	exports.get = get;
	exports.post = post;
	exports.put = put;
	exports.del = del;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */

	(function () {
	  "use strict";
	  function t(t) {
	    return "function" == typeof t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
	  }function e(t) {
	    return "function" == typeof t;
	  }function n(t) {
	    W = t;
	  }function r(t) {
	    H = t;
	  }function o() {
	    return function () {
	      process.nextTick(a);
	    };
	  }function i() {
	    return function () {
	      U(a);
	    };
	  }function s() {
	    var t = 0,
	        e = new Q(a),
	        n = document.createTextNode("");return e.observe(n, { characterData: !0 }), function () {
	      n.data = t = ++t % 2;
	    };
	  }function u() {
	    var t = new MessageChannel();return t.port1.onmessage = a, function () {
	      t.port2.postMessage(0);
	    };
	  }function c() {
	    return function () {
	      setTimeout(a, 1);
	    };
	  }function a() {
	    for (var t = 0; G > t; t += 2) {
	      var e = X[t],
	          n = X[t + 1];e(n), X[t] = void 0, X[t + 1] = void 0;
	    }G = 0;
	  }function f() {
	    try {
	      var t = require,
	          e = __webpack_require__(8);return U = e.runOnLoop || e.runOnContext, i();
	    } catch (n) {
	      return c();
	    }
	  }function l(t, e) {
	    var n = this,
	        r = n._state;if (r === et && !t || r === nt && !e) return this;var o = new this.constructor(p),
	        i = n._result;if (r) {
	      var s = arguments[r - 1];H(function () {
	        C(r, o, s, i);
	      });
	    } else j(n, o, t, e);return o;
	  }function h(t) {
	    var e = this;if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.constructor === e) return t;var n = new e(p);return g(n, t), n;
	  }function p() {}function _() {
	    return new TypeError("You cannot resolve a promise with itself");
	  }function v() {
	    return new TypeError("A promises callback cannot return that same promise.");
	  }function d(t) {
	    try {
	      return t.then;
	    } catch (e) {
	      return rt.error = e, rt;
	    }
	  }function y(t, e, n, r) {
	    try {
	      t.call(e, n, r);
	    } catch (o) {
	      return o;
	    }
	  }function m(t, e, n) {
	    H(function (t) {
	      var r = !1,
	          o = y(n, e, function (n) {
	        r || (r = !0, e !== n ? g(t, n) : E(t, n));
	      }, function (e) {
	        r || (r = !0, S(t, e));
	      }, "Settle: " + (t._label || " unknown promise"));!r && o && (r = !0, S(t, o));
	    }, t);
	  }function w(t, e) {
	    e._state === et ? E(t, e._result) : e._state === nt ? S(t, e._result) : j(e, void 0, function (e) {
	      g(t, e);
	    }, function (e) {
	      S(t, e);
	    });
	  }function b(t, n, r) {
	    n.constructor === t.constructor && r === Z && constructor.resolve === $ ? w(t, n) : r === rt ? S(t, rt.error) : void 0 === r ? E(t, n) : e(r) ? m(t, n, r) : E(t, n);
	  }function g(e, n) {
	    e === n ? S(e, _()) : t(n) ? b(e, n, d(n)) : E(e, n);
	  }function A(t) {
	    t._onerror && t._onerror(t._result), T(t);
	  }function E(t, e) {
	    t._state === tt && (t._result = e, t._state = et, 0 !== t._subscribers.length && H(T, t));
	  }function S(t, e) {
	    t._state === tt && (t._state = nt, t._result = e, H(A, t));
	  }function j(t, e, n, r) {
	    var o = t._subscribers,
	        i = o.length;t._onerror = null, o[i] = e, o[i + et] = n, o[i + nt] = r, 0 === i && t._state && H(T, t);
	  }function T(t) {
	    var e = t._subscribers,
	        n = t._state;if (0 !== e.length) {
	      for (var r, o, i = t._result, s = 0; s < e.length; s += 3) {
	        r = e[s], o = e[s + n], r ? C(n, r, o, i) : o(i);
	      }t._subscribers.length = 0;
	    }
	  }function P() {
	    this.error = null;
	  }function x(t, e) {
	    try {
	      return t(e);
	    } catch (n) {
	      return ot.error = n, ot;
	    }
	  }function C(t, n, r, o) {
	    var i,
	        s,
	        u,
	        c,
	        a = e(r);if (a) {
	      if (i = x(r, o), i === ot ? (c = !0, s = i.error, i = null) : u = !0, n === i) return void S(n, v());
	    } else i = o, u = !0;n._state !== tt || (a && u ? g(n, i) : c ? S(n, s) : t === et ? E(n, i) : t === nt && S(n, i));
	  }function M(t, e) {
	    try {
	      e(function (e) {
	        g(t, e);
	      }, function (e) {
	        S(t, e);
	      });
	    } catch (n) {
	      S(t, n);
	    }
	  }function O(t) {
	    return new ft(this, t).promise;
	  }function k(t) {
	    function e(t) {
	      g(o, t);
	    }function n(t) {
	      S(o, t);
	    }var r = this,
	        o = new r(p);if (!B(t)) return S(o, new TypeError("You must pass an array to race.")), o;for (var i = t.length, s = 0; o._state === tt && i > s; s++) {
	      j(r.resolve(t[s]), void 0, e, n);
	    }return o;
	  }function Y(t) {
	    var e = this,
	        n = new e(p);return S(n, t), n;
	  }function q() {
	    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
	  }function F() {
	    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	  }function D(t) {
	    this._id = ct++, this._state = void 0, this._result = void 0, this._subscribers = [], p !== t && ("function" != typeof t && q(), this instanceof D ? M(this, t) : F());
	  }function K(t, e) {
	    this._instanceConstructor = t, this.promise = new t(p), Array.isArray(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && E(this.promise, this._result))) : S(this.promise, this._validationError());
	  }function L() {
	    var t;if ("undefined" != typeof global) t = global;else if ("undefined" != typeof self) t = self;else try {
	      t = Function("return this")();
	    } catch (e) {
	      throw new Error("polyfill failed because global object is unavailable in this environment");
	    }var n = t.Promise;(!n || "[object Promise]" !== Object.prototype.toString.call(n.resolve()) || n.cast) && (t.Promise = at);
	  }var N;N = Array.isArray ? Array.isArray : function (t) {
	    return "[object Array]" === Object.prototype.toString.call(t);
	  };var U,
	      W,
	      z,
	      B = N,
	      G = 0,
	      H = function H(t, e) {
	    X[G] = t, X[G + 1] = e, G += 2, 2 === G && (W ? W(a) : z());
	  },
	      I = "undefined" != typeof window ? window : void 0,
	      J = I || {},
	      Q = J.MutationObserver || J.WebKitMutationObserver,
	      R = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
	      V = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
	      X = new Array(1e3);z = R ? o() : Q ? s() : V ? u() : void 0 === I && "function" == "function" ? f() : c();var Z = l,
	      $ = h,
	      tt = void 0,
	      et = 1,
	      nt = 2,
	      rt = new P(),
	      ot = new P(),
	      it = O,
	      st = k,
	      ut = Y,
	      ct = 0,
	      at = D;D.all = it, D.race = st, D.resolve = $, D.reject = ut, D._setScheduler = n, D._setAsap = r, D._asap = H, D.prototype = { constructor: D, then: Z, "catch": function _catch(t) {
	      return this.then(null, t);
	    } };var ft = K;K.prototype._validationError = function () {
	    return new Error("Array Methods must be provided an Array");
	  }, K.prototype._enumerate = function () {
	    for (var t = this.length, e = this._input, n = 0; this._state === tt && t > n; n++) {
	      this._eachEntry(e[n], n);
	    }
	  }, K.prototype._eachEntry = function (t, e) {
	    var n = this._instanceConstructor,
	        r = n.resolve;if (r === $) {
	      var o = d(t);if (o === Z && t._state !== tt) this._settledAt(t._state, e, t._result);else if ("function" != typeof o) this._remaining--, this._result[e] = t;else if (n === at) {
	        var i = new n(p);b(i, t, o), this._willSettleAt(i, e);
	      } else this._willSettleAt(new n(function (e) {
	        e(t);
	      }), e);
	    } else this._willSettleAt(r(t), e);
	  }, K.prototype._settledAt = function (t, e, n) {
	    var r = this.promise;r._state === tt && (this._remaining--, t === nt ? S(r, n) : this._result[e] = n), 0 === this._remaining && E(r, this._result);
	  }, K.prototype._willSettleAt = function (t, e) {
	    var n = this;j(t, void 0, function (t) {
	      n._settledAt(et, e, t);
	    }, function (t) {
	      n._settledAt(nt, e, t);
	    });
	  };var lt = L,
	      ht = { Promise: at, polyfill: lt }; true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return ht;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports ? module.exports = ht : "undefined" != typeof this && (this.ES6Promise = ht), lt();
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(10);
	module.exports = self.fetch.bind(self);

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };

	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	          throw new Error('unsupported BodyInit type');
	        }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this);
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }

	      var xhr = new XMLHttpRequest();

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }

	        return;
	      }

	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var util = {
	    getMemberPrice: function getMemberPrice(listPrice, type, rate) {
	        if (type === 'c') {
	            return listPrice - rate;
	        } else if (type === 'p') {
	            var price = listPrice - listPrice * rate;
	            return Math.ceil(price);
	        } else {
	            throw new Error('error discount type');
	        }
	    },
	    imgPreviewer: function imgPreviewer($container, imgs, options) {
	        var me = this;
	        var i,
	            len,
	            $ul,
	            imgWHRate,
	            imgHeight,
	            startPosX = 0,
	            startPosY = 0,
	            oldPosX = 0,
	            oldPosY = 0,
	            newPosX = 0,
	            newPosY = 0,
	            timer;
	        var currentIndex = options.currentIndex || 0,
	            currentMargin = 0;
	        var imglen = imgs.length;
	        var winw = $container.outerWidth() + 'px';
	        var winh = $container.height() + 'px';
	        var changeDis = parseInt(winw, 10) * 0.3;
	        var html = '<div class="imgPreviewer" style="position:absolute;z-index:1;top:0px;left:0px;width:' + winw + ';height:' + winh + ';overflow: hidden;background-color:black">' + '<ul class="imgPreviewerUl" style="overflow:hidden;width:' + imglen * 100 + '%;margin:0px;padding: 0px;transition:all 0.2s ease-out;">';

	        for (i = 0; i < imglen; i++) {
	            imgWHRate = imgs[i].meta.split('|')[0] / imgs[i].meta.split('|')[1];
	            imgHeight = parseInt(winw, 10) / imgWHRate;
	            html += '<li style="width:' + 100 / imglen + '%;height:' + winh + ';float:left;line-height:' + winh + '">' + '<img src=' + imgs[i].url + ' style="width:100%;height:' + imgHeight + 'px"/>' + '</li>';
	        }

	        html += '</ul>' + '<div style="width:100%;height:40px;line-height: 40px;color:white;position: absolute;bottom:0px;left: 0px;text-align: right"><div style="height:40px;width:100%;line-height: 40px;position: relative;right: 10px;">';

	        for (i = 0; i < imglen; i++) {
	            html += '<span class="picPrevIndexSpan" id="picIndexSpan' + i + '"></span>';
	        }

	        $container.append(html);

	        renderIndexSpan(currentIndex);

	        $container.css({
	            height: winh,
	            overflow: 'hidden'
	        });

	        $ul = $('.imgPreviewerUl');
	        document.querySelector('.imgPreviewerUl').addEventListener('touchstart', touchStart, false);
	        document.querySelector('.imgPreviewerUl').addEventListener('touchmove', touchMove, false);
	        document.querySelector('.imgPreviewerUl').addEventListener('touchend', touchEnd, false);
	        function touchStart(e) {
	            e.preventDefault();
	            e || (e = window.event);
	            currentMargin = parseInt($ul.css('marginLeft'), 10);
	            timer = new Date().getTime();
	            startPosX = e.touches[0].pageX;
	            startPosY = e.touches[0].pageY;
	            oldPosX = e.touches[0].pageX;
	            oldPosY = e.touches[0].pageY;
	        }
	        function touchMove(e) {
	            e.preventDefault();
	            var moveevent = e || window.event;
	            newPosX = moveevent.touches[0].pageX;
	            newPosY = moveevent.touches[0].pageY;
	            if (newPosX > oldPosX && currentIndex === 0 || newPosX < oldPosX && currentIndex === imglen - 1) {
	                return;
	            }
	            if (newPosX < oldPosX) {
	                $ul.css({
	                    'marginLeft': currentMargin - Math.abs(newPosX - startPosX) + 'px'
	                });
	            } else {
	                $ul.css({
	                    'marginLeft': currentMargin + Math.abs(newPosX - startPosX) + 'px'
	                });
	            }
	            oldPosX = newPosX;
	        }
	        function touchEnd(e) {
	            var endTime = new Date().getTime() - timer,
	                distanceX = newPosX - startPosX,
	                distanceY = newPosY - startPosY,
	                swipeLeft = newPosX - startPosX < 0;
	            if (endTime < 100 && newPosX === 0 && newPosY === 0 || endTime < 100 && Math.abs(distanceX) < 5 && Math.abs(distanceY < 5)) {
	                return;
	            }
	            if (Math.abs(distanceX) >= changeDis && swipeLeft) {
	                if (currentIndex === imglen - 1) {
	                    $ul.css({
	                        'marginLeft': '-' + currentIndex * parseInt(winw, 10) + 'px'
	                    });
	                    return;
	                }
	                currentIndex++;
	                $ul.css({
	                    'marginLeft': '-' + currentIndex * parseInt(winw, 10) + 'px'
	                });
	            } else if (Math.abs(distanceX) >= changeDis && !swipeLeft) {
	                if (currentIndex === 0) {
	                    $ul.css({
	                        'marginLeft': '0px'
	                    });
	                    return;
	                }
	                currentIndex--;
	                $ul.css({
	                    'marginLeft': '-' + currentIndex * parseInt(winw, 10) + 'px'
	                });
	            } else {
	                $ul.css({
	                    'marginLeft': '-' + currentIndex * parseInt(winw, 10) + 'px'
	                });
	            }
	            renderIndexSpan(currentIndex);
	            newPosX = 0;newPosY = 0;
	        }
	        function renderIndexSpan(index) {
	            if ($(".picPrevIndexSpan").length) {
	                $(".picPrevIndexSpan").forEach(function (o) {
	                    $(o).removeClass('picIndexSpanSelected');
	                });
	            }
	            $("#picIndexSpan" + index).addClass('picIndexSpanSelected');
	        }
	    },
	    assign: function assign() {
	        var cloneSingleValue = function cloneSingleValue(t, s) {
	            var o = {};
	            for (var ps in s) {
	                o[ps] = s[ps];
	            }
	            for (var pt in t) {
	                o[pt] = t[pt];
	            }
	            return o;
	        };

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return args.reduceRight(function (acc, curr) {
	            if (acc) return cloneSingleValue(curr, acc);
	        }, {});
	    },
	    mixin: function mixin() {
	        var cloneSingleValue = function cloneSingleValue(t, s) {
	            for (var p in s) {
	                t[p] = s[p];
	            }
	            return t;
	        };

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        return args.reduceRight(function (acc, curr) {
	            if (acc) return cloneSingleValue(curr, acc);
	        }, {});
	    },
	    nextTick: function nextTick(fn) {
	        return setTimeout(fn, 0);
	    }
	};
	if (!window._) {
	    window._ = util;
	}

	module.exports = util;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	;(function (a, b) {
	    var wx = b(a);
	    a.wx = a.jWeixin = wx;
	    module.exports = null;
	})(window, function (a, b) {
	    function c(b, c, d) {
	        a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function (a) {
	            g(b, a, d);
	        }) : j(b, d);
	    }
	    function d(b, c, d) {
	        a.WeixinJSBridge ? WeixinJSBridge.on(b, function (a) {
	            d && d.trigger && d.trigger(a), g(b, a, c);
	        }) : d ? j(b, d) : j(b, c);
	    }
	    function e(a) {
	        return a = a || {}, a.appId = z.appId, a.verifyAppId = z.appId, a.verifySignType = 'sha1', a.verifyTimestamp = z.timestamp + '', a.verifyNonceStr = z.nonceStr, a.verifySignature = z.signature, a;
	    }
	    function f(a) {
	        return {
	            timeStamp: a.timestamp + '',
	            nonceStr: a.nonceStr,
	            'package': a.package,
	            paySign: a.paySign,
	            signType: a.signType || 'SHA1'
	        };
	    }
	    function g(a, b, c) {
	        var d, e, f;
	        switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = h(a, d, c), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || '', z.debug && !c.isInnerInvoke && alert(JSON.stringify(b)), e = d.indexOf(':'), f = d.substring(e + 1)) {
	            case 'ok':
	                c.success && c.success(b);
	                break;
	            case 'cancel':
	                c.cancel && c.cancel(b);
	                break;
	            default:
	                c.fail && c.fail(b);
	        }
	        c.complete && c.complete(b);
	    }
	    function h(a, b) {
	        var d, e, f, g;
	        if (b) {
	            switch (d = b.indexOf(':'), a) {
	                case o.config:
	                    e = 'config';
	                    break;
	                case o.openProductSpecificView:
	                    e = 'openProductSpecificView';
	                    break;
	                default:
	                    e = b.substring(0, d), e = e.replace(/_/g, ' '), e = e.replace(/\b\w+\b/g, function (a) {
	                        return a.substring(0, 1).toUpperCase() + a.substring(1);
	                    }), e = e.substring(0, 1).toLowerCase() + e.substring(1), e = e.replace(/ /g, ''), -1 != e.indexOf('Wcpay') && (e = e.replace('Wcpay', 'WCPay')), f = p[e], f && (e = f);
	            }
	            g = b.substring(d + 1), 'confirm' == g && (g = 'ok'), 'failed' == g && (g = 'fail'), -1 != g.indexOf('failed_') && (g = g.substring(7)), -1 != g.indexOf('fail_') && (g = g.substring(5)), g = g.replace(/_/g, ' '), g = g.toLowerCase(), ('access denied' == g || 'no permission to execute' == g) && (g = 'permission denied'), 'config' == e && 'function not exist' == g && (g = 'ok'), b = e + ':' + g;
	        }
	        return b;
	    }
	    function i(a) {
	        var b, c, d, e;
	        if (a) {
	            for (b = 0, c = a.length; c > b; ++b) {
	                d = a[b], e = o[d], e && (a[b] = e);
	            }return a;
	        }
	    }
	    function j(a, b) {
	        if (z.debug && !b.isInnerInvoke) {
	            var c = p[a];
	            c && (a = c), b && b._complete && delete b._complete, console.log('"' + a + '",', b || '');
	        }
	    }
	    function k() {
	        if (!('6.0.2' > w || y.systemType < 0)) {
	            var b = new Image();
	            y.appId = z.appId, y.initTime = x.initEndTime - x.initStartTime, y.preVerifyTime = x.preVerifyEndTime - x.preVerifyStartTime, C.getNetworkType({
	                isInnerInvoke: !0,
	                success: function success(a) {
	                    y.networkType = a.networkType;
	                    var c = 'https://open.weixin.qq.com/sdk/report?v=' + y.version + '&o=' + y.isPreVerifyOk + '&s=' + y.systemType + '&c=' + y.clientVersion + '&a=' + y.appId + '&n=' + y.networkType + '&i=' + y.initTime + '&p=' + y.preVerifyTime + '&u=' + y.url;
	                    b.src = c;
	                }
	            });
	        }
	    }
	    function l() {
	        return new Date().getTime();
	    }
	    function m(b) {
	        t && (a.WeixinJSBridge ? b() : q.addEventListener && q.addEventListener('WeixinJSBridgeReady', b, !1));
	    }
	    function n() {
	        C.invoke || (C.invoke = function (b, c, d) {
	            a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d);
	        }, C.on = function (b, c) {
	            a.WeixinJSBridge && WeixinJSBridge.on(b, c);
	        });
	    }
	    var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
	    if (!a.jWeixin) return o = {
	        config: 'preVerifyJSAPI',
	        onMenuShareTimeline: 'menu:share:timeline',
	        onMenuShareAppMessage: 'menu:share:appmessage',
	        onMenuShareQQ: 'menu:share:qq',
	        onMenuShareWeibo: 'menu:share:weiboApp',
	        previewImage: 'imagePreview',
	        getLocation: 'geoLocation',
	        openProductSpecificView: 'openProductViewWithPid',
	        addCard: 'batchAddCard',
	        openCard: 'batchViewCard',
	        chooseWXPay: 'getBrandWCPayRequest'
	    }, p = function () {
	        var b,
	            a = {};
	        for (b in o) {
	            a[o[b]] = b;
	        }return a;
	    }(), q = window.document, r = q.title, s = navigator.userAgent.toLowerCase(), t = -1 != s.indexOf('micromessenger'), u = -1 != s.indexOf('android'), v = -1 != s.indexOf('iphone') || -1 != s.indexOf('ipad'), w = function () {
	        var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/);
	        return a ? a[1] : '';
	    }(), x = {
	        initStartTime: l(),
	        initEndTime: 0,
	        preVerifyStartTime: 0,
	        preVerifyEndTime: 0
	    }, y = {
	        version: 1,
	        appId: '',
	        initTime: 0,
	        preVerifyTime: 0,
	        networkType: '',
	        isPreVerifyOk: 1,
	        systemType: v ? 1 : u ? 2 : -1,
	        clientVersion: w,
	        url: encodeURIComponent(location.href)
	    }, z = {}, A = { _completes: [] }, B = {
	        state: 0,
	        res: {}
	    }, m(function () {
	        x.initEndTime = l();
	    }), C = {
	        config: function config(a) {
	            z = a, j('config', a);
	            var b = z.check === !1 ? !1 : !0;
	            m(function () {
	                var a, d, e;
	                if (b) c(o.config, { verifyJsApiList: i(z.jsApiList) }, function () {
	                    A._complete = function (a) {
	                        x.preVerifyEndTime = l(), B.state = 1, B.res = a;
	                    }, A.success = function () {
	                        y.isPreVerifyOk = 0;
	                    }, A.fail = function (a) {
	                        A._fail ? A._fail(a) : B.state = -1;
	                    };
	                    var a = A._completes;
	                    return a.push(function () {
	                        z.debug || k();
	                    }), A.complete = function () {
	                        for (var c = 0, d = a.length; d > c; ++c) {
	                            a[c]();
	                        }A._completes = [];
	                    }, A;
	                }()), x.preVerifyStartTime = l();else {
	                    for (B.state = 1, a = A._completes, d = 0, e = a.length; e > d; ++d) {
	                        a[d]();
	                    }A._completes = [];
	                }
	            }), z.beta && n();
	        },
	        ready: function ready(a) {
	            0 != B.state ? a() : (A._completes.push(a), !t && z.debug && a());
	        },
	        error: function error(a) {
	            '6.0.2' > w || (-1 == B.state ? a(B.res) : A._fail = a);
	        },
	        checkJsApi: function checkJsApi(a) {
	            var b = function b(a) {
	                var c,
	                    d,
	                    b = a.checkResult;
	                for (c in b) {
	                    d = p[c], d && (b[d] = b[c], delete b[c]);
	                }return a;
	            };
	            c('checkJsApi', { jsApiList: i(a.jsApiList) }, function () {
	                return a._complete = function (a) {
	                    if (u) {
	                        var c = a.checkResult;
	                        c && (a.checkResult = JSON.parse(c));
	                    }
	                    a = b(a);
	                }, a;
	            }());
	        },
	        onMenuShareTimeline: function onMenuShareTimeline(a) {
	            d(o.onMenuShareTimeline, {
	                complete: function complete() {
	                    c('shareTimeline', {
	                        title: a.title || r,
	                        desc: a.title || r,
	                        img_url: a.imgUrl,
	                        link: a.link || location.href
	                    }, a);
	                }
	            }, a);
	        },
	        onMenuShareAppMessage: function onMenuShareAppMessage(a) {
	            d(o.onMenuShareAppMessage, {
	                complete: function complete() {
	                    c('sendAppMessage', {
	                        title: a.title || r,
	                        desc: a.desc || '',
	                        link: a.link || location.href,
	                        img_url: a.imgUrl,
	                        type: a.type || 'link',
	                        data_url: a.dataUrl || ''
	                    }, a);
	                }
	            }, a);
	        },
	        onMenuShareQQ: function onMenuShareQQ(a) {
	            d(o.onMenuShareQQ, {
	                complete: function complete() {
	                    c('shareQQ', {
	                        title: a.title || r,
	                        desc: a.desc || '',
	                        img_url: a.imgUrl,
	                        link: a.link || location.href
	                    }, a);
	                }
	            }, a);
	        },
	        onMenuShareWeibo: function onMenuShareWeibo(a) {
	            d(o.onMenuShareWeibo, {
	                complete: function complete() {
	                    c('shareWeiboApp', {
	                        title: a.title || r,
	                        desc: a.desc || '',
	                        img_url: a.imgUrl,
	                        link: a.link || location.href
	                    }, a);
	                }
	            }, a);
	        },
	        startRecord: function startRecord(a) {
	            c('startRecord', {}, a);
	        },
	        stopRecord: function stopRecord(a) {
	            c('stopRecord', {}, a);
	        },
	        onVoiceRecordEnd: function onVoiceRecordEnd(a) {
	            d('onVoiceRecordEnd', a);
	        },
	        playVoice: function playVoice(a) {
	            c('playVoice', { localId: a.localId }, a);
	        },
	        pauseVoice: function pauseVoice(a) {
	            c('pauseVoice', { localId: a.localId }, a);
	        },
	        stopVoice: function stopVoice(a) {
	            c('stopVoice', { localId: a.localId }, a);
	        },
	        onVoicePlayEnd: function onVoicePlayEnd(a) {
	            d('onVoicePlayEnd', a);
	        },
	        uploadVoice: function uploadVoice(a) {
	            c('uploadVoice', {
	                localId: a.localId,
	                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
	            }, a);
	        },
	        downloadVoice: function downloadVoice(a) {
	            c('downloadVoice', {
	                serverId: a.serverId,
	                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
	            }, a);
	        },
	        translateVoice: function translateVoice(a) {
	            c('translateVoice', {
	                localId: a.localId,
	                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
	            }, a);
	        },
	        chooseImage: function chooseImage(a) {
	            c('chooseImage', {
	                scene: '1|2',
	                count: a.count || 9,
	                sizeType: a.sizeType || ['original', 'compressed']
	            }, function () {
	                return a._complete = function (a) {
	                    if (u) {
	                        var b = a.localIds;
	                        b && (a.localIds = JSON.parse(b));
	                    }
	                }, a;
	            }());
	        },
	        previewImage: function previewImage(a) {
	            c(o.previewImage, {
	                current: a.current,
	                urls: a.urls
	            }, a);
	        },
	        uploadImage: function uploadImage(a) {
	            c('uploadImage', {
	                localId: a.localId,
	                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
	            }, a);
	        },
	        downloadImage: function downloadImage(a) {
	            c('downloadImage', {
	                serverId: a.serverId,
	                isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
	            }, a);
	        },
	        getNetworkType: function getNetworkType(a) {
	            var b = function b(a) {
	                var c,
	                    d,
	                    e,
	                    b = a.errMsg;
	                if (a.errMsg = 'getNetworkType:ok', c = a.subtype, delete a.subtype, c) a.networkType = c;else switch (d = b.indexOf(':'), e = b.substring(d + 1)) {
	                    case 'wifi':
	                    case 'edge':
	                    case 'wwan':
	                        a.networkType = e;
	                        break;
	                    default:
	                        a.errMsg = 'getNetworkType:fail';
	                }
	                return a;
	            };
	            c('getNetworkType', {}, function () {
	                return a._complete = function (a) {
	                    a = b(a);
	                }, a;
	            }());
	        },
	        openLocation: function openLocation(a) {
	            c('openLocation', {
	                latitude: a.latitude,
	                longitude: a.longitude,
	                name: a.name || '',
	                address: a.address || '',
	                scale: a.scale || 28,
	                infoUrl: a.infoUrl || ''
	            }, a);
	        },
	        getLocation: function getLocation(a) {
	            a = a || {}, c(o.getLocation, { type: a.type || 'wgs84' }, function () {
	                return a._complete = function (a) {
	                    delete a.type;
	                }, a;
	            }());
	        },
	        hideOptionMenu: function hideOptionMenu(a) {
	            c('hideOptionMenu', {}, a);
	        },
	        showOptionMenu: function showOptionMenu(a) {
	            c('showOptionMenu', {}, a);
	        },
	        closeWindow: function closeWindow(a) {
	            a = a || {}, c('closeWindow', { immediate_close: a.immediateClose || 0 }, a);
	        },
	        hideMenuItems: function hideMenuItems(a) {
	            c('hideMenuItems', { menuList: a.menuList }, a);
	        },
	        showMenuItems: function showMenuItems(a) {
	            c('showMenuItems', { menuList: a.menuList }, a);
	        },
	        hideAllNonBaseMenuItem: function hideAllNonBaseMenuItem(a) {
	            c('hideAllNonBaseMenuItem', {}, a);
	        },
	        showAllNonBaseMenuItem: function showAllNonBaseMenuItem(a) {
	            c('showAllNonBaseMenuItem', {}, a);
	        },
	        scanQRCode: function scanQRCode(a) {
	            a = a || {}, c('scanQRCode', {
	                needResult: a.needResult || 0,
	                scanType: a.scanType || ['qrCode', 'barCode']
	            }, function () {
	                return a._complete = function (a) {
	                    var b, c;
	                    v && (b = a.resultStr, b && (c = JSON.parse(b), a.resultStr = c && c.scan_code && c.scan_code.scan_result));
	                }, a;
	            }());
	        },
	        openProductSpecificView: function openProductSpecificView(a) {
	            c(o.openProductSpecificView, {
	                pid: a.productId,
	                view_type: a.viewType || 0
	            }, a);
	        },
	        addCard: function addCard(a) {
	            var e,
	                f,
	                g,
	                h,
	                b = a.cardList,
	                d = [];
	            for (e = 0, f = b.length; f > e; ++e) {
	                g = b[e], h = {
	                    card_id: g.cardId,
	                    card_ext: g.cardExt
	                }, d.push(h);
	            }c(o.addCard, { card_list: d }, function () {
	                return a._complete = function (a) {
	                    var c,
	                        d,
	                        e,
	                        b = a.card_list;
	                    if (b) {
	                        for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c) {
	                            e = b[c], e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ;
	                        }a.cardList = b, delete a.card_list;
	                    }
	                }, a;
	            }());
	        },
	        chooseCard: function chooseCard(a) {
	            c('chooseCard', {
	                app_id: z.appId,
	                location_id: a.shopId || '',
	                sign_type: a.signType || 'SHA1',
	                card_id: a.cardId || '',
	                card_type: a.cardType || '',
	                card_sign: a.cardSign,
	                time_stamp: a.timestamp + '',
	                nonce_str: a.nonceStr
	            }, function () {
	                return a._complete = function (a) {
	                    a.cardList = a.choose_card_info, delete a.choose_card_info;
	                }, a;
	            }());
	        },
	        openCard: function openCard(a) {
	            var e,
	                f,
	                g,
	                h,
	                b = a.cardList,
	                d = [];
	            for (e = 0, f = b.length; f > e; ++e) {
	                g = b[e], h = {
	                    card_id: g.cardId,
	                    code: g.code
	                }, d.push(h);
	            }c(o.openCard, { card_list: d }, a);
	        },
	        chooseWXPay: function chooseWXPay(a) {
	            c(o.chooseWXPay, f(a), a);
	        }
	    }, b && (a.wx = a.jWeixin = C), C;
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var app = exports.app = riot.observable();

	app.views = {};

	app.off('action').on('action', onAction);
	function onAction(action) {
	    Object.keys(app.views).forEach(function (tagName) {
	        app.views[tagName].trigger(action.name, action.res);
	    });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.actions = undefined;

	var _catalog = __webpack_require__(15);

	var _bespeak = __webpack_require__(16);

	var _product = __webpack_require__(17);

	var actions = exports.actions = {
	    loadCatalogByProductIdAndMediaId: _catalog.loadCatalogByProductIdAndMediaId,
	    loadCatalogById: _catalog.loadCatalogById,
	    productActions: _product.productActions,
	    addBespeak: _bespeak.addBespeak
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var baseUrl = __app.settings.api.url + '/tenant/sd/catalog';

	var loadCatalogById = exports.loadCatalogById = function loadCatalogById(id) {
	    return $.get(baseUrl + '/_' + id).then(function (res) {
	        return {
	            name: 'loadCatalogById',
	            res: res
	        };
	    }).catch(function (e) {
	        console.warn(e.stack);
	    });
	};

	var loadCatalogByProductIdAndMediaId = exports.loadCatalogByProductIdAndMediaId = function loadCatalogByProductIdAndMediaId(productId, mediaId) {
	    return $.get(baseUrl + '?product=' + productId + '&media=' + mediaId).then(function (res) {
	        return {
	            name: 'loadCatalogByProductIdAndMediaId',
	            res: res
	        };
	    }).catch(function (e) {
	        console.warn(e.stack);
	    });
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var baseUrl = __app.settings.api.url;

	var addBespeak = exports.addBespeak = function addBespeak(data) {
	    return $.post(baseUrl + '/tenant/sd/bespeak', data).then(function (res) {
	        return {
	            name: 'addBespeak',
	            res: res
	        };
	    }).catch(function (e) {
	        console.warn(e);
	    });
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	//import {appDispatcher} from '../dispatcher';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var productActions = {};

	productActions.loadProduct = function (id) {
	    return $.get(__app.settings.api.url + '/tenant/sd/course/_' + id).then(function (res) {
	        return {
	            name: 'loadProduct',
	            res: res
	        };
	    }).catch(function (e) {
	        console.warn(e);
	    });
	};
	exports.productActions = productActions;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _dispatcher = __webpack_require__(19);

	var appStore = {};

	var loadProduct = function loadProduct(actionType, id) {
	    $.get(__app.settings.api.url + '/tenant/sd/course/_' + id).then(function (data) {
	        appStore.done(actionType, data);
	    }).catch(function (e) {
	        console.warn(e);
	    });
	};

	appStore.done = function (actionType, data) {
	    Object.keys(app.views).forEach(function (tagName) {
	        app.views[tagName].trigger(actionType, data);
	    });
	};

	_dispatcher.appDispatcher.registry(function (action) {
	    switch (action.actionType) {
	        case 'loadProduct':
	            loadProduct(action.actionType, action.id);
	            break;
	    }
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.appDispatcher = undefined;

	var _AppDispatcher = __webpack_require__(20);

	var appDispatcher = new _AppDispatcher.AppDispatcher();

	exports.appDispatcher = appDispatcher;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Action dispatcher
	 */

	var AppDispatcher = function () {
	    function AppDispatcher() {
	        _classCallCheck(this, AppDispatcher);

	        this.actionFuns = [];
	    }

	    _createClass(AppDispatcher, [{
	        key: 'dispatch',
	        value: function dispatch(action) {
	            this.actionFuns.map(function (func) {
	                func(action);
	            });
	        }
	    }, {
	        key: 'registry',
	        value: function registry(func) {
	            if (typeof func !== 'function') {
	                throw new Error('argument require a function');
	            }
	            this.actionFuns.push(func);
	        }
	    }]);

	    return AppDispatcher;
	}();

	exports.AppDispatcher = AppDispatcher;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mixins = undefined;

	var _dispatcher = __webpack_require__(22);

	var mixins = exports.mixins = {
	    dispatcher: _dispatcher.dispatcher
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dispatcher = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _app = __webpack_require__(13);

	var dispatcher = exports.dispatcher = {
	    dispatch: function dispatch(action) {
	        /**
	         * allow dispatch a thunk function
	         */
	        if (isThunk(action)) {
	            return action(done);
	        }
	        /**
	         * allow a promise
	         */
	        if (isPromise(action)) {
	            return action.then(done);
	        }
	        /**
	         * plain action
	         */
	        done(action);
	        function done(res) {
	            _app.app.trigger('action', res);
	        }
	    }
	};

	function isThunk(o) {
	    return typeof o === 'function';
	}
	function isPromise(o) {
	    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && typeof o.then === 'function';
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag2('catalog-index', '<div> <div if="{!catalog || !catalog.products || !catalog.products.length}"> </div> <div if="{catalog.products && catalog.products.length}"> <ul class="catalog-card"> <li each="{catalog.products}" onclick="{parent.routeTo}"> <div riot-style="background-image:url(\'{__app.settings.api.url + \'/file?media_id=\' + poster}\')"> </div> <div class="right-panel"> <div>{name}</div> <div>{slogan}</div> <div> <span class="main-color">会员价</span> <span class="primary-color" style="font-size: 18px">¥ {_.getMemberPrice(listPrice, memberDiscountsType, memberDiscountsValue)}</span> <span class="secondary-color" style="margin-left: 5px;text-decoration:line-through ">{listPrice}</span> </div> </div> <div style="clear:both"></div> <div style="position: absolute; right:10px; top:40px"> <div class="arrow main-color"> <div></div> </div> </div> </li> </ul> </div> </div>', '.arrow { border: 10px solid rgba(0,0,0,0); border-left-color: #ff5000; width: 0; height: 0; position: relative; left: 0px; top: 0px; } .arrow >div{ border: 12px solid rgba(0,0,0,0); border-left-color: white; width: 0; height: 0; position: absolute; left: -15px; top: -12px; } .catalog-card{ margin: 0px; padding: 0px; } .catalog-card li{ background-color: white; list-style-type:none; min-height: 100px; border-bottom: 1px solid #ddd; margin-bottom: 10px; position: relative; } .catalog-card li >div{ float: left; margin-left: 10px; } .catalog-card li >div:first-child{ width: 80px; height: 80px; background-size: 100% 100%; margin-top: 10px; float: left; } .catalog-card li >div:first-child >img{ width: 40px; } .catalog-card .right-panel{ max-width: 200px; overflow: hidden; } .catalog-card .right-panel >div{ margin-top: 12px; font-size: 14px; word-break:keep-all; white-space:nowrap; text-overflow:ellipsis; } .right-panel >div:first-child{ font-size: 20px; }', '', function(opts) {
	        var self = this;
	        self.mixin('dispatcher');

	        self.on('mount', function(){
	            self.on('loadCatalogById', function(res) {
	                self.update({catalog: res.catalog});
	            });
	            self.dispatch(actions.loadCatalogById(self.opts.id));
	        });

	        self.routeTo = function(e){
	            window.location = __app.settings.app.url + "/sd/" + __page.user.wechatId + "/product?id=" + e.item._id + '&media=' + self.catalog.media._id + '&catalog=' + self.catalog._id;
	        }

	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {__webpack_require__(25);
	__webpack_require__(26);
	riot.tag2('product', '<div class="test"></div> <div class="container"> <banner each="{[product.name]}" imgs="{parent.product.banners}"></banner> <div class="header"> <div class="title"><span>{product.name}</span></div> <div class="slogan"><span>{product.slogan}</span></div> <div> <span class="main-color">会员价</span> <span><span style="margin-left: 10px" class="primary-color">¥ </span> <span class="primary-color h2">{_.getMemberPrice(product.listPrice, product.memberDiscountsType, product.memberDiscountsValue)}</span></span> <span class="secondary-color" style="margin-left: 10px;text-decoration:line-through">{product.listPrice}</span> </div> </div> <div class="body"> <div> <div> <b></b> <span>课程详情</span> </div> <div style="margin-top: 10px"> <raw content="{product.details}"></raw> </div> </div> </div> <div class="footer"> <div onclick="{routeTo}" style="width:30%" class="btn btn-default"> <div style="margin-top: 6px"><img src="/web/images/list.png" style="width: 24px"></div> <div style="font-size: 14px; margin-top: 3px">课程目录</div> </div> <input style="width:70%" class="btn btn-primary" value="立刻预约" onclick="{appointment}"> </div> </div> <div id="form" if="{formShow}"> <div id="bg" onclick="{cancelAppointment}"></div> <div id="info"> <div class="pop-window"> <div> <p>请留下您的联系方式</p> <p>我们的课程顾问会尽快和您联系</p> <p>为您提供专业的建议和服务</p> </div> <div> <div style="position:relative;width: 220px;margin:0px auto"> <input style="text-indent: 15px" class="text-input" name="telephone" type="text" placeholder="请输入电话号码"> </div> </div> <div> <input class="btn-rd btn-primary" type="button" value="确认提交" onclick="{onSubmit}"> </div> <div onclick="{cancelAppointment}" style="text-align:center;line-height: 32px;width :32px;height: 32px;position: absolute; top: -20px; right: 0px">X</div> </div> </div> </div>', 'product .pop-window,[riot-tag="product"] .pop-window,[data-is="product"] .pop-window{ position: relative; margin: 0px auto; height: 240px; width: 280px; background-color: white; border-radius: 5px; overflow: hidden; } product .pop-window >div,[riot-tag="product"] .pop-window >div,[data-is="product"] .pop-window >div{ margin-top: 20px } product .pop-window >div >p,[riot-tag="product"] .pop-window >div >p,[data-is="product"] .pop-window >div >p{ margin: 10px auto; font-size: 16px; } product .text-input,[riot-tag="product"] .text-input,[data-is="product"] .text-input{ background: #f1f1f1; border: none; width: 220px; height: 40px; font-size: 16px; border-radius: 5px; } product .btn-rd,[riot-tag="product"] .btn-rd,[data-is="product"] .btn-rd{ display: inline-block; width: 220px; height:40px; border:none; border-radius: 5px; text-align: center; font-size: 18px; } product .header >div,[riot-tag="product"] .header >div,[data-is="product"] .header >div{ margin-bottom: 15px; } product .header .title >span,[riot-tag="product"] .header .title >span,[data-is="product"] .header .title >span{ font-size: 24px; } product .header .slogan >span,[riot-tag="product"] .header .slogan >span,[data-is="product"] .header .slogan >span{ font-size: 16px; color: #ababab; } product .body,[riot-tag="product"] .body,[data-is="product"] .body{ padding: 10px } product .btn,[riot-tag="product"] .btn,[data-is="product"] .btn{ box-sizing: border-box; display: block; float: left; height:56px; border:none; text-align: center; font-size: 18px; } product .btn-default,[riot-tag="product"] .btn-default,[data-is="product"] .btn-default{ background-color: white; color: #ff5000; } product .btn-primary,[riot-tag="product"] .btn-primary,[data-is="product"] .btn-primary{ background-color: #ff5000; color: white; } product .container,[riot-tag="product"] .container,[data-is="product"] .container{ position: relative; } product .container .header,[riot-tag="product"] .container .header,[data-is="product"] .container .header{ padding: 10px; height: 100px; background-color: white; margin-bottom: 10px; } product .container .body,[riot-tag="product"] .container .body,[data-is="product"] .container .body{ height: 120px; background-color: white; margin-bottom: 10px; } product .container .footer,[riot-tag="product"] .container .footer,[data-is="product"] .container .footer{ background-color: white; width: 100%; height: 56px; position: fixed; bottom: 0px; } product .body,[riot-tag="product"] .body,[data-is="product"] .body{ min-height: 200px } product .body b,[riot-tag="product"] .body b,[data-is="product"] .body b{ display: inline-block; width: 3px; height: 12px;background-color: #ff5000 } product #bg,[riot-tag="product"] #bg,[data-is="product"] #bg{ position: fixed; top: 0; left: 0; width: 100%; height: 100%; text-align: center; background: rgba(0, 0, 0, 0.7); z-index: 99; } product #info,[riot-tag="product"] #info,[data-is="product"] #info{ position: fixed; top: 160px; left: 0; width: 100%; height: 200px; text-align: center; z-index: 100; } product .imgPreviewer ul li,[riot-tag="product"] .imgPreviewer ul li,[data-is="product"] .imgPreviewer ul li{ float:left; } product .picPrevIndexSpan,[riot-tag="product"] .picPrevIndexSpan,[data-is="product"] .picPrevIndexSpan{ display: inline-block; border-radius: 50em; width: 5px; height: 5px; background-color: #838383; margin-right: 12px; } product .picPrevIndexSpan:last-child,[riot-tag="product"] .picPrevIndexSpan:last-child,[data-is="product"] .picPrevIndexSpan:last-child{ margin-right: 0px !important; } product .picIndexSpanSelected,[riot-tag="product"] .picIndexSpanSelected,[data-is="product"] .picIndexSpanSelected{ background-color: white !important; }', '', function(opts) {
	        'use strict';
	        this.mixin('dispatcher');

	        var self = this;

	        self.on('mount', function(opts){
	            self.dispatch(actions.productActions.loadProduct(self.opts.id));
	        });

	        self.on('loadProduct', function(data){
	            self.update({product: data.course});
	//            self.mount('banner', {imgs: self.product.banners})
	        });

	        self.on('addBespeak', function(res) {
	            if(!res.error){
	                alert('预约成功');
	                self.update({formShow: false});
	                return;
	            }
	            console.error(res.error);
	        });

	        self.appointment = function(e){
	            if(self.isAnonymous()){
	                return self.goToAuthorize();
	            }
	            self.update({formShow: true});
	        };

	        self.cancelAppointment = function(e) {
	            self.update({formShow: false});
	        };

	        self.isAnonymous = function() {
	            return !__page.user || !__page.user.status || __page.user.status === __app.enums.TenantUserStatus.names.BaseInfo;
	        };

	        self.routeTo = function(e){
	            var returnUrl = __app.settings.app.url + "/sd/" + __page.user.wechatId + "/catalog?id=";
	            if(self.opts.catalog){
	                returnUrl += self.opts.catalog;
	                window.location = returnUrl;
	                return;
	            }
	            self.one('loadCatalogByProductIdAndMediaId', function(res){
	                if(res.error || !res.catalogs || !res.catalogs.length){
	                    alert('读取目录失败');
	                    return;
	                }
	                returnUrl += res.catalogs[0]._id;
	                window.location = returnUrl;
	            });
	            self.dispatch(actions.loadCatalogByProductIdAndMediaId(self.product._id, self.opts.media));
	        };

	        self.goToAuthorize = function(e){
	            var getUserInfoUrl = '/auth/' + __page.user.wechatId + '/authorize?';
	            getUserInfoUrl += 'route=get_user_info&returnUrl='+ encodeURIComponent(location.href);
	            location.href = getUserInfoUrl;
	        };

	        self.onSubmit = function(e){
	            if(self.telephone.value.trim() === ""){
	                return;
	            }
	            self.dispatch(actions.addBespeak({
	                user: __page.user,
	                product: self.product._id,
	                media: self.opts.media,
	                telephone: self.telephone.value.trim()
	            }));
	        }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag2('raw', '', '', '', function(opts) {
	        var me = this;

	        me.on('update', function(){
	            me.root.innerHTML = me.opts.content || '';
	            var bodyNode = me.parent.root.querySelector('.body');
	            var innerNode = me.parent.root.querySelector('.body >div');

	            if(bodyNode && innerNode){
	                _.nextTick(function(){
	                    bodyNode.style.height = parseInt($(innerNode).height(), 10) + 20 + "px";
	                });
	            }
	        });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag2('banner', '<div id="imgPreviewer"></div>', 'banner #imgPreviewer,[riot-tag="banner"] #imgPreviewer,[data-is="banner"] #imgPreviewer{ height: 200px !important; overflow: hidden !important; }', '', function(opts) {
	        var self = this;

	        self.on('mount', function(){
	            _.nextTick(function(){
	                if(!self.opts.imgs || !self.opts.imgs.length){
	                    return;
	                }
	                var imgs = self.opts.imgs.map(function(img){
	                    return {
	                        url: __app.settings.api.url + '/file?media_id=' + img,
	                        meta: '600|400'
	                    }
	                });
	                _.imgPreviewer($('#imgPreviewer'), imgs, {currentIndex: 0, msg: '111'});
	            });
	        });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);