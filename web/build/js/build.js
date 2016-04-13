webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';

	__webpack_require__(2);

	__webpack_require__(4);

	var _app = __webpack_require__(5);

	var _index = __webpack_require__(6);

	var _AppStore = __webpack_require__(10);

	var AppStore = _interopRequireWildcard(_AppStore);

	var _index2 = __webpack_require__(13);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	__webpack_require__(15);
	__webpack_require__(16);

	window.app = _app.app;
	window.actions = _index.actions;

	Object.keys(_index2.mixins).forEach(function (key) {
	    riot.mixin(key, _index2.mixins[key]);
	});

	alert(JSON.stringify(riot));
	var tags = riot.mount('*');
	alert(JSON.stringify(tags));
	tags.forEach(function (tag) {
	    _app.app.views[tag.name] = tag;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* Riot v2.3.1, @license MIT, (c) 2015 Muut Inc. + contributors */

	;(function (window, undefined) {
	  'use strict';

	  var riot = { version: 'v2.3.1', settings: {} },

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
	  // riot specific prefixes
	  RIOT_PREFIX = 'riot-',
	      RIOT_TAG = RIOT_PREFIX + 'tag',


	  // for typeof == '' comparisons
	  T_STRING = 'string',
	      T_OBJECT = 'object',
	      T_UNDEF = 'undefined',
	      T_FUNCTION = 'function',

	  // special native tags that cannot be treated like the others
	  SPECIAL_TAGS_REGEX = /^(?:opt(ion|group)|tbody|col|t[rhd])$/,
	      RESERVED_WORDS_BLACKLIST = ['_item', '_id', '_parent', 'update', 'root', 'mount', 'unmount', 'mixin', 'isMounted', 'isLoop', 'tags', 'parent', 'opts', 'trigger', 'on', 'off', 'one'],


	  // version# for IE 8-11, 0 for others
	  IE_VERSION = (window && window.document || {}).documentMode | 0;
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
	        onEachEvent = function onEachEvent(e, fn) {
	      e.replace(/\S+/g, fn);
	    },
	        defineProperty = function defineProperty(key, value) {
	      Object.defineProperty(el, key, {
	        value: value,
	        enumerable: false,
	        writable: false,
	        configurable: false
	      });
	    };

	    /**
	     * Listen to the given space separated list of `events` and execute the `callback` each time an event is triggered.
	     * @param  { String } events - events ids
	     * @param  { Function } fn - callback function
	     * @returns { Object } el
	     */

	    defineProperty('on', function (events, fn) {
	      if (typeof fn != 'function') return el;

	      onEachEvent(events, function (name, pos) {
	        (callbacks[name] = callbacks[name] || []).push(fn);
	        fn.typed = pos > 0;
	      });

	      return el;
	    });

	    /**
	     * Removes the given space separated list of `events` listeners
	     * @param   { String } events - events ids
	     * @param   { Function } fn - callback function
	     * @returns { Object } el
	     */

	    defineProperty('off', function (events, fn) {
	      if (events == '*') callbacks = {};else {
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
	    });

	    /**
	     * Listen to the given space separated list of `events` and execute the `callback` at most once
	     * @param   { String } events - events ids
	     * @param   { Function } fn - callback function
	     * @returns { Object } el
	     */

	    defineProperty('one', function (events, fn) {
	      function on() {
	        el.off(events, on);
	        fn.apply(el, arguments);
	      }
	      return el.on(events, on);
	    });

	    /**
	     * Execute all callback functions that listen to the given space separated list of `events`
	     * @param   { String } events - events ids
	     * @returns { Object } el
	     */

	    defineProperty('trigger', function (events) {

	      // getting the arguments
	      // skipping the first one
	      var arglen = arguments.length - 1,
	          args = new Array(arglen);
	      for (var i = 0; i < arglen; i++) {
	        args[i] = arguments[i + 1];
	      }

	      onEachEvent(events, function (name) {

	        var fns = (callbacks[name] || []).slice(0);

	        for (var i = 0, fn; fn = fns[i]; ++i) {
	          if (fn.busy) return;
	          fn.busy = 1;

	          try {
	            fn.apply(el, fn.typed ? [name].concat(args) : args);
	          } catch (e) {/* error */}
	          if (fns[i] !== fn) {
	            i--;
	          }
	          fn.busy = 0;
	        }

	        if (callbacks.all && name != 'all') el.trigger.apply(el, ['all', name].concat(args));
	      });

	      return el;
	    });

	    return el;
	  }
	  /* istanbul ignore next */
	  ;(function (riot) {
	    if (!window) return;

	    /**
	     * Simple client-side router
	     * @module riot-route
	     */

	    var RE_ORIGIN = /^.+?\/+[^\/]+/,
	        EVENT_LISTENER = 'EventListener',
	        REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
	        ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
	        HAS_ATTRIBUTE = 'hasAttribute',
	        REPLACE = 'replace',
	        POPSTATE = 'popstate',
	        TRIGGER = 'trigger',
	        MAX_EMIT_STACK_LEVEL = 3,
	        win = window,
	        doc = document,
	        loc = win.history.location || win.location,
	        // see html5-history-api
	    prot = Router.prototype,
	        // to minify more
	    clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
	        started = false,
	        central = riot.observable(),
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
	      return base[0] == '#' ? (href || loc.href).split(base)[1] || '' : getPathFromRoot(href)[REPLACE](base, '');
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
	        if (el.href.split('#')[0] == loc.href.split('#')[0]) return; // internal jump
	        go(getPathFromBase(el.href), el.title || doc.title);
	      }
	      e.preventDefault();
	    }

	    /**
	     * Go to the path
	     * @param {string} path - destination path
	     * @param {string} title - page title
	     */
	    function go(path, title) {
	      title = title || doc.title;
	      // browsers ignores the second parameter `title`
	      history.pushState(null, title, base + normalize(path));
	      // so we need to set it manually
	      doc.title = title;
	      emit();
	    }

	    /**
	     * Go to path or set action
	     * a single string:                go there
	     * two strings:                    go there with setting a title
	     * a single function:              set an action on the default route
	     * a string/RegExp and a function: set an action on the route
	     * @param {(string|function)} first - path / action / filter
	     * @param {(string|RegExp|function)} second - title / action
	     */
	    prot.m = function (first, second) {
	      if (isString(first) && (!second || isString(second))) go(first, second);else if (second) this.r(first, second);else this.r('@', first);
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
	        if (args) {
	          this[TRIGGER].apply(null, [filter].concat(args));
	          return true; // exit from loop
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
	      // stop only this sub-router
	      newSubRouter.m.stop = newSubRouter.s.bind(newSubRouter);
	      // return sub-router's main method
	      return newSubRouter.m.bind(newSubRouter);
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
	      loc.href[REPLACE](/[?&](.+?)=([^&]*)/g, function (_, k, v) {
	        q[k] = v;
	      });
	      return q;
	    };

	    /** Stop routing **/
	    route.stop = function () {
	      if (started) {
	        win[REMOVE_EVENT_LISTENER](POPSTATE, emit);
	        doc[REMOVE_EVENT_LISTENER](clickEvent, click);
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
	        win[ADD_EVENT_LISTENER](POPSTATE, emit);
	        doc[ADD_EVENT_LISTENER](clickEvent, click);
	        started = true;
	      }
	      if (autoExec) emit(true);
	    };

	    /** Prepare the router **/
	    route.base();
	    route.parser();

	    riot.route = route;
	  })(riot);
	  /* istanbul ignore next */

	  /**
	   * The riot template engine
	   * @version 2.3.0
	   */

	  /**
	   * @module brackets
	   *
	   * `brackets         `  Returns a string or regex based on its parameter:
	   *                      With a number returns the current left (0) or right (1) brackets.
	   *                      With a regex, returns the original regex if the current brackets
	   *                      are the default, or a new one with the default brackets replaced
	   *                      by the current custom brackets.
	   *                      WARNING: recreated regexes discards the `/i` and `/m` flags.
	   * `brackets.settings`  This object mirrors the `riot.settings` object, you can assign this
	   *                      if riot is not in context.
	   * `brackets.set     `  The recommended option to change the current tiot brackets, check
	   *                      its parameter and reconfigures the internal state immediately.
	   */

	  var brackets = function (UNDEF) {

	    var REGLOB = 'g',
	        MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
	        STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
	        S_QBSRC = STRINGS.source + '|' + /(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/])/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
	        DEFAULT = '{ }',
	        FINDBRACES = {
	      '(': _regExp('([()])|' + S_QBSRC, REGLOB),
	      '[': _regExp('([[\\]])|' + S_QBSRC, REGLOB),
	      '{': _regExp('([{}])|' + S_QBSRC, REGLOB)
	    };

	    var cachedBrackets = UNDEF,
	        _regex,
	        _pairs = [];

	    function _regExp(source, flags) {
	      return new RegExp(source, flags);
	    }

	    function _loopback(re) {
	      return re;
	    }

	    function _rewrite(re) {
	      return new RegExp(re.source.replace(/{/g, _pairs[2]).replace(/}/g, _pairs[3]), re.global ? REGLOB : '');
	    }

	    function _reset(pair) {
	      pair = pair || DEFAULT;

	      if (pair !== _pairs[8]) {
	        var bp = pair.split(' ');

	        if (pair === DEFAULT) {
	          _pairs = bp.concat(bp);
	          _regex = _loopback;
	        } else {
	          if (bp.length !== 2 || /[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)) {
	            throw new Error('Unsupported brackets "' + pair + '"');
	          }
	          _pairs = bp.concat(pair.replace(/(?=[[\]()*+?.^$|])/g, '\\').split(' '));
	          _regex = _rewrite;
	        }
	        _pairs[4] = _regex(_pairs[1].length > 1 ? /(?:^|[^\\]){[\S\s]*?}/ : /(?:^|[^\\]){[^}]*}/);
	        _pairs[5] = _regex(/\\({|})/g);
	        _pairs[6] = _regex(/(\\?)({)/g);
	        _pairs[7] = _regExp('(\\\\?)(?:([[({])|(' + _pairs[3] + '))|' + S_QBSRC, REGLOB);
	        _pairs[9] = _regExp(/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S+)\s*}/);
	        _pairs[8] = pair;
	      }
	      _brackets.settings.brackets = cachedBrackets = pair;
	    }

	    function _set(pair) {
	      if (cachedBrackets !== pair) {
	        _reset(pair);
	      }
	    }

	    function _brackets(reOrIdx) {
	      _set(_brackets.settings.brackets);
	      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _pairs[reOrIdx];
	    }

	    _brackets.split = function split(str, tmpl) {

	      var parts = [],
	          match,
	          isexpr,
	          start,
	          pos,
	          re = _brackets(6);

	      isexpr = start = re.lastIndex = 0;

	      while (match = re.exec(str)) {

	        pos = match.index;

	        if (isexpr) {

	          if (match[2]) {
	            re.lastIndex = skipBraces(match[2], re.lastIndex);
	            continue;
	          }

	          if (!match[3]) continue;
	        }

	        if (!match[1]) {
	          unescapeStr(str.slice(start, pos));
	          start = re.lastIndex;
	          re = _pairs[6 + (isexpr ^= 1)];
	          re.lastIndex = start;
	        }
	      }

	      if (str && start < str.length) {
	        unescapeStr(str.slice(start));
	      }

	      return parts;

	      function unescapeStr(str) {
	        if (tmpl || isexpr) parts.push(str && str.replace(_pairs[5], '$1'));else parts.push(str);
	      }

	      function skipBraces(ch, pos) {
	        var match,
	            recch = FINDBRACES[ch],
	            level = 1;
	        recch.lastIndex = pos;

	        while (match = recch.exec(str)) {
	          if (match[1] && !(match[1] === ch ? ++level : --level)) break;
	        }
	        return match ? recch.lastIndex : str.length;
	      }
	    };

	    _brackets.hasExpr = function hasExpr(str) {
	      return _brackets(4).test(str);
	    };

	    _brackets.loopKeys = function loopKeys(expr) {
	      var m = expr.match(_brackets(9));
	      return m ? { key: m[1], pos: m[2], val: _pairs[0] + m[3] + _pairs[1] } : { val: expr.trim() };
	    };

	    _brackets.array = function array(pair) {
	      if (pair != null) _reset(pair);
	      return _pairs;
	    };

	    /* istanbul ignore next: in the node version riot is not in the scope */
	    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
	    _brackets.set = _set;

	    _brackets.R_STRINGS = STRINGS;
	    _brackets.R_MLCOMMS = MLCOMMS;
	    _brackets.S_QBLOCKS = S_QBSRC;

	    _reset(_brackets.settings.brackets);

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

	    var FALSE = !1,
	        _cache = {};

	    function _tmpl(str, data) {
	      if (!str) return str;

	      return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr);
	    }

	    _tmpl.hasExpr = brackets.hasExpr;

	    _tmpl.loopKeys = brackets.loopKeys;

	    _tmpl.errorHandler = FALSE;

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
	      if (expr.slice(0, 11) !== "try{return ") expr = 'return ' + expr;

	      return new Function('E', expr + ';'); // eslint-disable-line indent
	    }

	    var RE_QBLOCK = new RegExp(brackets.S_QBLOCKS, 'g'),
	        RE_QBMARK = /\x01(\d+)~/g;

	    function _getTmpl(str) {
	      var qstr = [],
	          expr,
	          parts = brackets.split(str, 1);

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

	      if (qstr[0]) expr = expr.replace(RE_QBMARK, function (_, pos) {
	        return qstr[pos].replace(/\r/g, '\\r').replace(/\n/g, '\\n');
	      });

	      return expr;
	    }

	    var CS_IDENT = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\x01(\d+)~):/,
	        RE_BRACE = /,|([[{(])|$/g;

	    function _parseExpr(expr, asText, qstr) {

	      expr = expr.replace(RE_QBLOCK, function (s, div) {
	        return s.length > 2 && !div ? '\x01' + (qstr.push(s) - 1) + '~' : s;
	      }).replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

	      if (expr) {
	        var list = [],
	            cnt = 0,
	            match;

	        while (expr && (match = expr.match(CS_IDENT)) && !match.index) {
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

	      function skipBraces(jsb, re) {
	        var match,
	            lv = 1,
	            ir = jsb === '(' ? /[()]/g : jsb === '[' ? /[[\]]/g : /[{}]/g;

	        ir.lastIndex = re.lastIndex;
	        while (match = ir.exec(expr)) {
	          if (match[0] === jsb) ++lv;else if (! --lv) break;
	        }
	        re.lastIndex = lv ? expr.length : ir.lastIndex;
	      }
	    }

	    // istanbul ignore next: not both
	    var JS_CONTEXT = '"in this?this:' + ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' ? 'global' : 'window') + ').';
	    var JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g;

	    function _wrapExpr(expr, asText, key) {
	      var tb = FALSE;

	      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
	        if (mvar) {
	          pos = tb ? 0 : pos + match.length;

	          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
	            match = p + '("' + mvar + JS_CONTEXT + mvar;
	            if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '[';
	          } else if (pos) tb = !/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/.test(s.slice(pos));
	        }
	        return match;
	      });

	      if (tb) {
	        expr = "try{return " + expr + '}catch(e){E(e,this)}';
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

	    return _tmpl;
	  }();

	  /*
	    lib/browser/tag/mkdom.js
	  
	    Includes hacks needed for the Internet Explorer version 9 and bellow
	  
	  */
	  // http://kangax.github.io/compat-table/es5/#ie8
	  // http://codeplanet.io/dropping-ie8/

	  var mkdom = function (checkIE) {

	    var rootEls = {
	      'tr': 'tbody',
	      'th': 'tr',
	      'td': 'tr',
	      'tbody': 'table',
	      'col': 'colgroup'
	    },
	        GENERIC = 'div';

	    checkIE = checkIE && checkIE < 10;

	    // creates any dom element in a div, table, or colgroup container
	    function _mkdom(html) {

	      var match = html && html.match(/^\s*<([-\w]+)/),
	          tagName = match && match[1].toLowerCase(),
	          rootTag = rootEls[tagName] || GENERIC,
	          el = mkEl(rootTag);

	      el.stub = true;

	      /* istanbul ignore next */
	      if (checkIE && tagName && (match = tagName.match(SPECIAL_TAGS_REGEX))) ie9elem(el, html, tagName, !!match[1]);else el.innerHTML = html;

	      return el;
	    }

	    // creates tr, th, td, option, optgroup element for IE8-9
	    /* istanbul ignore next */
	    function ie9elem(el, html, tagName, select) {

	      var div = mkEl(GENERIC),
	          tag = select ? 'select>' : 'table>',
	          child;

	      div.innerHTML = '<' + tag + html + '</' + tag;

	      child = $(tagName, div);
	      if (child) el.appendChild(child);
	    }
	    // end ie9elem()

	    return _mkdom;
	  }(IE_VERSION);

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
	        j = items.length;

	    while (i > j) {
	      var t = tags[--i];
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
	    var el = tag._root;
	    tag._virts = [];
	    while (el) {
	      var sib = el.nextSibling;
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
	    var el = tag._root;
	    for (var i = 0; i < len; i++) {
	      var sib = el.nextSibling;
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
	        isSpecialTag = SPECIAL_TAGS_REGEX.test(tagName),
	        ref = document.createTextNode(''),
	        child = getTag(dom),
	        tags = [],
	        oldItems = [],
	        checksum,
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
	        checksum = items ? JSON.stringify(items) : '';
	        items = !items ? [] : Object.keys(items).map(function (key) {
	          return mkitem(expr, key, items[key]);
	        });
	      }

	      // loop all the new items
	      each(items, function (item, i) {
	        // reorder only if the items are objects
	        var _mustReorder = mustReorder && item instanceof Object,
	            oldPos = oldItems.indexOf(item),
	            pos = ~oldPos && _mustReorder ? oldPos : i,

	        // does a tag exist in this position?
	        tag = tags[pos];

	        item = !checksum && expr.key ? mkitem(expr, item, i) : item;

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
	            if (i == tags.length) {
	              if (isVirtual) addVirtual(tag, frag);else frag.appendChild(tag.root);
	            }
	            // this tag must be insert
	            else {
	                if (isVirtual) addVirtual(tag, root, tags[i]);else root.insertBefore(tag.root, tags[i].root);
	                oldItems.splice(i, 0, item);
	              }

	            tags.splice(i, 0, tag);
	            pos = i; // handled here so no move
	          } else tag.update(item);

	        // reorder the tag if it's not located in its previous position
	        if (pos !== i && _mustReorder) {
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
	          if (!child) moveNestedTags(tag, i);
	        }

	        // cache the original item to use it in the events bound to this node
	        // and its children
	        tag._item = item;
	        // cache the real parent tag internally
	        defineProperty(tag, '_parent', parent);
	      });

	      // remove the redundant tags
	      unmountRedundant(items, tags);

	      // insert the new nodes
	      if (isSpecialTag) root.appendChild(frag);else root.insertBefore(frag, ref);

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
	        var expr = { dom: dom, expr: val };
	        expressions.push(extend(expr, extra));
	      }
	    }

	    walk(root, function (dom) {
	      var type = dom.nodeType;

	      // text node
	      if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue);
	      if (type != 1) return;

	      /* element */

	      // loop
	      var attr = getAttr(dom, 'each');

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
	        dom = mkdom(impl.tmpl),
	        parent = conf.parent,
	        isLoop = conf.isLoop,
	        hasImpl = conf.hasImpl,
	        item = cleanUpData(conf.item),
	        expressions = [],
	        childTags = [],
	        root = conf.root,
	        fn = impl.fn,
	        tagName = root.tagName.toLowerCase(),
	        attr = {},
	        propsInSyncWithParent = [];

	    if (fn && root._tag) root._tag.unmount(true);

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

	    if (dom.innerHTML && !/^(select|optgroup|table|tbody|tr|col(?:group)?)$/.test(tagName))
	      // replace all the yield tags with the tag inner html
	      dom.innerHTML = replaceYield(dom.innerHTML, innerHTML);

	    // options
	    function updateOpts() {
	      var ctx = hasImpl && isLoop ? self : parent || self;

	      // update opts from current DOM attributes
	      each(root.attributes, function (el) {
	        opts[toCamel(el.name)] = tmpl(el.value, ctx);
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

	    defineProperty(this, 'update', function (data) {

	      // make sure the data passed will not override
	      // the component core methods
	      data = cleanUpData(data);
	      // inherit properties from the parent
	      inheritFromParent();
	      // normalize the tag properties in case an item object was initially passed
	      if (data && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === T_OBJECT) {
	        normalizeData(data);
	        item = data;
	      }
	      extend(self, data);
	      updateOpts();
	      self.trigger('update', data);
	      update(expressions, self);
	      self.trigger('updated');
	      return this;
	    });

	    defineProperty(this, 'mixin', function () {
	      each(arguments, function (mix) {
	        mix = (typeof mix === 'undefined' ? 'undefined' : _typeof(mix)) === T_STRING ? riot.mixin(mix) : mix;
	        each(Object.keys(mix), function (key) {
	          // bind methods to self
	          if (key != 'init') self[key] = isFunction(mix[key]) ? mix[key].bind(self) : mix[key];
	        });
	        // init method will be called automatically
	        if (mix.init) mix.init.bind(self)();
	      });
	      return this;
	    });

	    defineProperty(this, 'mount', function () {

	      updateOpts();

	      // initialiation
	      if (fn) fn.call(self, opts);

	      // parse layout after init. fn may calculate args for nested custom tags
	      parseExpressions(dom, self, expressions);

	      // mount the child tags
	      toggle(true);

	      // update the root adding custom attributes coming from the compiler
	      // it fixes also #1087
	      if (impl.attrs || hasImpl) {
	        walkAttributes(impl.attrs, function (k, v) {
	          setAttr(root, k, v);
	        });
	        parseExpressions(self.root, self, expressions);
	      }

	      if (!self.parent || isLoop) self.update(item);

	      // internal use only, fixes #403
	      self.trigger('before-mount');

	      if (isLoop && !hasImpl) {
	        // update the root attribute for the looped elements
	        self.root = root = dom.firstChild;
	      } else {
	        while (dom.firstChild) {
	          root.appendChild(dom.firstChild);
	        }if (root.stub) self.root = root = parent.root;
	      }

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
	          ptag;

	      self.trigger('before-unmount');

	      // remove this tag instance from the global virtualDom variable
	      __virtualDom.splice(__virtualDom.indexOf(self), 1);

	      if (this._virts) {
	        each(this._virts, function (v) {
	          v.parentNode.removeChild(v);
	        });
	      }

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
	        }if (!keepRootTag) p.removeChild(el);else
	          // the riot-tag attribute isn't needed anymore, remove it
	          remAttr(p, 'riot-tag');
	      }

	      self.trigger('unmount');
	      toggle();
	      self.off('*');
	      self.isMounted = false;
	      // somehow ie8 does not like `delete root._tag`
	      root._tag = null;
	    });

	    function toggle(isMount) {

	      // mount/unmount children
	      each(childTags, function (child) {
	        child[isMount ? 'mount' : 'unmount']();
	      });

	      // listen/unlisten parent (events flow one way from parent to children)
	      if (parent) {
	        var evt = isMount ? 'on' : 'off';

	        // the loop tags will be always in sync with the parent automatically
	        if (isLoop) parent[evt]('unmount', self.unmount);else parent[evt]('update', self.update)[evt]('unmount', self.unmount);
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
	    if (root) {
	      root.insertBefore(before, node);
	      root.removeChild(node);
	    }
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

	      if (expr.bool) value = value ? attrName : false;else if (value == null) value = '';

	      // leave out riot- prefixes from strings inside textarea
	      // fix #815: any value -> string
	      if (parent && parent.tagName == 'TEXTAREA') value = ('' + value).replace(/riot-/g, '');

	      // no change
	      if (expr.value === value) return;
	      expr.value = value;

	      // text node
	      if (!attrName) {
	        dom.nodeValue = '' + value; // #815 related
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
	        } else if (/^(show|hide)$/.test(attrName)) {
	            if (attrName == 'hide') value = !value;
	            dom.style.display = value ? '' : 'none';

	            // field value
	          } else if (attrName == 'value') {
	              dom.value = value;

	              // <img src="{ expr }">
	            } else if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
	                if (value) setAttr(dom, attrName.slice(RIOT_PREFIX.length), value);
	              } else {
	                if (expr.bool) {
	                  dom[attrName] = value;
	                  if (!value) return;
	                }

	                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== T_OBJECT) setAttr(dom, attrName, value);
	              }
	    });
	  }
	  /**
	   * Loops an array
	   * @param   { Array } els - collection of items
	   * @param   {Function} fn - callback function
	   * @returns { Array } the array looped
	   */
	  function each(els, fn) {
	    for (var i = 0, len = (els || []).length, el; i < len; i++) {
	      el = els[i];
	      // return false -> remove current item during loop
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
	   * Remove any DOM attribute from a node
	   * @param   { Object } dom - DOM node we want to update
	   * @param   { String } name - name of the property we want to remove
	   */
	  function remAttr(dom, name) {
	    dom.removeAttribute(name);
	  }

	  /**
	   * Convert a string containing dashes to camle case
	   * @param   { String } string - input string
	   * @returns { String } my-string -> myString
	   */
	  function toCamel(string) {
	    return string.replace(/(\-\w)/g, function (match) {
	      return match.toUpperCase().replace('-', '');
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
	    return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()];
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
	      configurable: false
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
	   * Replace the yield tag from any tag template with the innerHTML of the
	   * original tag in the page
	   * @param   { String } tmpl - tag implementation template
	   * @param   { String } innerHTML - original content of the tag in the DOM
	   * @returns { String } tag template updated without the yield tag
	   */
	  function replaceYield(tmpl, innerHTML) {
	    return tmpl.replace(/<(yield)\/?>(<\/\1>)?/gi, innerHTML || '');
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

	    // add the node detected to a tag instance using the named property
	    add = function add(value) {
	      // avoid to override the tag properties already set
	      if (contains(keys, key)) return;
	      // check whether this value is an array
	      var isArr = isArray(value);
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
	      parent.one('updated', function () {
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
	   * Function needed to inject in runtime the custom tags css
	   */
	  var injectStyle = function () {

	    if (!window) return; // skip injection on the server

	    // create the style node
	    var styleNode = mkEl('style'),
	        placeholder = $('style[type=riot]');

	    setAttr(styleNode, 'type', 'text/css');

	    // inject the new node into the DOM -- in head
	    if (placeholder) {
	      placeholder.parentNode.replaceChild(styleNode, placeholder);
	      placeholder = null;
	    } else document.getElementsByTagName('head')[0].appendChild(styleNode);

	    /**
	     * This is the function exported that will be used to update the style tag just created
	     * innerHTML seems slow: http://jsperf.com/riot-insert-style
	     * @param   { String } css [description]
	     */
	    return styleNode.styleSheet ? function (css) {
	      styleNode.styleSheet.cssText += css;
	    } : function (css) {
	      styleNode.innerHTML += css;
	    };
	  }();

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
	     * @param   { String } name - mixin name
	     * @param   { Object } mixin - mixin logic
	     * @returns { Object } the mixin logic
	     */
	    return function (name, mixin) {
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
	      if (isFunction(css)) fn = css;else if (injectStyle) injectStyle(css);
	    }
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
	   * @param   { string }  [bpair] - brackets used in the compilation
	   * @returns { String } name/id of the tag just created
	   */
	  riot.tag2 = function (name, html, css, attrs, fn, bpair) {
	    if (css && injectStyle) injectStyle(css);
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
	        list += ', *[' + RIOT_TAG + '="' + e.trim() + '"]';
	      });
	      return list;
	    }

	    function selectAllTags() {
	      var keys = Object.keys(__tagImpl);
	      return keys + addRiotTags(keys);
	    }

	    function pushTags(root) {
	      var last;

	      if (root.tagName) {
	        if (tagName && (!(last = getAttr(root, RIOT_TAG)) || last != tagName)) setAttr(root, RIOT_TAG, tagName);

	        var tag = mountTo(root, tagName || root.getAttribute(RIOT_TAG) || root.tagName.toLowerCase(), opts);

	        if (tag) tags.push(tag);
	      } else if (root.length) each(root, pushTags); // assume nodeList
	    }

	    // ----- mount code -----

	    if ((typeof tagName === 'undefined' ? 'undefined' : _typeof(tagName)) === T_OBJECT) {
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
	        selector += addRiotTags(selector.split(','));

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

	    if (els.tagName) pushTags(els);else each(els, pushTags);

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
	   * Export the Tag constructor
	   */
	  riot.Tag = Tag;
	  // support CommonJS, AMD & browser
	  /* istanbul ignore next */
	  if (( false ? 'undefined' : _typeof(exports)) === T_OBJECT) module.exports = riot;else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return window.riot = riot;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else window.riot = riot;
	})(typeof window != 'undefined' ? window : void 0);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ajax = __webpack_require__(3);

	var fetch = _interopRequireWildcard(_ajax);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	;(function (window, undefined) {
	    'use strict';

	    var _jQuery = window.jQuery;
	    if (_jQuery) {
	        return _jQuery;
	    }
	    var jQuery = function jQuery(selector) {
	        var nodes = document.querySelectorAll(selector);
	        !Array.isArray(nodes) && (nodes = [].slice.apply(nodes));
	        return nodes.length === 1 ? nodes[0] : nodes;
	    };
	    jQuery = Object.assign(jQuery, fetch.default);
	    window.$ = jQuery;
	})(window);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	        module.exports = factory;
	    } else {
	        root.atomic = factory(root);
	    }
	})(undefined, function (root) {

	    'use strict';

	    var exports = {};

	    var config = {
	        contentType: 'application/x-www-form-urlencoded'
	    };

	    var parse = function parse(req) {
	        var result;
	        try {
	            result = JSON.parse(req.responseText);
	        } catch (e) {
	            result = req.responseText;
	        }
	        return [result, req];
	    };

	    var xhr = function xhr(type, url, data) {
	        var methods = {
	            success: function success() {},
	            error: function error() {},
	            always: function always() {}
	        };
	        var XHR = XMLHttpRequest || ActiveXObject;
	        var request = new XHR('MSXML2.XMLHTTP.3.0');

	        request.open(type, url, true);
	        request.setRequestHeader('Content-type', config.contentType);
	        request.onreadystatechange = function () {
	            var req;
	            if (request.readyState === 4) {
	                req = parse(request);
	                if (request.status >= 200 && request.status < 300) {
	                    methods.success.apply(methods, req);
	                } else {
	                    methods.error.apply(methods, req);
	                }
	                methods.always.apply(methods, req);
	            }
	        };
	        request.send(data);

	        var atomXHR = {
	            success: function success(callback) {
	                methods.success = callback;
	                return atomXHR;
	            },
	            error: function error(callback) {
	                methods.error = callback;
	                return atomXHR;
	            },
	            always: function always(callback) {
	                methods.always = callback;
	                return atomXHR;
	            }
	        };

	        return atomXHR;
	    };

	    exports.get = function (src) {
	        return xhr('GET', src);
	    };

	    exports.put = function (url, data) {
	        return xhr('PUT', url, data);
	    };

	    exports.post = function (url, data) {
	        return xhr('POST', url, data);
	    };

	    exports.delete = function (url) {
	        return xhr('DELETE', url);
	    };

	    exports.setContentType = function (value) {
	        config.contentType = value;
	    };

	    return exports;
	});

/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.actions = undefined;

	var _catalog = __webpack_require__(7);

	var _bespeak = __webpack_require__(8);

	var _product = __webpack_require__(9);

	var actions = exports.actions = {
	    loadCatalogById: _catalog.loadCatalogById,
	    productActions: _product.productActions,
	    addBespeak: _bespeak.addBespeak
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var baseUrl = __app.settings.api.url;

	var loadCatalogById = exports.loadCatalogById = function loadCatalogById(id) {
	    console.error('adsfasdfasdfasdfasdf');
	    console.error(id);
	    return function (done) {
	        return $.get(baseUrl + '/tenant/sd/catalog/_' + id).success(function (res) {
	            console.error('adfad');
	            done({
	                name: 'loadCatalogById',
	                res: res
	            });
	        }).error(function (e) {
	            console.warn(e.stack);
	        });
	    };
	};
	//export var loadCatalogById = id = done =>{
	//    return $.get(baseUrl + '/tenant/sd/catalog/_' + id)
	//        .success(res=>{
	//            done({
	//                name: 'loadCatalogById',
	//                res
	//            });
	//        })
	//        .error(e=>{
	//            console.warn(e.stack)
	//        })
	//};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var baseUrl = __app.settings.api.url;

	var addBespeak = exports.addBespeak = function addBespeak(data) {
	    return function (done) {
	        return $.post(baseUrl + '/tenant/sd/bespeak', data).success(function (res) {
	            done({
	                name: 'addBespeak',
	                res: res
	            });
	        }).error(function (e) {
	            console.warn(e);
	        });
	    };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	//import {appDispatcher} from '../dispatcher';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var productActions = {};

	productActions.loadProduct = function (id) {
	    return function (done) {
	        $.get(__app.settings.api.url + '/tenant/sd/course/_' + id).success(function (res) {
	            done({
	                name: 'loadProduct',
	                res: res
	            });
	        }).error(function (e) {
	            console.warn(e);
	        });
	    };
	};
	exports.productActions = productActions;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _dispatcher = __webpack_require__(11);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.appDispatcher = undefined;

	var _AppDispatcher = __webpack_require__(12);

	var appDispatcher = new _AppDispatcher.AppDispatcher();

	exports.appDispatcher = appDispatcher;

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mixins = undefined;

	var _dispatcher = __webpack_require__(14);

	var mixins = exports.mixins = {
	    dispatcher: _dispatcher.dispatcher
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dispatcher = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _app = __webpack_require__(5);

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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag2('catalog-index', '<div> <div>产品目录</div> <div if="{!catalog || !catalog.products || !catalog.products.length}"> 该机构尚没有上架任何课程 </div> <div if="{catalog.products && catalog.products.length}"> <ul class="catalog-card"> <li each="{catalog.products}" onclick="{parent.routeTo}"> <div riot-style="background-image:url(\'{__app.settings.api.url + \'/file?media_id=\' + poster}\')"> </div> <div> <div>{name}</div> <div>{slogan}</div> </div> </li> </ul> </div> </div>', '.catalog-card{ margin: 0px; padding: 0px; } .catalog-card li{ list-style-type:none; min-height: 60px; border-bottom: 1px solid #ddd; } .catalog-card li >div{ float: left; margin-left: 10px; margin-top: 10px; } .catalog-card li >div:first-child{ width: 40px; height: 40px; background-size: 100% 100%; margin-top: 10px; float: left; } .catalog-card li >div:first-child >img{ width: 40px; }', '', function(opts) {
	        this.mixin('dispatcher');

	        this.on('mount', function(){
	            alert('mount');
	            this.on('loadCatalogById', res => {
	                this.update({catalog: res.catalog});
	            });
	            this.dispatch(actions.loadCatalogById(this.opts.id));
	        })
	        alert(this.opts.id);
	        $.get(__app.settings.api.url + '/tenant/sd/catalog/_' + this.opts.id)
	                .success(res=>{
	            alert('success');
	            console.error(res);

	        })
	        .error(e=>{
	            console.warn(e.stack)
	        })

	        this.routeTo = e => {
	            window.location = __app.settings.app.url + "/sd/" + __page.user.wechatId + "/product?id=" + e.item._id + '&media=' + this.catalog.media._id;
	        }

	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag2('product', '<ul> <li>{product.name}</li> <li>{product.slogan}</li> <li>{product.listPrice}</li> <li>{product.desc}</li> <li>{product.details}</li> </ul> <div> <input type="button" value="预约" onclick="{appointment}"> </div> <div id="form" if="{formShow}"> <div id="bg" onclick="{cancelAppointment}"></div> <div id="info"> <input name="telephone" type="text" placeholder="请输入电话号码"> <input type="button" value="提交" onclick="{onSubmit}"> <input type="button" value="取消" onclick="{cancelAppointment}"> </div> </div>', 'product #bg,[riot-tag="product"] #bg,[data-is="product"] #bg{ position: fixed; top: 0; left: 0; width: 100%; height: 100%; text-align: center; background: rgba(0, 0, 0, 0.7); z-index: 99; } product #info,[riot-tag="product"] #info,[data-is="product"] #info{ position: fixed; top: 200px; left: 0; width: 100%; height: 200px; text-align: center; z-index: 100; }', '', function(opts) {
	        'use strict'
	        this.mixin('dispatcher');

	        let self = this;
	        self.id = this.opts.id;
	        self.media = this.opts.media;

	        self.on('mount', opts => {
	            self.dispatch(actions.productActions.loadProduct(self.id));
	        })

	        self.on('loadProduct', data => {
	            self.update({product: data.course});
	        })

	        self.on('addBespeak', res => {
	            if(!res.error){
	                alert('预约成功');
	                self.update({formShow: false});
	                return;
	            }
	            console.error(res.error);
	        })

	        self.appointment = e => {
	            if(self.isAnonymous()){
	                return self.goToAuthorize();
	            }
	            self.update({formShow: true});
	        }

	        self.cancelAppointment = e => {
	            self.update({formShow: false});
	        }
	        self.isAnonymous = () => {
	            return !__page.user || !__page.user.status || __page.user.status === __app.enums.TenantUserStatus.names.BaseInfo;
	        }

	        self.goToAuthorize = e => {
	            var getUserInfoUrl = '/auth/' + __page.user.wechatId + '/authorize?';
	            getUserInfoUrl += 'route=get_user_info&returnUrl='+location.href;
	            location.href = getUserInfoUrl;
	        }

	        self.onSubmit = e => {
	            if(self.telephone.value.trim() === ""){
	                return;
	            }
	            self.dispatch(actions.addBespeak({
	                user: __page.user,
	                product: self.product,
	                media: self.media,
	                telephone: self.telephone.value.trim()
	            }));
	        }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);