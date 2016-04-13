alert('ddddd');
alert(webpackJsonp.toString());
	webpackJsonp([0, 1], [
		/* 0 */
		/***/ function (module, exports, __webpack_require__) {
			/* WEBPACK VAR INJECTION */
			(function (riot) {
				'use strict';
				__webpack_require__(4);

				__webpack_require__(6);

				var _app = __webpack_require__(7);

				var _index = __webpack_require__(8);

				var _AppStore = __webpack_require__(12);

				var AppStore = _interopRequireWildcard(_AppStore);

				var _index2 = __webpack_require__(15);

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};
						if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
							}
						}
						newObj.default = obj;
						return newObj;
					}
				}

				console.error('errr');


				__webpack_require__(17);
				__webpack_require__(18);

				window.app = _app.app;
				window.actions = _index.actions;

				Object.keys(_index2.mixins).forEach(function (key) {
					riot.mixin(key, _index2.mixins[key]);
				});

				alert(riot);
				var tags = riot.mount('*');
				alert(tags);
				tags.forEach(function (tag) {
					_app.app.views[tag.name] = tag;
				});
				/* WEBPACK VAR INJECTION */
			}.call(exports, __webpack_require__(1)))

			/***/
		},
		/* 1 */
	]);