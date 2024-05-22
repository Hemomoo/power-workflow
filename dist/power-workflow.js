(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CustomExport"] = factory();
	else
		root["CustomExport"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToolItem = exports.ToolGroup = exports.RegisterBehavior = exports.BaseNode = exports.Workflow = void 0;
var Workflow_1 = __webpack_require__(1);
Object.defineProperty(exports, "Workflow", ({ enumerable: true, get: function () { return __importDefault(Workflow_1).default; } }));
var Flow_1 = __importDefault(__webpack_require__(40));
var BaseNode_1 = __webpack_require__(3);
Object.defineProperty(exports, "BaseNode", ({ enumerable: true, get: function () { return __importDefault(BaseNode_1).default; } }));
var registerBehavior_1 = __webpack_require__(28);
Object.defineProperty(exports, "RegisterBehavior", ({ enumerable: true, get: function () { return __importDefault(registerBehavior_1).default; } }));
var Toolbar_1 = __webpack_require__(69);
Object.defineProperty(exports, "ToolGroup", ({ enumerable: true, get: function () { return Toolbar_1.ToolGroup; } }));
Object.defineProperty(exports, "ToolItem", ({ enumerable: true, get: function () { return Toolbar_1.ToolItem; } }));
exports["default"] = Flow_1.default;


/***/ }),
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var g6_1 = __importStar(__webpack_require__(2));
var BaseNode_1 = __importDefault(__webpack_require__(3));
var FlowNode_1 = __importDefault(__webpack_require__(10));
var SimpleNode_1 = __importDefault(__webpack_require__(11));
var nodes_1 = __importDefault(__webpack_require__(12));
var CircleNode_1 = __importDefault(__webpack_require__(18));
var CvtePolyline_1 = __importDefault(__webpack_require__(19));
var CvtePolyline1_1 = __importDefault(__webpack_require__(21));
var circle_1 = __importDefault(__webpack_require__(22));
var BaseAnchor_1 = __importDefault(__webpack_require__(23));
var behavior_1 = __importDefault(__webpack_require__(26));
var config_1 = __webpack_require__(38);
var Util_1 = __webpack_require__(39);
var gird = new g6_1.default.Grid({});
var CvteWorkflow = (function () {
    function CvteWorkflow(_a) {
        var container = _a.container, _b = _a.width, width = _b === void 0 ? window.innerWidth : _b, _c = _a.height, height = _c === void 0 ? window.innerHeight : _c, _d = _a.plugins, plugins = _d === void 0 ? [] : _d, _e = _a.mode, mode = _e === void 0 ? "view" : _e, _f = _a.initEdges, initEdges = _f === void 0 ? [] : _f, _g = _a.initNodes, initNodes = _g === void 0 ? [] : _g, _h = _a.registerNodes, registerNodes = _h === void 0 ? [] : _h, edgeCallback = _a.edgeCallback, layout = _a.layout, registerNodeList = _a.registerNodeList, _j = _a.animate, animate = _j === void 0 ? false : _j, _k = _a.registerEdgeList, registerEdgeList = _k === void 0 ? [] : _k, _l = _a.registerBehaviors, registerBehaviors = _l === void 0 ? [] : _l, _m = _a.diffHeight, diffHeight = _m === void 0 ? 0 : _m, _o = _a.diffWidth, diffWidth = _o === void 0 ? 0 : _o, _p = _a.treeGroup, treeGroup = _p === void 0 ? false : _p, _q = _a.layoutParams, layoutParams = _q === void 0 ? {} : _q, _r = _a.defaultNode, defaultNode = _r === void 0 ? {} : _r, _s = _a.defaultEdge, defaultEdge = _s === void 0 ? {} : _s, _t = _a.modes, modes = _t === void 0 ? {} : _t;
        var _this = this;
        this.treeGroup = false;
        this.animate = false;
        this.registerEdgeList = [];
        this.registerBehaviors = [];
        this.diffHeight = 0;
        this.diffWidth = 0;
        this.layoutParams = {};
        this.util = new Util_1.FlowUtil();
        this.registerNodeByFront = function () {
            _this.registerNodeList.forEach(function (item) {
                var nodeDesc = item.nodeDesc;
                _this.G6.registerNode(item.nodeName, {
                    drawKeyShape: function (cfg, group) {
                        var _this = this;
                        var keyShape = null;
                        nodeDesc.forEach(function (node, index) {
                            if (index === 0) {
                                keyShape = _this.reloadDrawKeyShape(cfg, group, node);
                            }
                            else {
                                _this.reloadDrawKeyShape(cfg, group, node);
                            }
                        });
                        return keyShape;
                    },
                    reloadDrawKeyShape: function (cfg, group, node) {
                        var type = node.type, name = node.name, attrs = __rest(node, ["type", "name"]);
                        var other = {};
                        if (attrs.mainShape) {
                            other = {
                                width: this.size.width,
                                height: this.size.height
                            };
                        }
                        attrs = __assign(__assign({}, attrs), other);
                        return group.addShape(type, {
                            attrs: attrs,
                            name: name
                        });
                    }
                }, 'simple-node');
            });
        };
        this.reloadDrawKeyShape = function (cfg, group, node) {
            var type = node.type, name = node.name, attrs = __rest(node, ["type", "name"]);
            return group.addShape(type, {
                attrs: attrs,
                name: name
            });
        };
        this.edgeEndCallback = function (sourceNode, targetNode) {
            if (!_this.edgeCallback)
                return true;
            return _this.edgeCallback(sourceNode, targetNode);
        };
        this.container = container;
        var check = this.checkProps();
        if (!check)
            return;
        this.width = width;
        this.height = height;
        this.plugins = plugins;
        this.mode = mode;
        this.initEdges = initEdges;
        this.initNodes = initNodes;
        this.G6 = g6_1.default;
        this.registerNodes = registerNodes;
        this.edgeCallback = edgeCallback;
        this.layout = layout ? __assign(__assign({}, config_1.layoutSetting[layout]), layoutParams) : null;
        this.registerNodeList = registerNodeList || [];
        this.animate = animate;
        this.registerEdgeList = registerEdgeList;
        this.registerBehaviors = registerBehaviors;
        this.diffWidth = diffWidth;
        this.diffHeight = diffHeight;
        this.treeGroup = treeGroup;
        new BaseAnchor_1.default(g6_1.default);
        this.initRegister();
        this.init(defaultNode, defaultEdge, modes);
        if (this.diffHeight || this.diffWidth) {
            window.addEventListener('resize', this.util.debounce(function () { return _this.autoSize; }, 50));
        }
    }
    CvteWorkflow.prototype.init = function (defaultNode, defaultEdge, modes) {
        var _this = this;
        if (this.treeGroup) {
            this.graph = new g6_1.TreeGraph({
                container: this.container,
                width: this.width,
                height: this.height,
                enabledStack: true,
                plugins: __spreadArray([], this.plugins, true),
                modes: this.initMode(),
                layout: {
                    type: 'indented',
                    direction: 'LR',
                    dropCap: false,
                    indent: 300,
                    getHeight: function () {
                        return 60;
                    },
                },
                animate: this.animate,
                defaultNode: {
                    type: 'tree-node'
                },
                defaultEdge: {
                    type: 'cover-cricle'
                }
            });
            var handleCollapse_1 = function (e) {
                var target = e.target;
                var id = target.get('modelId');
                var item = _this.graph.findById(id);
                var nodeModel = item.getModel();
                nodeModel.collapsed = !nodeModel.collapsed;
                _this.graph.layout();
                _this.graph.setItemState(item, 'collapse', nodeModel.collapsed);
            };
            this.graph.on('collapse-text:click', function (e) {
                handleCollapse_1(e);
            });
            this.graph.on('collapse-back:click', function (e) {
                handleCollapse_1(e);
            });
        }
        else {
            this.graph = new g6_1.Graph({
                container: this.container,
                width: this.width,
                height: this.height,
                enabledStack: true,
                plugins: __spreadArray([], this.plugins, true),
                modes: this.initMode(modes),
                layout: this.layout,
                animate: this.animate,
                defaultNode: __assign({ type: 'flow-node' }, defaultNode),
                defaultEdge: __assign({ type: 'cvte-polyline' }, defaultEdge)
            });
        }
        if (this.mode) {
            this.graph.setMode(this.mode);
        }
        this.graph.set('edgeEndCallback', this.edgeEndCallback);
        document.addEventListener('click', function (e) {
            if (e.target['nodeName'] === 'CANVAS') {
                return;
            }
            _this.graph.set('noKeyDown', true);
        });
        this.initData();
    };
    CvteWorkflow.prototype.changeMode = function () { };
    CvteWorkflow.prototype.getWorkflowData = function () { };
    CvteWorkflow.prototype.onSelectedItem = function () { };
    CvteWorkflow.prototype.addNode = function () { };
    CvteWorkflow.prototype.addEdge = function () { };
    CvteWorkflow.prototype.checkProps = function () {
        if (!this.container) {
            new Error("container is required!");
            return false;
        }
        return true;
    };
    CvteWorkflow.prototype.initMode = function (modes) {
        if (modes === void 0) { modes = {}; }
        if (this.treeGroup) {
            return __assign({ default: ['drag-canvas', { type: "zoom-canvas", sensitivity: 1 }], edit: ['drag-canvas', 'cover-hover-node', 'cover-hover-anchor', 'cover-drag-node', 'cover-drag-anchor', 'cover-select-node', 'cover-hover-edge', 'cover-delete-item', 'cover-add-node', 'cover-align-node'], view: ['drag-canvas', 'cover-select-node'] }, modes);
        }
        return __assign({ default: ['drag-canvas', { type: "zoom-canvas", sensitivity: 1 }], edit: ['drag-canvas', 'cover-hover-node', 'cover-hover-anchor', 'cover-drag-node', 'cover-drag-anchor', 'cover-select-node', 'cover-hover-edge', 'cover-delete-item', 'cover-add-node', 'cover-align-node'], view: ['drag-canvas', 'cover-select-node'] }, modes);
    };
    CvteWorkflow.prototype.initData = function () {
        var _this = this;
        var data = {
            nodes: this.initNodes,
            edges: this.initEdges
        };
        this.graph.data(data);
        this.graph.render();
        if (this.layout && this.animate) {
            console.log('我是la');
            setTimeout(function () {
                _this.graph.layout();
            }, 200);
        }
    };
    CvteWorkflow.prototype.initRegister = function () {
        var _this = this;
        __spreadArray(__spreadArray(__spreadArray([], nodes_1.default, true), [BaseNode_1.default, FlowNode_1.default], false), this.registerNodes, true).forEach(function (SelfNode) {
            new SelfNode(_this.G6);
        });
        __spreadArray(__spreadArray([], behavior_1.default, true), this.registerBehaviors, true).forEach(function (Behavior) {
            new Behavior(_this.G6);
        });
        [CvtePolyline_1.default].forEach(function (SelfNode) {
            new SelfNode(_this.G6);
        });
        this.registerSideEdge();
        (0, CvtePolyline1_1.default)(g6_1.default);
        (0, circle_1.default)(g6_1.default);
        (0, SimpleNode_1.default)(g6_1.default);
        (0, CircleNode_1.default)(g6_1.default);
    };
    CvteWorkflow.prototype.autoSize = function () {
        var width = window.innerWidth - this.diffWidth;
        var height = window.innerHeight - this.diffHeight;
        this.changeSize(width, height);
    };
    CvteWorkflow.prototype.setData = function (data) {
        this.graph.data(data);
        this.graph.render();
    };
    CvteWorkflow.prototype.setMode = function (mode) {
        this.graph.setMode(mode);
    };
    CvteWorkflow.prototype.changeSize = function (width, height) {
        this.graph.changeSize(width, height);
    };
    CvteWorkflow.prototype.on = function (eventName, handler) {
        this.graph.on(eventName, handler);
    };
    CvteWorkflow.prototype.fitView = function (size) {
        if (size === void 0) { size = 20; }
        this.graph.fitView(size);
    };
    CvteWorkflow.prototype.fitCenter = function () {
        this.graph.fitCenter();
    };
    CvteWorkflow.prototype.registerSideEdge = function () {
        var _this = this;
        this.registerEdgeList.forEach(function (item) {
            var name = item.name, extended = item.extended, register = item.register;
            if (extended) {
                _this.G6.registerEdge(name, register, extended);
            }
            else {
                _this.G6.registerEdge(name, register);
            }
        });
    };
    return CvteWorkflow;
}());
exports["default"] = CvteWorkflow;


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = require("@antv/g6");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerNode_1 = __webpack_require__(4);
var nodeStyle_1 = __importDefault(__webpack_require__(6));
var AnchorItem_1 = __importDefault(__webpack_require__(7));
var stateList = {
    'hoverNode': function (item, value) {
        var group = item.getContainer();
        if (value) {
            group.showAnchor();
        }
        else {
            group.clearAnchor();
        }
    },
    selectNode: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
        if (value) {
            current.attr("opacity", 1);
        }
        else {
            current.attr("opacity", 0.6);
        }
    },
    visibleNode: function (item, value) {
        var group = item.get('group');
        var nodeModel = item.getModel();
        if (value === 'hide') {
            var startPos = nodeModel.startPos;
            var endPos_1 = nodeModel.endPos;
            var distanceX = Math.abs(endPos_1.x - startPos.x);
            var distanceY = Math.abs(endPos_1.Y - startPos.Y);
            var disX_1 = 20 / 1000 * distanceX;
            var disY_1 = 20 / 1000 * distanceY;
            var startX_1 = nodeModel.startPos.x;
            var startY_1 = nodeModel.startPos.x;
            var inc_1 = setInterval(function () {
                if (startX_1 < endPos_1.x) {
                    clearInterval(inc_1);
                }
                item.update({
                    x: startX_1 -= disX_1,
                    y: startY_1 -= disY_1
                });
            }, 20);
        }
        else {
        }
    }
};
var calcStrLen = function calcStrLen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
            len++;
        }
        else {
            len += 2;
        }
    }
    return len;
};
var BaseNode = (function (_super) {
    __extends(BaseNode, _super);
    function BaseNode(Grid, extendsed) {
        if (extendsed === void 0) { extendsed = false; }
        var _this = _super.call(this, Grid) || this;
        _this.name = 'base-node';
        _this.size = { width: 180, height: 70 };
        _this.canvas = null;
        if (!extendsed)
            _this.register();
        return _this;
    }
    BaseNode.prototype.draw = function (cfg, group, inc) {
        this.size = this.computeNodeSize(cfg);
        var keyShape = this.drawKeyShape(cfg, group);
        return keyShape;
    };
    BaseNode.prototype.afterDraw = function (cfg, group, inc) {
    };
    BaseNode.prototype.updateShape = function (group, _a) {
        var _b = _a.index, index = _b === void 0 ? 0 : _b, props = __rest(_a, ["index"]);
        var currentShape = group.getChildByIndex(index);
        currentShape.attr(props);
    };
    BaseNode.prototype.getTextWidth = function (text) {
        this.canvas = this.canvas || document.createElement("canvas");
        var context = this.canvas.getContext("2d");
        context.font = "10px";
        var metrics = context.measureText(text);
        return metrics.width - text.length * 2;
    };
    BaseNode.prototype.getTextWidth1 = function (fontSize, text) {
        var span = document.createElement("span");
        span.style.fontSize = fontSize;
        var result = {};
        result.width = span.offsetWidth;
        result.height = span.offsetWidth;
        span.style.visibility = "hidden";
        document.body.appendChild(span);
        if (typeof span.textContent != "undefined")
            span.textContent = text;
        else
            span.innerText = text;
        result = span.offsetWidth - result.width;
        span.parentNode.removeChild(span);
        return result - text.length * 1.5;
    };
    BaseNode.prototype.getTextWidth2 = function (fontSize, text) {
        var fontWidth = fontSize;
        var width = this.calcStrLen(text) * fontWidth;
        return width / 2;
    };
    BaseNode.prototype.calcStrLen = function (str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
                len = ++len + 0.2;
            }
            else {
                len += 2;
            }
        }
        return len;
    };
    BaseNode.prototype.withByContain = function (width, fontSize) {
        var fontWidth = fontSize;
        return width * 2 / fontWidth;
    };
    BaseNode.prototype.textWidthToEllipsis = function (_a) {
        var text = _a.text, _b = _a.threshold, threshold = _b === void 0 ? 4 : _b, _c = _a.width, width = _c === void 0 ? this.size.width : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 12 : _d;
        var containCharacter = this.withByContain(width, fontSize) - threshold;
        var finalText = '';
        var len = 0;
        for (var i = 0; i < text.length; i++) {
            if (text.charCodeAt(i) > 0 && text.charCodeAt(i) < 128) {
                len++;
            }
            else {
                len += 2;
            }
            if (len > containCharacter) {
                finalText += '...';
                break;
            }
            finalText += text[i];
        }
        return finalText;
    };
    BaseNode.prototype.drawKeyShape = function (cfg, group) {
        var width = this.size.width;
        var height = this.size.height;
        var _a = cfg.style, style = _a === void 0 ? {} : _a;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.base.origin), { width: width, height: height }), style);
        var keyShape = group.addShape('rect', {
            attrs: attrs,
            name: 'base-node',
            className: 'base-node'
        });
        this.initAnchor(group);
        return keyShape;
    };
    BaseNode.prototype.initAnchor = function (group, cfg) {
        var _this = this;
        if (cfg === void 0) { cfg = {}; }
        group.anchorShapes = [];
        group.showAnchor = function () {
            _this.drawAnchor(group, cfg);
        };
        group.clearAnchor = function () {
            _this.clearAnchor(group);
        };
    };
    BaseNode.prototype.drawAnchor = function (group, cfg) {
        if (cfg === void 0) { cfg = {}; }
        var bbox = group.get('children')[0].getBBox();
        this.getAnchorPoints(cfg).forEach(function (point, index) {
            var anchorContainer = group.addGroup();
            new AnchorItem_1.default({
                group: anchorContainer,
                index: index,
                model: {
                    style: {
                        x: bbox.minX + bbox.width * point[0],
                        y: bbox.minY + bbox.height * point[1]
                    }
                }
            });
            group.anchorShapes.push(anchorContainer);
        });
    };
    BaseNode.prototype.clearAnchor = function (group) {
        group.anchorShapes && group.anchorShapes.forEach(function (a) { return a.remove(); });
        group.anchorShapes = [];
    };
    BaseNode.prototype.computeNodeSize = function (cfg) {
        var size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
        var width = size[0] ? size[0] : 180;
        var height = size[1] ? size[1] : 70;
        return { width: width, height: height };
    };
    BaseNode.prototype.getAnchorPoints = function (cfg) {
        return [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
        ];
    };
    BaseNode.prototype.setState = function (name, value, item) {
        stateList[name] && stateList[name].call(this, item, value);
    };
    return BaseNode;
}(registerNode_1.RegisterNode));
exports["default"] = BaseNode;


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterNode = void 0;
var registerManger_1 = __importDefault(__webpack_require__(5));
var RegisterNode = (function (_super) {
    __extends(RegisterNode, _super);
    function RegisterNode(G6) {
        var _this = _super.call(this, G6) || this;
        _this.name = '';
        _this.extendedName = '';
        return _this;
    }
    RegisterNode.prototype.register = function () {
        var self = this;
        this.G6.registerNode(this.name, {
            draw: function (cfg, group) {
                return self.draw.call(self, cfg, group, this);
            },
            afterDraw: function (cfg, group) {
                return self.afterDraw.call(self, cfg, group, this);
            },
            update: function (cfg, group) {
                self.update.call(self, cfg, group, this);
            },
            afterUpdate: function (cfg, group) {
                self.afterUpdate.call(self, cfg, group, this);
            },
            setState: function (name, value, item) {
                self.setState.call(self, name, value, item, this);
            },
            getAnchorPoints: function (cfg) {
                return self.getAnchorPoints.call(self, cfg, this);
            },
            drawAnchor: function () {
                return self.drawAnchor && self.drawAnchor.apply(self, arguments);
            },
            test: function () { }
        }, this.extendedName);
    };
    ;
    RegisterNode.prototype.draw = function (cfg, group, inc) {
        var keyShape = group.addShape('rect', {
            attrs: {
                width: 170,
                height: 70,
                fill: '#C7E4FF',
                stroke: '#61B3FF',
                opacity: 0.6,
                lineWidth: 2,
                radius: 8,
                cursor: 'move'
            },
            name: 'power-rect-node',
            className: 'base-node'
        });
        return keyShape;
    };
    ;
    RegisterNode.prototype.update = function (cfg, group, inc) { };
    ;
    RegisterNode.prototype.afterUpdate = function (cfg, group, inc) { };
    ;
    RegisterNode.prototype.afterDraw = function (cfg, group, inc) { };
    RegisterNode.prototype.setState = function (name, value, item, inc) { };
    ;
    RegisterNode.prototype.drawAnchor = function (group) { };
    RegisterNode.prototype.getAnchorPoints = function (cfg, inc) {
        return [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
        ];
    };
    return RegisterNode;
}(registerManger_1.default));
exports.RegisterNode = RegisterNode;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var RegisterManger = (function () {
    function RegisterManger(G6) {
        this.extendedName = null;
        this.G6 = G6;
    }
    RegisterManger.prototype.register = function (events) {
        this.G6[this.registerType](this.name, {}, this.extendedName);
    };
    return RegisterManger;
}());
exports["default"] = RegisterManger;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    default: {
        cursor: 'move'
    },
    base: {
        origin: {
            fill: '#C7E4FF',
            stroke: '#61B3FF',
            opacity: 0.6,
            lineWidth: 2,
            radius: 8,
            cursor: 'move'
        }
    },
    leftText: {
        origin: {
            fill: '#014445',
            fontSize: 12,
            x: 12,
            y: 12,
            textBaseline: 'middle'
        }
    },
    titleText: {
        origin: {
            fontSize: 14,
            stroke: '#2E4553',
            textBaseline: 'middle',
            textAlign: "center",
            cursor: 'move'
        }
    },
    statusShape: {
        r: 3,
        text: {
            textBaseline: 'middle',
            textAlign: "center",
            fontSize: 12,
        },
        origin: {
            fill: '#00BB2F',
        },
        success: {
            fill: '#00BB2F',
        },
        waiting: {
            fill: '#FE9201',
        },
        underway: {
            fill: '#1990FF',
        },
        faild: {
            fill: '#CA0101'
        },
        stop: {
            fill: '#72007B'
        }
    },
    rightText: {
        origin: {
            fill: '#014445',
            fontSize: 12,
            textBaseline: 'middle',
            textAlign: "right",
        }
    }
};


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var item_1 = __importDefault(__webpack_require__(8));
var util_1 = __webpack_require__(9);
var Anchor = (function (_super) {
    __extends(Anchor, _super);
    function Anchor(props) {
        var _this = _super.call(this, (0, util_1.deepMix)(props, {
            type: "anchor",
            isActived: true,
            model: {
                type: "anchor",
                style: {
                    r: 4,
                    fill: "#fff",
                    shadowBlur: 4,
                    shadowColor: "#666",
                    cursor: "crosshair"
                }
            }
        })) || this;
        _this.enableCapture(true);
        _this.isAnchor = true;
        _this.toFront();
        return _this;
    }
    Anchor.prototype.showHotpot = function () {
        this.hotpot = this.getContainer().addShape('marker', {
            attrs: __assign(__assign({}, this.get('model').style), { r: 12, fill: '#1890FF', fillOpacity: .25 }),
            name: 'hotpot-shape',
            draggable: true,
        });
        this.hotpot.toFront();
    };
    Anchor.prototype.setHotspotActived = function (active) {
        this.hotpot && active && this.hotpot.attr ? this.hotpot.attr && this.hotpot.attr({ r: 14, fill: '#0084FF' }) : this.hotpot.attr && this.hotpot.attr({ r: 12, fill: '#1890FF' });
    };
    return Anchor;
}(item_1.default));
exports["default"] = Anchor;


/***/ }),
/* 8 */
/***/ ((module) => {

"use strict";
module.exports = require("@antv/g6-core/lib/item/item");

/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";
module.exports = require("@antv/util");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var BaseNode_1 = __importDefault(__webpack_require__(3));
var nodeStyle_1 = __importDefault(__webpack_require__(6));
var FlowNode = (function (_super) {
    __extends(FlowNode, _super);
    function FlowNode(Grid) {
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'flow-node';
        _this.register();
        return _this;
    }
    FlowNode.prototype.draw = function (cfg, group, inc) {
        this.size = this.computeNodeSize(cfg);
        var keyShape = this.drawKeyShape(cfg, group);
        this.drawTitleText(cfg, group);
        this.drawIcon(cfg.icon1, group, 6);
        this.drawIcon(cfg.icon2, group, 24);
        this.drawRightText(cfg, group);
        this.drawStatusShape(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    };
    FlowNode.prototype.afterDraw = function (cfg, group) {
        if (cfg.taskStatusValue === 3) {
            this.drawStatusAnimateShape(cfg, group);
        }
        if (cfg.lineDashAnimate) {
            this.drawBorderAnimateShape(cfg, group);
        }
    };
    FlowNode.prototype.addShapeApi = function (cfg, group) {
        var _this = this;
        var updateShape = function (_a) {
            var index = _a.index, props = __rest(_a, ["index"]);
            var currentShape = group.getChildByIndex(index);
            currentShape.attr(props);
        };
        var updateKeyShape = function (props) {
            updateShape(__assign({ index: 0 }, props));
            return group;
        };
        var updateLeftText = function (props) {
            updateShape(__assign({ index: 1 }, props));
            return group;
        };
        var updateText = function (props) {
            updateShape(__assign({ index: 2 }, props));
            return group;
        };
        var updateRightText = function (props) {
            updateShape(__assign({ index: 5 }, props));
            return group;
        };
        var updateIcon = function (props) {
            updateShape(__assign({ index: 3 }, props));
        };
        var size = this.size;
        var textWidthToEllipsis = function (_a) {
            var text = _a.text, _b = _a.threshold, threshold = _b === void 0 ? 4 : _b, _c = _a.width, width = _c === void 0 ? size.width : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 14 : _d;
            return _this.textWidthToEllipsis({ text: text, threshold: threshold, width: width, fontSize: fontSize });
        };
        group.updateKeyShape = updateKeyShape;
        group.updateText = updateText;
        group.updateRightText = updateRightText;
        group.updateIcon = updateIcon;
        group.textWidthToEllipsis = textWidthToEllipsis;
    };
    FlowNode.prototype.drawLeftText = function (cfg, group) {
        var leftText = cfg.leftText, _a = cfg.leftTextStyle, leftTextStyle = _a === void 0 ? {} : _a;
        if (!leftText)
            return;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.leftText.origin), { text: leftText }), leftTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-left-text',
            className: 'node-left-text'
        });
    };
    FlowNode.prototype.drawRightText = function (cfg, group) {
        var rightText = cfg.rightText, _a = cfg.rightTextStyle, rightTextStyle = _a === void 0 ? {} : _a;
        var _b = this.size, width = _b.width, height = _b.height;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.rightText.origin), { text: rightText ? rightText : '', x: width - 12, y: height - 12 }), rightTextStyle);
        group.addShape('text', {
            attrs: attrs,
            name: 'power-right-text',
            className: 'right-text'
        });
    };
    FlowNode.prototype.drawTitleText = function (cfg, group) {
        var titleText = cfg.titleText, _a = cfg.titleTextStyle, titleTextStyle = _a === void 0 ? {} : _a;
        if (!titleText)
            return;
        var width = this.size.width;
        var height = this.size.height;
        titleText = this.textWidthToEllipsis({ text: titleText, fontSize: 14, width: this.size.width });
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.titleText.origin), { text: titleText, x: width / 2, y: height / 2 }), titleTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-title-text',
            className: 'node-title-text',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.getStatusStyle = function (cfg) {
        var taskStatusValue = cfg.taskStatusValue;
        var statusArr = [3, 4, 5, 10];
        var style = {
            3: nodeStyle_1.default.statusShape.underway,
            1: nodeStyle_1.default.statusShape.waiting,
            5: nodeStyle_1.default.statusShape.success,
            4: nodeStyle_1.default.statusShape.faild,
            10: nodeStyle_1.default.statusShape.stop
        };
        if (!taskStatusValue || statusArr.indexOf(taskStatusValue) < 0)
            taskStatusValue = 1;
        return style[taskStatusValue];
    };
    FlowNode.prototype.drawStatusShape = function (cfg, group) {
        var width = this.size.width;
        var taskStatus = cfg.taskStatus;
        if (!taskStatus)
            return;
        var selfStyle = this.getStatusStyle(cfg);
        this.drawStatusText(cfg, group);
        var attrs = __assign(__assign({}, selfStyle), { r: nodeStyle_1.default.statusShape.r, x: width - this.getTextWidth2(12, taskStatus) - 10, y: 12 });
        group.addShape('circle', {
            attrs: attrs,
            name: 'power-status-text',
            className: 'status-text',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.drawStatusText = function (cfg, group) {
        var width = this.size.width;
        var taskStatus = cfg.taskStatus, _a = cfg.taskStatusStyle, taskStatusStyle = _a === void 0 ? {} : _a;
        var selfStyle = this.getStatusStyle(cfg);
        var attrs = __assign(__assign(__assign(__assign({}, selfStyle), nodeStyle_1.default.statusShape.text), { text: taskStatus, x: width - this.getTextWidth2(12, taskStatus) / 2 - 4, y: 12 }), taskStatusStyle);
        group.addShape('text', {
            attrs: attrs,
            name: 'power-status-node',
            className: 'status-node',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.drawIcon = function (icon, group, x) {
        if (x === void 0) { x = 6; }
        var height = this.size.height;
        group.addShape("image", {
            attrs: {
                img: icon,
                x: x,
                y: height - 20,
                width: 16,
                height: 16,
                shadowColor: '#E6E6E6',
                shadowBlur: 4,
            },
            name: "image-shape"
        });
    };
    FlowNode.prototype.drawStatusAnimateShape = function (cfg, group) {
        var width = this.size.width;
        var x = width - 52;
        var y = 12;
        var r = nodeStyle_1.default.statusShape.r;
        var back1 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -3, 0.6);
        var back2 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -2, 0.6);
        var back3 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -1, 0.6);
        this.createStatusAnimate(r, back1, 0);
        this.createStatusAnimate(r, back2, 1000);
        this.createStatusAnimate(r, back3, 2000);
    };
    FlowNode.prototype.drawBorderAnimateShape = function (cfg, group) {
        var keyShape = group.getChildByIndex(0);
        var index = 0;
        var lineDash = [6, 2, 1, 2];
        keyShape.animate(function () {
            index++;
            if (index > 9) {
                index = 0;
            }
            return {
                lineDash: lineDash,
                lineDashOffset: -index
            };
        }, {
            repeat: true,
            duration: 4000,
        });
    };
    FlowNode.prototype.createStatusAnimate = function (r, shape, delay) {
        shape.animate({
            r: r + 5,
            opacity: 0.1
        }, {
            duration: 3000,
            easing: "easeCubic",
            delay: delay,
            repeat: true
        });
    };
    FlowNode.prototype.createStatusAnimateShape = function (cfg, group, name, zIndex, opacity) {
        var width = this.size.width;
        var x = width - this.getTextWidth2(12, cfg.taskStatus) - 10;
        var y = 12;
        return group.addShape("circle", {
            zIndex: zIndex,
            attrs: {
                x: x,
                y: y,
                r: nodeStyle_1.default.statusShape.r,
                fill: nodeStyle_1.default.statusShape.underway.fill,
                opacity: opacity
            },
            name: name
        });
    };
    return FlowNode;
}(BaseNode_1.default));
exports["default"] = FlowNode;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AnchorItem_1 = __importDefault(__webpack_require__(7));
var nodeStyle_1 = __importDefault(__webpack_require__(6));
var stateList = {
    'hoverNode': function (item, value) {
        var group = item.getContainer();
        if (value) {
            group.showAnchor();
        }
        else {
            group.clearAnchor();
        }
    },
    selectNode: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
        if (value) {
            current.attr("opacity", 1);
        }
        else {
            current.attr("opacity", 0.6);
        }
    },
    visibleNode: function (item, value) {
        var group = item.get('group');
        var nodeModel = item.getModel();
        if (value === 'hide') {
            var startPos = nodeModel.startPos;
            var endPos_1 = nodeModel.endPos;
            var distanceX = Math.abs(endPos_1.x - startPos.x);
            var distanceY = Math.abs(endPos_1.Y - startPos.Y);
            var disX_1 = 20 / 1000 * distanceX;
            var disY_1 = 20 / 1000 * distanceY;
            var startX_1 = nodeModel.startPos.x;
            var startY_1 = nodeModel.startPos.x;
            var inc_1 = setInterval(function () {
                if (startX_1 < endPos_1.x) {
                    clearInterval(inc_1);
                }
                item.update({
                    x: startX_1 -= disX_1,
                    y: startY_1 -= disY_1
                });
            }, 20);
        }
        else {
        }
    }
};
function SimpleNode(Grid) {
    Grid.registerNode('simple-node', {
        draw: function (cfg, group, inc) {
            this.size = this.computeNodeSize(cfg);
            var keyShape = this.drawKeyShape(cfg, group);
            this.initAnchor(group);
            return keyShape;
        },
        drawKeyShape: function (cfg, group) {
            var width = this.size.width;
            var height = this.size.height;
            var _a = cfg.style, style = _a === void 0 ? {} : _a;
            var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.base.origin), { fill: '#BB0552', width: width, height: height }), style);
            var keyShape = group.addShape('rect', {
                attrs: attrs,
                name: 'base-node',
                className: 'base-node'
            });
            return keyShape;
        },
        initAnchor: function (group) {
            var _this = this;
            group.anchorShapes = [];
            group.showAnchor = function () {
                _this.drawAnchor(group);
            };
            group.clearAnchor = function () {
                _this.clearAnchor(group);
            };
        },
        clearAnchor: function (group) {
            group.anchorShapes && group.anchorShapes.forEach(function (a) { return a.remove(); });
            group.anchorShapes = [];
        },
        drawAnchor: function (group) {
            var bbox = group.get('children')[0].getBBox();
            this.getAnchorPoints().forEach(function (point, index) {
                var anchorContainer = group.addGroup();
                new AnchorItem_1.default({
                    group: anchorContainer,
                    index: index,
                    model: {
                        style: {
                            x: bbox.minX + bbox.width * point[0],
                            y: bbox.minY + bbox.height * point[1]
                        }
                    }
                });
                group.anchorShapes.push(anchorContainer);
            });
        },
        computeNodeSize: function (cfg) {
            var size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
            var width = size[0] ? size[0] : 180;
            var height = size[1] ? size[1] : 70;
            return { width: width, height: height };
        },
        getAnchorPoints: function () {
            return [
                [0.5, 0],
                [1, 0.5],
                [0.5, 1],
                [0, 0.5],
            ];
        },
        setState: function (name, value, item) {
            stateList[name] && stateList[name].call(this, item, value);
        }
    });
}
exports["default"] = SimpleNode;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var MaxCircleNode_1 = __importDefault(__webpack_require__(13));
var MaxTrigonNode_1 = __importDefault(__webpack_require__(14));
var MaxDiamondNode_1 = __importDefault(__webpack_require__(15));
var TreeNode_1 = __importDefault(__webpack_require__(16));
var StrategyNode_1 = __importDefault(__webpack_require__(17));
exports["default"] = [MaxCircleNode_1.default, MaxTrigonNode_1.default, MaxDiamondNode_1.default, TreeNode_1.default, StrategyNode_1.default];


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var BaseNode_1 = __importDefault(__webpack_require__(3));
var nodeStyle_1 = __importDefault(__webpack_require__(6));
var MaxCircleNode = (function (_super) {
    __extends(MaxCircleNode, _super);
    function MaxCircleNode(Grid) {
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'max-circle-node';
        _this.register();
        return _this;
    }
    MaxCircleNode.prototype.drawKeyShape = function (cfg, group) {
        var width = this.size.width;
        var height = this.size.height;
        var _a = cfg.style, style = _a === void 0 ? {} : _a, _b = cfg.r, r = _b === void 0 ? 20 : _b;
        var attrs = __assign(__assign(__assign(__assign({}, nodeStyle_1.default.default), { fill: '#0577BB', stroke: '#028080' }), style), { x: r, y: r, r: r });
        var keyShape = group.addShape('circle', {
            attrs: attrs,
            name: 'max-circle-node',
            className: 'max-circle-node'
        });
        this.initAnchor(group);
        this.drawIcon(cfg, group);
        this.drawText(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    };
    MaxCircleNode.prototype.addShapeApi = function (cfg, group) {
        var _this = this;
        var updateKeyShape = function (props) {
            _this.updateShape(group, __assign({ index: 0 }, props));
            return group;
        };
        var updateIcon = function (props) {
            _this.updateShape(group, __assign({ index: 1 }, props));
        };
        var updateText = function (props) {
            _this.updateShape(group, __assign({ index: 2 }, props));
        };
        group.updateKeyShape = updateKeyShape;
        group.updateIcon = updateIcon;
        group.updateText = updateText;
    };
    MaxCircleNode.prototype.drawIcon = function (cfg, group) {
        var _a = cfg.r, r = _a === void 0 ? 20 : _a;
        group.addShape('image', {
            attrs: __assign(__assign({}, nodeStyle_1.default.default), { img: cfg.icon, x: r - (cfg.iconWidth || 20) / 2, y: r - (cfg.iconHeight || 20) / 2, width: cfg.iconWidth || 20, height: cfg.iconHeight || 20 }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    };
    MaxCircleNode.prototype.drawText = function (cfg, group) {
        var text = cfg.text, _a = cfg.style, style = _a === void 0 ? {} : _a, _b = cfg.r, r = _b === void 0 ? 20 : _b;
        var _c = style.textStyle, textStyle = _c === void 0 ? {} : _c;
        group.addShape('text', {
            attrs: __assign({ text: text ? text : '', x: r, y: r * 2 + 8, textAlign: 'center', textBaseline: 'middle', fill: '#666', fontSize: 10 }, textStyle),
        });
    };
    return MaxCircleNode;
}(BaseNode_1.default));
exports["default"] = MaxCircleNode;


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var BaseNode_1 = __importDefault(__webpack_require__(3));
var nodeStyle_1 = __importDefault(__webpack_require__(6));
var MaxCircleNode = (function (_super) {
    __extends(MaxCircleNode, _super);
    function MaxCircleNode(Grid, isRegister) {
        if (isRegister === void 0) { isRegister = true; }
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'max-trigon-node';
        isRegister && _this.register();
        return _this;
    }
    MaxCircleNode.prototype.drawKeyShape = function (cfg, group) {
        var width = this.size.width;
        var height = this.size.height;
        var _a = cfg.style, style = _a === void 0 ? {} : _a;
        var _b = style.sideLength, sideLength = _b === void 0 ? 100 : _b, _c = style.position, position = _c === void 0 ? 'top' : _c;
        var side8 = sideLength * 0.8;
        var side5 = sideLength * 0.5;
        var side1 = sideLength;
        var pointsPos = {
            right: [
                [0, 0],
                [0, side1],
                [side8, side5]
            ],
            bottom: [
                [0, 0],
                [side1, 0],
                [side5, side8]
            ],
            top: [
                [side5, 0],
                [0, side8],
                [side1, side8]
            ],
            left: [
                [0, side5],
                [side8, 0],
                [side8, side1]
            ]
        };
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.default), { points: pointsPos[position], fill: '#0577BB', stroke: '#028080' }), style);
        var keyShape = group.addShape('polygon', {
            attrs: attrs,
            name: 'max-trigon-node',
            className: 'max-trigon-node'
        });
        this.initAnchor(group, cfg);
        this.drawIcon(cfg, group);
        return keyShape;
    };
    MaxCircleNode.prototype.drawIcon = function (cfg, group) {
        var _a = cfg.style, _b = _a.sideLength, sideLength = _b === void 0 ? 100 : _b, _c = _a.position, position = _c === void 0 ? 'top' : _c;
        var iconWidth = cfg.iconWidth || 20;
        var iconHeight = cfg.iconHeight || 20;
        var inValue = {
            top: {
                x: 0,
                y: 0,
            },
            right: {
                x: -10,
                y: 0
            },
            bottom: {
                x: 0,
                y: -20
            },
            left: {
                x: 0,
                y: 0
            }
        };
        var instance = inValue[position];
        var x = sideLength / 2 - iconWidth / 2 + instance.x;
        var y = sideLength / 2 - iconHeight / 2 + instance.y;
        group.addShape('image', {
            attrs: __assign(__assign({}, nodeStyle_1.default.default), { img: cfg.icon, x: x, y: y, width: iconWidth, height: iconHeight }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    };
    MaxCircleNode.prototype.getAnchorPoints = function (cfg) {
        var _a = cfg.style, _b = _a.sideLength, sideLength = _b === void 0 ? 100 : _b, _c = _a.position, position = _c === void 0 ? 'top' : _c;
        if (position === 'top' || position === 'bottom') {
            return [
                [0.5, 0],
                [0.75, 0.5],
                [0.5, 1],
                [0.25, 0.5],
            ];
        }
        return [
            [0.5, 0.25],
            [1, 0.5],
            [0.5, 0.75],
            [0, 0.5],
        ];
    };
    return MaxCircleNode;
}(BaseNode_1.default));
exports["default"] = MaxCircleNode;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var BaseNode_1 = __importDefault(__webpack_require__(3));
var nodeStyle_1 = __importDefault(__webpack_require__(6));
var MaxDiamondNode = (function (_super) {
    __extends(MaxDiamondNode, _super);
    function MaxDiamondNode(Grid, isRegister) {
        if (isRegister === void 0) { isRegister = true; }
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'max-diamond-node';
        isRegister && _this.register();
        return _this;
    }
    MaxDiamondNode.prototype.drawKeyShape = function (cfg, group) {
        var _a = cfg.style, style = _a === void 0 ? {} : _a, _b = cfg.sideLength, sideLength = _b === void 0 ? 50 : _b;
        var dot = sideLength / 2;
        var points = [
            [dot, 0],
            [0, dot],
            [dot, sideLength],
            [sideLength, dot]
        ];
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.default), { path: [
                ['M', dot, 0],
                ['L', 0, dot],
                ['L', dot, sideLength],
                ['L', sideLength, dot],
                ['Z']
            ], fill: '#0577BB', stroke: '#028080' }), style);
        var keyShape = group.addShape('path', {
            attrs: attrs,
            name: 'max-diamond-node',
            className: 'max-diamond-node'
        });
        this.initAnchor(group, cfg);
        this.drawIcon(cfg, group);
        this.drawText(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    };
    MaxDiamondNode.prototype.addShapeApi = function (cfg, group) {
        var _this = this;
        var updateKeyShape = function (props) {
            _this.updateShape(group, __assign({ index: 0 }, props));
            return group;
        };
        var updateIcon = function (props) {
            _this.updateShape(group, __assign({ index: 1 }, props));
        };
        var updateText = function (props) {
            _this.updateShape(group, __assign({ index: 2 }, props));
        };
        group.updateKeyShape = updateKeyShape;
        group.updateIcon = updateIcon;
        group.updateText = updateText;
    };
    MaxDiamondNode.prototype.drawIcon = function (cfg, group) {
        var _a = cfg.style.position, position = _a === void 0 ? 'top' : _a, _b = cfg.sideLength, sideLength = _b === void 0 ? 50 : _b;
        var iconWidth = cfg.iconWidth || 20;
        var iconHeight = cfg.iconHeight || 20;
        var x = sideLength / 2 - iconWidth / 2;
        var y = sideLength / 2 - iconHeight / 2;
        group.addShape('image', {
            attrs: __assign(__assign({}, nodeStyle_1.default.default), { img: cfg.icon, x: x, y: y, width: iconWidth, height: iconHeight }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    };
    MaxDiamondNode.prototype.drawText = function (cfg, group) {
        var _a = cfg.style, style = _a === void 0 ? {} : _a, _b = cfg.sideLength, sideLength = _b === void 0 ? 50 : _b;
        var _c = style.textStyle, textStyle = _c === void 0 ? {} : _c;
        if (cfg.text) {
            group.addShape('text', {
                attrs: __assign({ x: sideLength / 2, y: sideLength + 8, textAlign: 'center', textBaseline: 'middle', text: cfg.text, fill: '#666', fontSize: 10 }, textStyle),
                draggable: true,
                name: 'zhao'
            });
        }
    };
    return MaxDiamondNode;
}(BaseNode_1.default));
exports["default"] = MaxDiamondNode;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var BaseNode_1 = __importDefault(__webpack_require__(3));
var colors = {
    B: '#5B8FF9',
    R: '#F46649',
    Y: '#EEBC20',
    G: '#5BD8A6',
    DI: '#A7A7A7',
};
var stateList = {
    'hoverNode': function (item, value) {
        var group = item.getContainer();
        if (value) {
            group.showAnchor();
        }
        else {
            group.clearAnchor();
        }
    },
    selectNode: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
        if (value) {
            current.attr("opacity", 1);
        }
        else {
            current.attr("opacity", 0.6);
        }
    },
    visibleNode: function (item, value) {
        var group = item.get('group');
        var nodeModel = item.getModel();
        if (value === 'hide') {
            var startPos = nodeModel.startPos;
            var endPos_1 = nodeModel.endPos;
            var distanceX = Math.abs(endPos_1.x - startPos.x);
            var distanceY = Math.abs(endPos_1.Y - startPos.Y);
            var disX_1 = 20 / 1000 * distanceX;
            var disY_1 = 20 / 1000 * distanceY;
            var startX_1 = nodeModel.startPos.x;
            var startY_1 = nodeModel.startPos.x;
            var inc_1 = setInterval(function () {
                if (startX_1 < endPos_1.x) {
                    clearInterval(inc_1);
                }
                item.update({
                    x: startX_1 -= disX_1,
                    y: startY_1 -= disY_1
                });
            }, 20);
        }
        else {
        }
    },
    collapse: function (item, value) {
        var group = item.getContainer();
        var collapseText = group.find(function (e) { return e.get('name') === 'collapse-text'; });
        if (collapseText) {
            if (!value) {
                collapseText.attr({
                    text: '-',
                });
            }
            else {
                collapseText.attr({
                    text: '+',
                });
            }
        }
    }
};
var TreeNode = (function (_super) {
    __extends(TreeNode, _super);
    function TreeNode(Grid) {
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'tree-node';
        _this.extendedName = 'rect';
        _this.register();
        return _this;
    }
    TreeNode.prototype.draw = function (cfg, group, inc) {
        var _a = cfg.name, name = _a === void 0 ? '' : _a, variableName = cfg.variableName, variableValue = cfg.variableValue, variableUp = cfg.variableUp, label = cfg.label, collapsed = cfg.collapsed, currency = cfg.currency, status = cfg.status, rate = cfg.rate, _b = cfg.width, width = _b === void 0 ? 202 : _b, _c = cfg.height, height = _c === void 0 ? 60 : _c;
        var grey = '#CED4D9';
        var rectConfig = {
            width: width,
            height: height,
            lineWidth: 1,
            fontSize: 12,
            fill: '#fff',
            radius: 4,
            stroke: grey,
            opacity: 1,
        };
        var nodeOrigin = {
            x: 0,
            y: 0,
        };
        var textConfig = {
            textAlign: 'left',
            textBaseline: 'bottom',
        };
        var rect = group.addShape('rect', {
            attrs: __assign({ x: nodeOrigin.x, y: nodeOrigin.y }, rectConfig),
        });
        var rectBBox = rect.getBBox();
        group.addShape('text', {
            attrs: __assign({ x: 12 + nodeOrigin.x, y: 20 + nodeOrigin.y, text: name.length > 28 ? name.substr(0, 28) + '...' : name, fontSize: 12, opacity: 0.85, fill: '#000', cursor: 'pointer' }, textConfig),
            name: 'name-shape',
        });
        var price = group.addShape('text', {
            attrs: __assign(__assign({}, textConfig), { x: 12 + nodeOrigin.x, y: rectBBox.maxY - 12, text: label, fontSize: 16, fill: '#000', opacity: 0.85 }),
        });
        group.addShape('text', {
            attrs: __assign(__assign({}, textConfig), { x: price.getBBox().maxX + 5, y: rectBBox.maxY - 12, text: currency, fontSize: 12, fill: '#000', opacity: 0.75 }),
        });
        var percentText = group.addShape('text', {
            attrs: __assign(__assign({}, textConfig), { x: rectBBox.maxX - 8, y: rectBBox.maxY - 12, text: "".concat(((variableValue || 0) * 100).toFixed(2), "%"), fontSize: 12, textAlign: 'right', fill: colors[status] }),
        });
        var symbol = variableUp ? 'triangle' : 'triangle-down';
        var triangle = group.addShape('marker', {
            attrs: __assign(__assign({}, textConfig), { x: percentText.getBBox().minX - 10, y: rectBBox.maxY - 12 - 6, symbol: symbol, r: 6, fill: colors[status] }),
        });
        group.addShape('text', {
            attrs: __assign(__assign({}, textConfig), { x: triangle.getBBox().minX - 4, y: rectBBox.maxY - 12, text: variableName, fontSize: 12, textAlign: 'right', fill: '#000', opacity: 0.45 }),
        });
        var bottomBackRect = group.addShape('rect', {
            attrs: {
                x: nodeOrigin.x,
                y: rectBBox.maxY - 4,
                width: rectConfig.width,
                height: 4,
                radius: [0, 0, rectConfig.radius, rectConfig.radius],
                fill: '#E0DFE3',
            },
        });
        var bottomRect = group.addShape('rect', {
            attrs: {
                x: nodeOrigin.x,
                y: rectBBox.maxY - 4,
                width: rate * rectBBox.width,
                height: 4,
                radius: [0, 0, 0, rectConfig.radius],
                fill: colors[status],
            },
        });
        if (cfg.children && cfg.children.length) {
            group.addShape('rect', {
                attrs: {
                    x: rectConfig.width + 8,
                    y: rectConfig.height / 2 - 8,
                    width: 16,
                    height: 16,
                    stroke: 'rgba(0, 0, 0, 0.25)',
                    cursor: 'pointer',
                    fill: '#fff',
                },
                name: 'collapse-back',
                modelId: cfg.id,
            });
            group.addShape('text', {
                attrs: {
                    x: rectConfig.width + 16,
                    y: rectConfig.height / 2,
                    textAlign: 'center',
                    textBaseline: 'middle',
                    text: collapsed ? '+' : '-',
                    fontSize: 16,
                    cursor: 'pointer',
                    fill: 'rgba(0, 0, 0, 0.25)',
                },
                name: 'collapse-text',
                modelId: cfg.id,
            });
        }
        this.initAnchor(group);
        return rect;
    };
    TreeNode.prototype.getAnchorPoints = function () {
        return [
            [0, 0.5],
            [1, 0.5],
        ];
    };
    TreeNode.prototype.setState = function (name, value, item) {
        stateList[name] && stateList[name].call(this, item, value);
    };
    return TreeNode;
}(BaseNode_1.default));
exports["default"] = TreeNode;


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var BaseNode_1 = __importDefault(__webpack_require__(3));
var nodeStyle_1 = __importDefault(__webpack_require__(6));
var FlowNode = (function (_super) {
    __extends(FlowNode, _super);
    function FlowNode(Grid) {
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'strategy-node';
        _this.register();
        return _this;
    }
    FlowNode.prototype.draw = function (cfg, group, inc) {
        this.size = this.computeNodeSize(cfg);
        console.log(">>>>>>>>>>", this.size);
        var keyShape = this.drawKeyShape(cfg, group);
        this.drawTitleText(cfg, group);
        this.drawIcon(cfg.icon1, group, 6);
        this.drawIcon(cfg.icon2, group, this.size.width - 24);
        this.drawStatusShape(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    };
    FlowNode.prototype.afterDraw = function (cfg, group) {
        if (cfg.taskStatusValue === 3) {
            this.drawStatusAnimateShape(cfg, group);
        }
        if (cfg.lineDashAnimate) {
            this.drawBorderAnimateShape(cfg, group);
        }
    };
    FlowNode.prototype.addShapeApi = function (cfg, group) {
        var _this = this;
        var updateShape = function (_a) {
            var index = _a.index, props = __rest(_a, ["index"]);
            var currentShape = group.getChildByIndex(index);
            currentShape.attr(props);
        };
        var updateKeyShape = function (props) {
            updateShape(__assign({ index: 0 }, props));
            return group;
        };
        var updateText = function (props) {
            console.log('props: ', props);
            updateShape(__assign({ index: 1 }, props));
            return group;
        };
        var updateRightText = function (props) {
            updateShape(__assign({ index: 5 }, props));
            return group;
        };
        var updateIcon = function (props) {
            updateShape(__assign({ index: 3 }, props));
        };
        var size = this.size;
        var textWidthToEllipsis = function (_a) {
            var text = _a.text, _b = _a.threshold, threshold = _b === void 0 ? 4 : _b, _c = _a.width, width = _c === void 0 ? size.width - 40 : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 14 : _d;
            return _this.textWidthToEllipsis({ text: text, threshold: threshold, width: width, fontSize: fontSize });
        };
        group.updateKeyShape = updateKeyShape;
        group.updateText = updateText;
        group.updateIcon = updateIcon;
        group.textWidthToEllipsis = textWidthToEllipsis;
    };
    FlowNode.prototype.drawLeftText = function (cfg, group) {
        var leftText = cfg.leftText, _a = cfg.leftTextStyle, leftTextStyle = _a === void 0 ? {} : _a;
        if (!leftText)
            return;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.leftText.origin), { text: leftText }), leftTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-left-text',
            className: 'node-left-text'
        });
    };
    FlowNode.prototype.drawTitleText = function (cfg, group) {
        var titleText = cfg.titleText, _a = cfg.titleTextStyle, titleTextStyle = _a === void 0 ? {} : _a;
        if (!titleText)
            return;
        var width = this.size.width;
        var height = this.size.height;
        titleText = this.textWidthToEllipsis({ text: titleText, fontSize: 14, width: this.size.width });
        if (titleText.length > 25) {
            titleText = titleText.slice(0, 24) + '...';
        }
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.titleText.origin), { text: titleText, x: width / 2, y: height / 2, fontWeight: 100 }), titleTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-title-text',
            className: 'node-title-text',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.getStatusStyle = function (cfg) {
        var taskStatusValue = cfg.taskStatusValue;
        var statusArr = [3, 4, 5, 10];
        var style = {
            3: nodeStyle_1.default.statusShape.underway,
            1: nodeStyle_1.default.statusShape.waiting,
            5: nodeStyle_1.default.statusShape.success,
            4: nodeStyle_1.default.statusShape.faild,
            10: nodeStyle_1.default.statusShape.stop
        };
        if (!taskStatusValue || statusArr.indexOf(taskStatusValue) < 0)
            taskStatusValue = 1;
        return style[taskStatusValue];
    };
    FlowNode.prototype.drawStatusShape = function (cfg, group) {
        var width = this.size.width;
        var taskStatus = cfg.taskStatus;
        if (!taskStatus)
            return;
        var selfStyle = this.getStatusStyle(cfg);
        this.drawStatusText(cfg, group);
        var attrs = __assign(__assign({}, selfStyle), { r: nodeStyle_1.default.statusShape.r, x: width - this.getTextWidth2(12, taskStatus) - 10, y: 12 });
        group.addShape('circle', {
            attrs: attrs,
            name: 'power-status-text',
            className: 'status-text',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.drawStatusText = function (cfg, group) {
        var width = this.size.width;
        var taskStatus = cfg.taskStatus, _a = cfg.taskStatusStyle, taskStatusStyle = _a === void 0 ? {} : _a;
        var selfStyle = this.getStatusStyle(cfg);
        var attrs = __assign(__assign(__assign(__assign({}, selfStyle), nodeStyle_1.default.statusShape.text), { text: taskStatus, x: width - this.getTextWidth2(12, taskStatus) / 2 - 4, y: 12 }), taskStatusStyle);
        group.addShape('text', {
            attrs: attrs,
            name: 'power-status-node',
            className: 'status-node',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.drawIcon = function (icon, group, x) {
        if (x === void 0) { x = 6; }
        var height = this.size.height;
        group.addShape("image", {
            attrs: {
                img: icon,
                x: x,
                y: height / 2 - 20,
                width: 40,
                height: 40,
                shadowColor: '#E6E6E6',
                shadowBlur: 4,
            },
            name: "image-shape"
        });
    };
    FlowNode.prototype.drawStatusAnimateShape = function (cfg, group) {
        var width = this.size.width;
        var x = width - 52;
        var y = 12;
        var r = nodeStyle_1.default.statusShape.r;
        var back1 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -3, 0.6);
        var back2 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -2, 0.6);
        var back3 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -1, 0.6);
        this.createStatusAnimate(r, back1, 0);
        this.createStatusAnimate(r, back2, 1000);
        this.createStatusAnimate(r, back3, 2000);
    };
    FlowNode.prototype.drawBorderAnimateShape = function (cfg, group) {
        var keyShape = group.getChildByIndex(0);
        var index = 0;
        var lineDash = [6, 2, 1, 2];
        keyShape.animate(function () {
            index++;
            if (index > 9) {
                index = 0;
            }
            return {
                lineDash: lineDash,
                lineDashOffset: -index
            };
        }, {
            repeat: true,
            duration: 4000,
        });
    };
    FlowNode.prototype.createStatusAnimate = function (r, shape, delay) {
        shape.animate({
            r: r + 5,
            opacity: 0.1
        }, {
            duration: 3000,
            easing: "easeCubic",
            delay: delay,
            repeat: true
        });
    };
    FlowNode.prototype.createStatusAnimateShape = function (cfg, group, name, zIndex, opacity) {
        var width = this.size.width;
        var x = width - this.getTextWidth2(12, cfg.taskStatus) - 10;
        var y = 12;
        return group.addShape("circle", {
            zIndex: zIndex,
            attrs: {
                x: x,
                y: y,
                r: nodeStyle_1.default.statusShape.r,
                fill: nodeStyle_1.default.statusShape.underway.fill,
                opacity: opacity
            },
            name: name
        });
    };
    return FlowNode;
}(BaseNode_1.default));
exports["default"] = FlowNode;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var nodeStyle_1 = __importDefault(__webpack_require__(6));
function CircleTestNode(Grid) {
    Grid.registerNode('circle-test-node', {
        drawKeyShape: function (cfg, group) {
            var width = this.size.width;
            var height = this.size.height;
            var _a = cfg.style, style = _a === void 0 ? {} : _a;
            var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.base.origin), { fill: '#BB0552', r: 50 }), style);
            var keyShape = group.addShape('circle', {
                attrs: attrs,
                name: 'circle-test-node-1',
                className: 'circle-test-node'
            });
            return keyShape;
        },
        getAnchorPoints: function () {
            return [
                [0.5, 0],
                [1, 0.5],
                [0.5, 1],
            ];
        },
    }, 'simple-node');
}
exports["default"] = CircleTestNode;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerEdge_1 = __webpack_require__(20);
var uniqBy = function (arr, key) {
    var result = [];
    arr.forEach(function (i) {
        if (!result.find(function (r) { return r[key] === i[key]; }))
            result.push(i);
    });
    return result;
};
var CvtePolyline = (function (_super) {
    __extends(CvtePolyline, _super);
    function CvtePolyline(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cvte-polyline1';
        _this.extendedName = 'polyline';
        _this.register();
        return _this;
    }
    CvtePolyline.prototype.draw = function (cfg, group) {
        this.group = group;
        var startPoint = cfg.startPoint;
        var endPoint = cfg.endPoint;
        var shape = group.addShape('path', {
            className: 'edge-shape',
            attrs: {
                stroke: '#164979',
                lineWidth: 1,
                lineAppendWidth: 8,
                path: this.computePath(cfg),
                endArrow: {
                    path: 'M 0,0 L 6,-2 Q 5 0,6 2 Z',
                    lineDash: [0, 0],
                    fill: '#164979',
                }
            },
            name: 'edge-shape',
        });
        return shape;
    };
    CvtePolyline.prototype.computePath = function (cfg) {
        var startPoint = cfg.startPoint;
        var endPoint = cfg.endPoint;
        var controlPoints = this.getControlPoints(cfg);
        var points = [startPoint];
        if (controlPoints) {
            points = points.concat(controlPoints);
        }
        points.push(endPoint);
        return this.getPath(points);
    };
    CvtePolyline.prototype.getControlPoints = function (cfg) {
        if (!cfg.sourceNode) {
            return cfg.controlPoints;
        }
        var obj = {
            sNode: cfg.sourceNode,
            tNode: cfg.targetNode,
            sPort: cfg.startPoint,
            tPort: cfg.endPoint,
            offset: 15
        };
        return this.polylineFinding(obj);
    };
    CvtePolyline.prototype.polylineFinding = function (_a) {
        var sNode = _a.sNode, tNode = _a.tNode, sPort = _a.sPort, tPort = _a.tPort, offset = _a.offset;
        var sourceBBox = sNode && sNode.getBBox() ? sNode.getBBox() : this.getPointBBox(sPort);
        var targetBBox = tNode && tNode.getBBox() ? tNode.getBBox() : this.getPointBBox(tPort);
        var sBBox = this.getExpandedBBox(sourceBBox, offset);
        var tBBox = this.getExpandedBBox(targetBBox, offset);
        var sPoint = this.getExpandedPort(sBBox, sPort);
        var tPoint = this.getExpandedPort(tBBox, tPort);
        var points = this.getConnectablePoints(sBBox, tBBox, sPoint, tPoint);
        points = this.filterConnectablePoints(points, sBBox);
        points = this.filterConnectablePoints(points, tBBox);
        var polylinePoints = this.AStar(points, sPoint, tPoint, sBBox, tBBox);
        return polylinePoints;
    };
    CvtePolyline.prototype.getPointBBox = function (t) {
        return { centerX: t.x, centerY: t.y, minX: t.x, minY: t.y, maxX: t.x, maxY: t.y, height: 0, width: 0 };
    };
    CvtePolyline.prototype.getExpandedBBox = function (bbox, offset) {
        return 0 === bbox.width && 0 === bbox.height ? bbox : {
            centerX: bbox.centerX,
            centerY: bbox.centerY,
            minX: bbox.minX - offset,
            minY: bbox.minY - offset,
            maxX: bbox.maxX + offset,
            maxY: bbox.maxY + offset,
            height: bbox.height + 2 * offset,
            width: bbox.width + 2 * offset,
        };
    };
    CvtePolyline.prototype.getExpandedPort = function (bbox, point) {
        return Math.abs(point.x - bbox.centerX) / bbox.width > Math.abs(point.y - bbox.centerY) / bbox.height
            ? { x: point.x > bbox.centerX ? bbox.maxX : bbox.minX, y: point.y }
            : { x: point.x, y: point.y > bbox.centerY ? bbox.maxY : bbox.minY };
    };
    CvtePolyline.prototype.getConnectablePoints = function (sBBox, tBBox, sPoint, tPoint) {
        var _this = this;
        var lineBBox = this.getBBoxFromVertexes(sPoint, tPoint);
        var outerBBox = this.combineBBoxes(sBBox, tBBox);
        var sLineBBox = this.combineBBoxes(sBBox, lineBBox);
        var tLineBBox = this.combineBBoxes(tBBox, lineBBox);
        var points = [];
        points = points.concat(this.vertexOfBBox(sLineBBox), this.vertexOfBBox(tLineBBox), this.vertexOfBBox(outerBBox));
        var centerPoint = { x: outerBBox.centerX, y: outerBBox.centerY };
        [outerBBox, sLineBBox, tLineBBox, lineBBox].forEach(function (bbox) {
            points = points.concat(_this.crossPointsByLineAndBBox(bbox, centerPoint));
        });
        points.push({ x: sPoint.x, y: tPoint.y });
        points.push({ x: tPoint.x, y: sPoint.y });
        return points;
    };
    CvtePolyline.prototype.combineBBoxes = function (sBBox, tBBox) {
        var minX = Math.min(sBBox.minX, tBBox.minX), minY = Math.min(sBBox.minY, tBBox.minY), maxX = Math.max(sBBox.maxX, tBBox.maxX), maxY = Math.max(sBBox.maxY, tBBox.maxY);
        return {
            centerX: (minX + maxX) / 2,
            centerY: (minY + maxY) / 2,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            height: maxY - minY,
            width: maxX - minX,
        };
    };
    CvtePolyline.prototype.vertexOfBBox = function (bbox) {
        return [{ x: bbox.minX, y: bbox.minY }, { x: bbox.maxX, y: bbox.minY }, { x: bbox.maxX, y: bbox.maxY }, { x: bbox.minX, y: bbox.maxY }];
    };
    CvtePolyline.prototype.crossPointsByLineAndBBox = function (bbox, centerPoint) {
        var crossPoints = [];
        if (!(centerPoint.x < bbox.minX || centerPoint.x > bbox.maxX))
            crossPoints = crossPoints.concat([{ x: centerPoint.x, y: bbox.minY }, { x: centerPoint.x, y: bbox.maxY }]);
        if (!(centerPoint.y < bbox.minY || centerPoint.y > bbox.maxY))
            crossPoints = crossPoints.concat([{ x: bbox.minX, y: centerPoint.y }, { x: bbox.maxX, y: centerPoint.y }]);
        return crossPoints;
    };
    CvtePolyline.prototype.getBBoxFromVertexes = function (sPoint, tPoint) {
        var minX = Math.min(sPoint.x, tPoint.x), maxX = Math.max(sPoint.x, tPoint.x), minY = Math.min(sPoint.y, tPoint.y), maxY = Math.max(sPoint.y, tPoint.y);
        return {
            centerX: (minX + maxX) / 2,
            centerY: (minY + maxY) / 2,
            maxX: maxX,
            maxY: maxY,
            minX: minX,
            minY: minY,
            height: maxY - minY,
            width: maxX - minX,
        };
    };
    CvtePolyline.prototype.filterConnectablePoints = function (points, bbox) {
        return points.filter(function (point) { return point.x <= bbox.minX || point.x >= bbox.maxX || point.y <= bbox.minY || point.y >= bbox.maxY; });
    };
    CvtePolyline.prototype.AStar = function (points, sPoint, tPoint, sBBox, tBBox) {
        var _this = this;
        var openList = [sPoint];
        var closeList = [];
        points = uniqBy(this.fillId(points), 'id');
        points.push(tPoint);
        var endPoint;
        var _loop_1 = function () {
            var minCostPoint;
            openList.forEach(function (p, i) {
                if (!p.parent)
                    p.f = 0;
                if (!minCostPoint)
                    minCostPoint = p;
                if (p.f < minCostPoint.f)
                    minCostPoint = p;
            });
            if (minCostPoint.x === tPoint.x && minCostPoint.y === tPoint.y) {
                endPoint = minCostPoint;
                return "break";
            }
            openList.splice(openList.findIndex(function (o) { return o.x === minCostPoint.x && o.y === minCostPoint.y; }), 1);
            closeList.push(minCostPoint);
            var neighbor = points.filter(function (p) { return (p.x === minCostPoint.x || p.y === minCostPoint.y)
                && !(p.x === minCostPoint.x && p.y === minCostPoint.y)
                && !_this.crossBBox([sBBox, tBBox], minCostPoint, p); });
            neighbor.forEach(function (p) {
                var inOpen = openList.find(function (o) { return o.x === p.x && o.y === p.y; });
                var currentG = _this.getCost(p, minCostPoint);
                if (closeList.find(function (o) { return o.x === p.x && o.y === p.y; })) {
                }
                else if (inOpen) {
                    if (p.g > currentG) {
                        p.parent = minCostPoint;
                        p.g = currentG;
                        p.f = p.g + p.h;
                    }
                }
                else {
                    p.parent = minCostPoint;
                    p.g = currentG;
                    var h = _this.getCost(p, tPoint);
                    if (_this.crossBBox([tBBox], p, tPoint)) {
                        h += (tBBox.width / 2 + tBBox.height / 2);
                    }
                    p.h = h;
                    p.f = p.g + p.h;
                    openList.push(p);
                }
            });
        };
        while (openList.length > 0) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        if (endPoint) {
            var result = [];
            result.push({ x: endPoint.x, y: endPoint.y });
            while (endPoint.parent) {
                endPoint = endPoint.parent;
                result.push({ x: endPoint.x, y: endPoint.y });
            }
            return result.reverse();
        }
        return [];
    };
    CvtePolyline.prototype.fillId = function (points) {
        points.forEach(function (p) {
            p.id = p.x + '-' + p.y;
        });
        return points;
    };
    CvtePolyline.prototype.crossBBox = function (bboxes, p1, p2) {
        for (var i = 0; i < bboxes.length; i++) {
            var bbox = bboxes[i];
            if (p1.x === p2.x && bbox.minX < p1.x && bbox.maxX > p1.x) {
                if (p1.y < bbox.maxY && p2.y >= bbox.maxY || p2.y < bbox.maxY && p1.y >= bbox.maxY)
                    return true;
            }
            else if (p1.y === p2.y && bbox.minY < p1.y && bbox.maxY > p1.y) {
                if (p1.x < bbox.maxX && p2.x >= bbox.maxX || p2.x < bbox.maxX && p1.x >= bbox.maxX)
                    return true;
            }
        }
        return false;
    };
    CvtePolyline.prototype.getCost = function (p1, p2) {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    };
    CvtePolyline.prototype.getPath = function (points) {
        var path = [];
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            if (i === 0) {
                path.push(['M', point.x, point.y]);
            }
            else if (i === points.length - 1) {
                path.push(['L', point.x, point.y]);
            }
            else {
                var prevPoint = points[i - 1];
                var nextPoint = points[i + 1];
                var cornerLen = 5;
                if (Math.abs(point.y - prevPoint.y) > cornerLen || Math.abs(point.x - prevPoint.x) > cornerLen) {
                    if (prevPoint.x === point.x) {
                        path.push(['L', point.x, point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                    }
                    else if (prevPoint.y === point.y) {
                        path.push(['L', point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                    }
                }
                var yLen = Math.abs(point.y - nextPoint.y);
                var xLen = Math.abs(point.x - nextPoint.x);
                if (yLen > 0 && yLen < cornerLen) {
                    cornerLen = yLen;
                }
                else if (xLen > 0 && xLen < cornerLen) {
                    cornerLen = xLen;
                }
                if (prevPoint.x !== nextPoint.x && nextPoint.x === point.x) {
                    path.push(['Q', point.x, point.y, point.x, point.y > nextPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                }
                else if (prevPoint.y !== nextPoint.y && nextPoint.y === point.y) {
                    path.push(['Q', point.x, point.y, point.x > nextPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                }
            }
        }
        return path;
    };
    return CvtePolyline;
}(registerEdge_1.RegisterEdge));
exports["default"] = CvtePolyline;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterEdge = void 0;
var registerManger_1 = __importDefault(__webpack_require__(5));
var RegisterEdge = (function (_super) {
    __extends(RegisterEdge, _super);
    function RegisterEdge(G6) {
        var _this = _super.call(this, G6) || this;
        _this.name = 'cvte-polyline';
        _this.extendedName = 'polyline';
        return _this;
    }
    RegisterEdge.prototype.register = function () {
        var self = this;
        this.G6.registerEdge(this.name, {
            drawShape: function (cfg, group) {
                return self.draw.call(self, cfg, group, this);
            },
            afterDraw: function (cfg, group) {
                return self.afterDraw.call(self, cfg, group, this);
            },
            update: function (cfg, group) {
                self.update.call(self, cfg, group, this);
            },
            afterUpdate: function (cfg, group) {
                self.afterUpdate.call(self, cfg, group, this);
            },
            setState: function (name, value, item) {
                self.setState.call(self, name, value, item, this);
            }
        }, 'polyline');
    };
    ;
    RegisterEdge.prototype.draw = function (cfg, group, inc) {
    };
    ;
    RegisterEdge.prototype.update = function (cfg, group, inc) { };
    ;
    RegisterEdge.prototype.afterUpdate = function (cfg, group, inc) { };
    ;
    RegisterEdge.prototype.afterDraw = function (cfg, group, inc) { };
    RegisterEdge.prototype.setState = function (name, value, item, inc) { };
    ;
    return RegisterEdge;
}(registerManger_1.default));
exports.RegisterEdge = RegisterEdge;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var uniqBy = function (arr, key) {
    var result = [];
    arr.forEach(function (i) {
        if (!result.find(function (r) { return r[key] === i[key]; }))
            result.push(i);
    });
    return result;
};
var stateList = {
    hoverEdge: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
        if (value) {
            current.attr("stroke", '#60A1DE');
        }
        else {
            current.attr("stroke", '#164979');
        }
    },
    selectEdge: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
        if (value) {
            current.attr({
                "opacity": 1,
                "lineWidth": 2
            });
        }
        else {
            current.attr({
                "opacity": 0.6,
                "lineWidth": 1
            });
        }
    }
};
function default_1(G6) {
    G6.registerEdge('cvte-polyline', {
        drawShape: function (cfg, group) {
            this.group = group;
            this.label = null;
            var startPoint = cfg.startPoint;
            var endPoint = cfg.endPoint;
            var shape = group.addShape('path', {
                className: 'edge-shape',
                attrs: {
                    stroke: '#164979',
                    lineWidth: 1,
                    lineAppendWidth: 8,
                    path: this.computePath(cfg),
                    opacity: 0.6,
                    endArrow: {
                        path: 'M 0,0 L 6,-2 Q 5 0,6 2 Z',
                        lineDash: [0, 0],
                        fill: '#164979',
                    }
                },
                name: 'edge-shape',
            });
            return shape;
        },
        computePath: function (cfg) {
            var startPoint = cfg.startPoint;
            var endPoint = cfg.endPoint;
            var controlPoints = this.getControlPoints(cfg);
            var points = [startPoint];
            if (controlPoints) {
                points = points.concat(controlPoints);
            }
            points.push(endPoint);
            return this.getPath(points);
        },
        drawLabel: function (cfg, group) {
            var labelCfg = cfg.labelCfg || {};
            var labelStyle = this.getLabelStyle(cfg, labelCfg, group);
            var label = group.addShape('text', {
                attrs: __assign({}, labelStyle)
            });
            var labelBBox = label.getBBox();
            group.addShape('rect', {
                attrs: {
                    x: labelBBox.x - 4 / 2,
                    y: labelBBox.y - 4 / 2,
                    width: labelBBox.width + 4,
                    height: labelBBox.height + 4,
                    fill: '#fff',
                    stroke: '#fff',
                },
                name: 'edge-labelRect',
                className: 'edge-labelRect',
            });
            group.toBack();
            label.toFront();
            return label;
        },
        afterUpdate: function (cfg, item) {
            var label = item.getContainer().findByClassName('edge-label');
            var labelRect = item.getContainer().findByClassName('edge-labelRect');
            if (label) {
                var labelBBox = label.getBBox();
                labelRect.attr({
                    x: labelBBox.x - 4 / 2,
                    y: labelBBox.y - 4 / 2,
                    width: labelBBox.width + 4,
                    height: labelBBox.height + 4,
                });
            }
        },
        getControlPoints: function (cfg) {
            if (!cfg.sourceNode) {
                return cfg.controlPoints;
            }
            var obj = {
                sNode: cfg.sourceNode,
                tNode: cfg.targetNode,
                sPort: cfg.startPoint,
                tPort: cfg.endPoint,
                offset: 15
            };
            return this.polylineFinding(obj);
        },
        polylineFinding: function (_a) {
            var sNode = _a.sNode, tNode = _a.tNode, sPort = _a.sPort, tPort = _a.tPort, offset = _a.offset;
            var sourceBBox = sNode && sNode.getBBox() ? sNode.getBBox() : this.getPointBBox(sPort);
            var targetBBox = tNode && tNode.getBBox() ? tNode.getBBox() : this.getPointBBox(tPort);
            var sBBox = this.getExpandedBBox(sourceBBox, offset);
            var tBBox = this.getExpandedBBox(targetBBox, offset);
            var sPoint = this.getExpandedPort(sBBox, sPort);
            var tPoint = this.getExpandedPort(tBBox, tPort);
            var points = this.getConnectablePoints(sBBox, tBBox, sPoint, tPoint);
            points = this.filterConnectablePoints(points, sBBox);
            points = this.filterConnectablePoints(points, tBBox);
            var polylinePoints = this.AStar(points, sPoint, tPoint, sBBox, tBBox);
            return polylinePoints;
        },
        getPointBBox: function (t) {
            return { centerX: t.x, centerY: t.y, minX: t.x, minY: t.y, maxX: t.x, maxY: t.y, height: 0, width: 0 };
        },
        getExpandedBBox: function (bbox, offset) {
            return 0 === bbox.width && 0 === bbox.height ? bbox : {
                centerX: bbox.centerX,
                centerY: bbox.centerY,
                minX: bbox.minX - offset,
                minY: bbox.minY - offset,
                maxX: bbox.maxX + offset,
                maxY: bbox.maxY + offset,
                height: bbox.height + 2 * offset,
                width: bbox.width + 2 * offset,
            };
        },
        getExpandedPort: function (bbox, point) {
            return Math.abs(point.x - bbox.centerX) / bbox.width > Math.abs(point.y - bbox.centerY) / bbox.height
                ? { x: point.x > bbox.centerX ? bbox.maxX : bbox.minX, y: point.y }
                : { x: point.x, y: point.y > bbox.centerY ? bbox.maxY : bbox.minY };
        },
        getConnectablePoints: function (sBBox, tBBox, sPoint, tPoint) {
            var _this = this;
            var lineBBox = this.getBBoxFromVertexes(sPoint, tPoint);
            var outerBBox = this.combineBBoxes(sBBox, tBBox);
            var sLineBBox = this.combineBBoxes(sBBox, lineBBox);
            var tLineBBox = this.combineBBoxes(tBBox, lineBBox);
            var points = [];
            points = points.concat(this.vertexOfBBox(sLineBBox), this.vertexOfBBox(tLineBBox), this.vertexOfBBox(outerBBox));
            var centerPoint = { x: outerBBox.centerX, y: outerBBox.centerY };
            [outerBBox, sLineBBox, tLineBBox, lineBBox].forEach(function (bbox) {
                points = points.concat(_this.crossPointsByLineAndBBox(bbox, centerPoint));
            });
            points.push({ x: sPoint.x, y: tPoint.y });
            points.push({ x: tPoint.x, y: sPoint.y });
            return points;
        },
        combineBBoxes: function (sBBox, tBBox) {
            var minX = Math.min(sBBox.minX, tBBox.minX), minY = Math.min(sBBox.minY, tBBox.minY), maxX = Math.max(sBBox.maxX, tBBox.maxX), maxY = Math.max(sBBox.maxY, tBBox.maxY);
            return {
                centerX: (minX + maxX) / 2,
                centerY: (minY + maxY) / 2,
                minX: minX,
                minY: minY,
                maxX: maxX,
                maxY: maxY,
                height: maxY - minY,
                width: maxX - minX,
            };
        },
        vertexOfBBox: function (bbox) {
            return [{ x: bbox.minX, y: bbox.minY }, { x: bbox.maxX, y: bbox.minY }, { x: bbox.maxX, y: bbox.maxY }, { x: bbox.minX, y: bbox.maxY }];
        },
        crossPointsByLineAndBBox: function (bbox, centerPoint) {
            var crossPoints = [];
            if (!(centerPoint.x < bbox.minX || centerPoint.x > bbox.maxX))
                crossPoints = crossPoints.concat([{ x: centerPoint.x, y: bbox.minY }, { x: centerPoint.x, y: bbox.maxY }]);
            if (!(centerPoint.y < bbox.minY || centerPoint.y > bbox.maxY))
                crossPoints = crossPoints.concat([{ x: bbox.minX, y: centerPoint.y }, { x: bbox.maxX, y: centerPoint.y }]);
            return crossPoints;
        },
        getBBoxFromVertexes: function (sPoint, tPoint) {
            var minX = Math.min(sPoint.x, tPoint.x), maxX = Math.max(sPoint.x, tPoint.x), minY = Math.min(sPoint.y, tPoint.y), maxY = Math.max(sPoint.y, tPoint.y);
            return {
                centerX: (minX + maxX) / 2,
                centerY: (minY + maxY) / 2,
                maxX: maxX,
                maxY: maxY,
                minX: minX,
                minY: minY,
                height: maxY - minY,
                width: maxX - minX,
            };
        },
        filterConnectablePoints: function (points, bbox) {
            return points.filter(function (point) { return point.x <= bbox.minX || point.x >= bbox.maxX || point.y <= bbox.minY || point.y >= bbox.maxY; });
        },
        AStar: function (points, sPoint, tPoint, sBBox, tBBox) {
            var _this = this;
            var openList = [sPoint];
            var closeList = [];
            points = uniqBy(this.fillId(points), 'id');
            points.push(tPoint);
            var endPoint;
            var _loop_1 = function () {
                var minCostPoint;
                openList.forEach(function (p, i) {
                    if (!p.parent)
                        p.f = 0;
                    if (!minCostPoint)
                        minCostPoint = p;
                    if (p.f < minCostPoint.f)
                        minCostPoint = p;
                });
                if (minCostPoint.x === tPoint.x && minCostPoint.y === tPoint.y) {
                    endPoint = minCostPoint;
                    return "break";
                }
                var index = openList.findIndex(function (o) { return o.x === minCostPoint.x && o.y === minCostPoint.y; });
                openList.splice(index === -1 ? 0 : index, 1);
                closeList.push(minCostPoint);
                var neighbor = points.filter(function (p) { return (p.x === minCostPoint.x || p.y === minCostPoint.y)
                    && !(p.x === minCostPoint.x && p.y === minCostPoint.y)
                    && !_this.crossBBox([sBBox, tBBox], minCostPoint, p); });
                neighbor.forEach(function (p) {
                    var inOpen = openList.find(function (o) { return o.x === p.x && o.y === p.y; });
                    var currentG = _this.getCost(p, minCostPoint);
                    if (closeList.find(function (o) { return o.x === p.x && o.y === p.y; })) {
                    }
                    else if (inOpen) {
                        if (p.g > currentG) {
                            p.parent = minCostPoint;
                            p.g = currentG;
                            p.f = p.g + p.h;
                        }
                    }
                    else {
                        p.parent = minCostPoint;
                        p.g = currentG;
                        var h = _this.getCost(p, tPoint);
                        if (_this.crossBBox([tBBox], p, tPoint)) {
                            h += (tBBox.width / 2 + tBBox.height / 2);
                        }
                        p.h = h;
                        p.f = p.g + p.h;
                        openList.push(p);
                    }
                });
            };
            while (openList.length > 0) {
                var state_1 = _loop_1();
                if (state_1 === "break")
                    break;
            }
            if (endPoint) {
                var result = [];
                result.push({ x: endPoint.x, y: endPoint.y });
                while (endPoint.parent) {
                    endPoint = endPoint.parent;
                    result.push({ x: endPoint.x, y: endPoint.y });
                }
                return result.reverse();
            }
            return [];
        },
        fillId: function (points) {
            points.forEach(function (p) {
                p.id = p.x + '-' + p.y;
            });
            return points;
        },
        crossBBox: function (bboxes, p1, p2) {
            for (var i = 0; i < bboxes.length; i++) {
                var bbox = bboxes[i];
                if (p1.x === p2.x && bbox.minX < p1.x && bbox.maxX > p1.x) {
                    if (p1.y < bbox.maxY && p2.y >= bbox.maxY || p2.y < bbox.maxY && p1.y >= bbox.maxY)
                        return true;
                }
                else if (p1.y === p2.y && bbox.minY < p1.y && bbox.maxY > p1.y) {
                    if (p1.x < bbox.maxX && p2.x >= bbox.maxX || p2.x < bbox.maxX && p1.x >= bbox.maxX)
                        return true;
                }
            }
            return false;
        },
        getCost: function (p1, p2) {
            return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
        },
        getPath: function (points) {
            var path = [];
            for (var i = 0; i < points.length; i++) {
                var point = points[i];
                if (i === 0) {
                    path.push(['M', point.x, point.y]);
                }
                else if (i === points.length - 1) {
                    path.push(['L', point.x, point.y]);
                }
                else {
                    var prevPoint = points[i - 1];
                    var nextPoint = points[i + 1];
                    var cornerLen = 5;
                    if (Math.abs(point.y - prevPoint.y) > cornerLen || Math.abs(point.x - prevPoint.x) > cornerLen) {
                        if (prevPoint.x === point.x) {
                            path.push(['L', point.x, point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                        }
                        else if (prevPoint.y === point.y) {
                            path.push(['L', point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                        }
                    }
                    var yLen = Math.abs(point.y - nextPoint.y);
                    var xLen = Math.abs(point.x - nextPoint.x);
                    if (yLen > 0 && yLen < cornerLen) {
                        cornerLen = yLen;
                    }
                    else if (xLen > 0 && xLen < cornerLen) {
                        cornerLen = xLen;
                    }
                    if (prevPoint.x !== nextPoint.x && nextPoint.x === point.x) {
                        path.push(['Q', point.x, point.y, point.x, point.y > nextPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                    }
                    else if (prevPoint.y !== nextPoint.y && nextPoint.y === point.y) {
                        path.push(['Q', point.x, point.y, point.x > nextPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                    }
                }
            }
            return path;
        },
        setState: function (name, value, item) {
            stateList[name] && stateList[name].call(this, item, value);
        }
    }, 'polyline');
}
exports["default"] = default_1;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(G6) {
    G6.registerEdge('cover-cricle', {
        draw: function (cfg, group) {
            var startPoint = cfg.startPoint;
            var endPoint = cfg.endPoint;
            var centerPoint = {
                x: (startPoint.x + endPoint.x) / 2,
                y: (startPoint.y + endPoint.y) / 2
            };
            var controlPoint = {
                x: (startPoint.x + centerPoint.x) / 2,
                y: startPoint.y
            };
            var path = group.addShape("path", {
                attrs: {
                    path: [["M", startPoint.x, startPoint.y], ["Q", controlPoint.x + 8, controlPoint.y, centerPoint.x, centerPoint.y], ["T", endPoint.x - 8, endPoint.y], ["L", endPoint.x, endPoint.y]],
                    stroke: "#ccc",
                    lineWidth: 1.6,
                    endArrow: {
                        path: "M 12,4 L 4,0 L 12,-4 Z",
                        d: 4,
                        fill: '#fff',
                    }
                }
            });
            return path;
        },
    });
}
exports["default"] = default_1;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var shapeBase_1 = __webpack_require__(24);
var shape_1 = __importDefault(__webpack_require__(25));
var registerManger_1 = __importDefault(__webpack_require__(5));
var BaseAnchor = (function (_super) {
    __extends(BaseAnchor, _super);
    function BaseAnchor(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.register();
        return _this;
    }
    BaseAnchor.prototype.register = function () {
        shape_1.default.registerFactory('anchor', {
            defaultShapeType: 'marker',
            getShape: function (type) {
                var shapeObj = Object.assign({}, shapeBase_1.shapeBase, {
                    type: 'marker',
                    itemType: type,
                    drawShape: function (cfg, group) {
                        var style = this.getShapeStyle(cfg);
                        var shape = group.addShape('marker', {
                            attrs: style,
                            name: 'anchor-shape',
                            draggable: true,
                        });
                        return shape;
                    },
                    setState: function (name, value, item) {
                        if (name === 'anchor-active') {
                            if (value) {
                                this.update({ style: { fill: '#1990FF', r: 5 } }, item);
                            }
                        }
                        if (name === 'hoverAnchor') {
                            if (value) {
                                this.update({ style: { fill: '#AEA1FF' } }, item);
                            }
                            else {
                                this.update({ style: { fill: '#FFF' } }, item);
                            }
                        }
                    }
                });
                return shapeObj;
            },
        });
    };
    return BaseAnchor;
}(registerManger_1.default));
exports["default"] = BaseAnchor;


/***/ }),
/* 24 */
/***/ ((module) => {

"use strict";
module.exports = require("@antv/g6-core/lib/element/shapeBase");

/***/ }),
/* 25 */
/***/ ((module) => {

"use strict";
module.exports = require("@antv/g6-core/lib/element/shape");

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var hover_1 = __importDefault(__webpack_require__(27));
var hover_2 = __importDefault(__webpack_require__(29));
var drag_1 = __importDefault(__webpack_require__(30));
var drag_2 = __importDefault(__webpack_require__(31));
var select_1 = __importDefault(__webpack_require__(32));
var hover_3 = __importDefault(__webpack_require__(33));
var delete_1 = __importDefault(__webpack_require__(34));
var addNode_1 = __importDefault(__webpack_require__(35));
var align_1 = __importDefault(__webpack_require__(36));
exports["default"] = [hover_1.default, hover_2.default, drag_1.default, drag_2.default, select_1.default, hover_3.default, delete_1.default, addNode_1.default, align_1.default];


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    onNodeMouseEnter: function (e) {
        this.graph.setItemState(e.item, 'hoverNode', true);
    },
    onNodeMouseLeave: function (e) {
        if (e.target.cfg.name === 'anchor-shape')
            return;
        this.graph.setItemState(e.item, 'hoverNode', false);
    }
};
var HoverNode = (function (_super) {
    __extends(HoverNode, _super);
    function HoverNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-hover-node';
        _this.register(Event);
        return _this;
    }
    HoverNode.prototype.getEvents = function () {
        return {
            'node:mouseenter': 'onNodeMouseEnter',
            'node:mouseleave': 'onNodeMouseLeave'
        };
    };
    return HoverNode;
}(registerBehavior_1.default));
exports["default"] = HoverNode;


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerManger_1 = __importDefault(__webpack_require__(5));
var RegisterBehavior = (function (_super) {
    __extends(RegisterBehavior, _super);
    function RegisterBehavior(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = '';
        return _this;
    }
    RegisterBehavior.prototype.register = function (events) {
        if (events === void 0) { events = {}; }
        var self = this;
        this.G6.registerBehavior(this.name, __assign({ getEvents: this.getEvents }, events));
    };
    RegisterBehavior.prototype.getEvents = function () {
        return {};
    };
    return RegisterBehavior;
}(registerManger_1.default));
exports["default"] = RegisterBehavior;


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    onNodeMouseEnter: function (e) {
        this.graph.setItemState(e.item, 'hoverNode', true);
    },
    onAnchorMouseLeave: function (e) {
        var node = e.item.getContainer().getParent();
        this.graph.setItemState(e.item, 'hoverAnchor', false);
        node && this.graph.setItemState(node.get('item'), 'hoverNode', false);
    },
    onAnchorMouseEnter: function (e) {
        this.graph.setItemState(e.item, 'hoverAnchor', true);
    }
};
var HoverAnchor = (function (_super) {
    __extends(HoverAnchor, _super);
    function HoverAnchor(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-hover-anchor';
        _this.register(Event);
        return _this;
    }
    HoverAnchor.prototype.getEvents = function () {
        return {
            'anchor:mouseleave': 'onAnchorMouseLeave',
            'anchor:mouseenter': 'onAnchorMouseEnter'
        };
    };
    return HoverAnchor;
}(registerBehavior_1.default));
exports["default"] = HoverAnchor;


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    origin: null,
    target: null,
    onNodeDragStart: function (e) {
        this.target = e.item;
        this.origin = {
            x: e.x,
            y: e.y
        };
    },
    onNodeDrag: function (e) {
        if (!this.origin)
            return;
        var model = this.target.get('model');
        var origin = this.origin;
        if (!this.point) {
            this.point = {
                x: model.x,
                y: model.y
            };
        }
        var x = e.x - origin.x + this.point.x;
        var y = e.y - origin.y + this.point.y;
        this.origin = { x: e.x, y: e.y };
        this.point = { x: x, y: y };
        this.moveDelegate(this.target, x, y);
    },
    onNodeDragEnd: function (e) {
        if (!this.origin) {
            return;
        }
        var delegateShape = e.item.get('delegateShape');
        var bbox = delegateShape.getBBox();
        var x = bbox.x + 3;
        var y = bbox.y + 3;
        delegateShape.remove();
        this.target.set('delegateShape', null);
        this.graph.updateItem(this.target, { x: x, y: y });
        var MacroCommand = this.graph.get('MacroCommand');
        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
        this.point = null;
        this.origin = null;
        this.graph.emit('afternodedragend');
    },
    moveDelegate: function (item, x, y) {
        var shape = item.get('delegateShape');
        var bbox = item.get('keyShape').getBBox();
        var keyShape = item.getKeyShape();
        var keyShapeAttr = keyShape.attr();
        if (!shape) {
            var parent = this.graph.get('group');
            var attrs = {
                stroke: keyShapeAttr.stroke ? keyShapeAttr.stroke : '#1890FF',
                fill: keyShapeAttr.fill ? keyShapeAttr.fill : '#1890FF',
                fillOpacity: .08,
                lineDash: [4, 4],
                radius: 4,
                lineWidth: 1,
            };
            var other = {};
            if (keyShapeAttr.r) {
                other.radius = bbox.width / 2;
            }
            shape = parent.addShape('rect', {
                attrs: __assign(__assign({ width: bbox.width, height: bbox.height, x: x - bbox.width / 2, y: y - bbox.height / 2, nodeId: item.get('id') }, attrs), other)
            });
            item.set('delegateShape', shape);
        }
        shape.attr({ x: x, y: y });
        this.graph.paint();
        this.graph.emit('afternodedrag', shape);
    }
};
var DragNode = (function (_super) {
    __extends(DragNode, _super);
    function DragNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-drag-node';
        _this.register(Event);
        return _this;
    }
    DragNode.prototype.getEvents = function () {
        return {
            "node:dragstart": "onNodeDragStart",
            'node:drag': 'onNodeDrag',
            "node:dragend": 'onNodeDragEnd'
        };
    };
    return DragNode;
}(registerBehavior_1.default));
exports["default"] = DragNode;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    originInfo: null,
    target: null,
    isSameNode: function (e) {
        return e.target.getParent() && e.target.getParent().getParent() && e.target.getParent().getParent().get('item') === this.originInfo.sourceNode;
    },
    onDragLeave: function (e) {
        if (!this.originInfo)
            return;
        e.item.setHotspotActived(false);
        this.originInfo.targetNode = null;
        this.originInfo.targetAnchor = null;
    },
    onDragEnter: function (e) {
        if (!this.originInfo)
            return;
        e.item.setHotspotActived(true);
        if (!this.isSameNode(e)) {
            this.originInfo.targetNode = e.target.getParent().getParent().get('item');
            this.originInfo.targetAnchor = e.item.get('index');
        }
    },
    onDrag: function (e) {
        this._updateEdgeDelegate(this.target, e.x, e.y);
    },
    _updateEdgeDelegate: function (item, x, y) {
        var edgeShape = item.get('edgeDelegate');
        var self = this;
        if (!edgeShape) {
            var parent = self.graph.get('group');
            edgeShape = parent.addShape('line', {
                attrs: {
                    x1: this.originInfo.x,
                    y1: this.originInfo.y,
                    x2: x,
                    y2: y,
                    stroke: '#1890FF',
                    lineDash: [4, 4],
                    lineWidth: 1
                }
            });
            edgeShape.set('capture', false);
            item.set('edgeDelegate', edgeShape);
        }
        edgeShape.attr({ x2: x, y2: y });
        this.graph.paint();
    },
    onDragStart: function (e) {
        var anchorIndex = e.item.get("index");
        var sourceNode = e.target.getParent().getParent().get("item");
        var model = sourceNode.get('model');
        var point = sourceNode.getAnchorPoints(model)[anchorIndex];
        this.originInfo = {
            x: point.x,
            y: point.y,
            sourceNode: sourceNode,
            sourceAnchor: anchorIndex
        };
        this.showAllAnchor();
        this.graph.set('edgeDragging', true);
        this.target = e.item;
    },
    onDragEnd: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var delegateShape, edgeEndCallback, isAddEdge, MacroCommand;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clearAllAnchor();
                        delegateShape = e.item.get('edgeDelegate');
                        if (delegateShape) {
                            delegateShape.remove();
                        }
                        edgeEndCallback = this.graph.get('edgeEndCallback');
                        return [4, edgeEndCallback(this.originInfo.sourceNode, this.originInfo.targetNode)];
                    case 1:
                        isAddEdge = _a.sent();
                        if (!isAddEdge)
                            return [2];
                        if (this.originInfo.targetNode) {
                            this.graph.add('edge', {
                                source: this.originInfo.sourceNode.get('id'),
                                target: this.originInfo.targetNode.get('id'),
                                sourceAnchor: this.originInfo.sourceAnchor,
                                targetAnchor: this.originInfo.targetAnchor,
                                type: 'cvte-polyline'
                            });
                        }
                        this.graph.setItemState(this.originInfo.sourceNode, 'hoverNode', false);
                        this.graph.emit('onDargEdgeEnd', {
                            sourceNode: this.originInfo.sourceNode,
                            targetNode: this.originInfo.targetNode
                        });
                        MacroCommand = this.graph.get('MacroCommand');
                        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
                        return [2];
                }
            });
        });
    },
    clearAllAnchor: function () {
        var allNode = this.graph.getNodes();
        allNode.forEach(function (node) {
            var group = node.getContainer();
            group.clearAnchor();
        });
        this.graph.setItemState(this.originInfo.sourceNode, 'hover', false);
    },
    showAllAnchor: function (func) {
        var _this = this;
        var allNode = this.graph.getNodes();
        var sourceGroupId = this.originInfo.sourceNode.getModel().groupId;
        allNode.forEach(function (node) {
            var group = node.getContainer();
            if (_this.originInfo.sourceNode === node) {
                group.anchorShapes.forEach(function (a) {
                    a.get('item').showHotpot();
                    var index = a.get('item').get('index');
                    if (index === _this.originInfo.sourceAnchor)
                        _this.graph.setItemState(a.get('item'), 'anchor-active', true);
                });
                return;
            }
            group.showAnchor();
            group.anchorShapes.forEach(function (a) { return a.get('item').showHotpot(); });
        });
    }
};
var HoverAnchor = (function (_super) {
    __extends(HoverAnchor, _super);
    function HoverAnchor(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-drag-anchor';
        _this.register(Event);
        return _this;
    }
    HoverAnchor.prototype.getEvents = function () {
        return {
            "anchor:dragstart": "onDragStart",
            "anchor:dragend": "onDragEnd",
            "anchor:dragenter": "onDragEnter",
            "anchor:dragleave": "onDragLeave",
            "anchor:drag": "onDrag"
        };
    };
    return HoverAnchor;
}(registerBehavior_1.default));
exports["default"] = HoverAnchor;


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    onNodeClick: function (e) {
        this.clearAllSelected();
        this.graph.setItemState(e.item, 'selectNode', true);
        this.graph.set('selectedItem', e.item);
        var group = e.item.get('group');
        this.graph.emit('onSelectNode', e.item, group);
        this.graph.set('noKeyDown', false);
    },
    onEdgeClick: function (e) {
        this.clearAllSelected();
        this.graph.setItemState(e.item, 'selectEdge', true);
        this.graph.set('selectedItem', e.item);
        this.graph.set('noKeyDown', false);
        var group = e.item.get('group');
        this.graph.emit('onSelectedEdge', e.item, group);
    },
    onCanvasClick: function (e) {
        this.graph.set('noKeyDown', false);
        this.clearAllSelected();
    },
    clearAllSelected: function () {
        var _this = this;
        var selectedNode = this.graph.findAllByState('node', 'selectNode');
        this.graph.set('selectedItem', null);
        var selectedEdge = this.graph.findAllByState('edge', 'selectEdge');
        selectedNode.forEach(function (node) {
            _this.graph.setItemState(node, 'selectNode', false);
        });
        selectedEdge.forEach(function (node) {
            _this.graph.setItemState(node, 'selectEdge', false);
        });
        this.graph.emit('onClearSelectNode', null);
    },
    onNodeDoubleClick: function (e) {
        this.graph.setItemState(e.item, 'selectNode', true);
        this.graph.set('selectedItem', e.item);
        this.graph.emit('onDoubleClickNode', e.item);
        this.graph.set('noKeyDown', false);
    },
    onEdgeDoubleClick: function (e) {
        this.clearAllSelected();
        this.graph.setItemState(e.item, 'selectEdge', true);
        this.graph.set('selectedItem', e.item);
        this.graph.set('noKeyDown', false);
        var group = e.item.get('group');
        this.graph.emit('onDoubleClickEdge', e.item, group);
    }
};
var SelectNode = (function (_super) {
    __extends(SelectNode, _super);
    function SelectNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-select-node';
        _this.register(Event);
        return _this;
    }
    SelectNode.prototype.getEvents = function () {
        return {
            'node:click': 'onNodeClick',
            'canvas:click': 'onCanvasClick',
            'edge:click': 'onEdgeClick',
            'node:dblclick': 'onNodeDoubleClick',
            'edge:dblclick': 'onEdgeDoubleClick'
        };
    };
    return SelectNode;
}(registerBehavior_1.default));
exports["default"] = SelectNode;


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    onEdgeMouseEnter: function (e) {
        this.graph.setItemState(e.item, 'hoverEdge', true);
    },
    onEdgeMouseLeave: function (e) {
        this.graph.setItemState(e.item, 'hoverEdge', false);
    }
};
var HoverNode = (function (_super) {
    __extends(HoverNode, _super);
    function HoverNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-hover-edge';
        _this.register(Event);
        return _this;
    }
    HoverNode.prototype.getEvents = function () {
        return {
            'edge:mouseenter': 'onEdgeMouseEnter',
            'edge:mouseleave': 'onEdgeMouseLeave'
        };
    };
    return HoverNode;
}(registerBehavior_1.default));
exports["default"] = HoverNode;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    onKeyDown: function (e) {
        var item = this.graph.get('selectedItem');
        if (this.graph.get('noKeyDown')) {
            return;
        }
        if (e.keyCode === 8 && item) {
            var MacroCommand = this.graph.get('MacroCommand');
            if (MacroCommand) {
                MacroCommand.executeCommand('delete', { graph: this.graph });
            }
            else {
                this.graph.remove(item);
                this.graph.set('selectedItem', null);
            }
        }
    }
};
var HoverNode = (function (_super) {
    __extends(HoverNode, _super);
    function HoverNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-delete-item';
        _this.register(Event);
        return _this;
    }
    HoverNode.prototype.getEvents = function () {
        return {
            'keydown': 'onKeyDown'
        };
    };
    return HoverNode;
}(registerBehavior_1.default));
exports["default"] = HoverNode;


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    onMouseUp: function (e) {
        var addNodeDragging = this.graph.get('addNodeDragging');
        if (!addNodeDragging)
            return;
        var addNodeModel = this.graph.get('addNodeModel');
        var viewPoint = this.graph.getPointByClient(e.clientX, e.clientY);
        var x = viewPoint.x - addNodeModel.offsetX;
        var y = viewPoint.y - addNodeModel.offsetY;
        var nodeId = new Date().getTime();
        var model = __assign({ type: addNodeModel.nodeType, id: "".concat(nodeId), x: x, y: y, style: __assign({}, addNodeModel) }, addNodeModel.model);
        this.graph.addItem('node', model);
        this.graph.paint();
        this.graph.emit('onAddPanelNode', model);
        var MacroCommand = this.graph.get('MacroCommand');
        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
    }
};
var CoverAddNode = (function (_super) {
    __extends(CoverAddNode, _super);
    function CoverAddNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-add-node';
        _this.register(Event);
        return _this;
    }
    CoverAddNode.prototype.getEvents = function () {
        return {
            'canvas:mouseup': 'onMouseUp',
        };
    };
    return CoverAddNode;
}(registerBehavior_1.default));
exports["default"] = CoverAddNode;


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __webpack_require__(9);
var matrix_util_1 = __webpack_require__(37);
var registerBehavior_1 = __importDefault(__webpack_require__(28));
var Event = {
    onDrag: function (shape) {
        this._clearAlignLine();
        this._itemAlign(shape);
    },
    onDragEnd: function () {
        this._clearAlignLine();
    },
    getDefaultCfg: function () {
        return {
            alignLineStyle: { stroke: '#540000', lineWidth: 1 },
            tolerance: 4,
            _alignLines: [],
        };
    },
    _itemAlign: function (item) {
        var _this = this;
        var bbox = item.getBBox();
        var ct = { x: bbox.x + bbox.width / 2, y: bbox.y };
        var cc = { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 };
        var cb = { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height };
        var lc = { x: bbox.x, y: bbox.y + bbox.height / 2 };
        var rc = { x: bbox.x + bbox.width, y: bbox.y + bbox.height / 2 };
        var nodes = item._attrs && item._attrs.nodeId ? this.graph.getNodes().filter(function (n) { return n.get('id') !== item._attrs.nodeId; }) : this.graph.getNodes();
        (0, util_1.each)(nodes, function (node) {
            var horizontalLines = [];
            var verticalLines = [];
            var p = null;
            var bbox1 = node.getBBox();
            (0, util_1.each)(_this.getHorizontalLines(bbox1), function (line) {
                horizontalLines.push(_this.getDistance(line, ct));
                horizontalLines.push(_this.getDistance(line, cc));
                horizontalLines.push(_this.getDistance(line, cb));
            });
            (0, util_1.each)(_this.getVerticalLines(bbox1), function (line) {
                verticalLines.push(_this.getDistance(line, lc));
                verticalLines.push(_this.getDistance(line, cc));
                verticalLines.push(_this.getDistance(line, rc));
            });
            horizontalLines.sort(function (a, b) { return a.dis - b.dis; });
            verticalLines.sort(function (a, b) { return a.dis - b.dis; });
            if (horizontalLines.length > 0 && horizontalLines[0].dis < _this.tolerance) {
                item.attr({ y: horizontalLines[0].line[1] - horizontalLines[0].point.y + bbox.y });
                p = { horizontals: [horizontalLines[0]] };
                for (var i = 1; i < 3; i++)
                    horizontalLines[0].dis === horizontalLines[i].dis && p.horizontals.push(horizontalLines[i]);
            }
            if (verticalLines.length > 0 && verticalLines[0].dis < _this.tolerance) {
                item.attr({ x: verticalLines[0].line[0] - verticalLines[0].point.x + bbox.x });
                p ? p.verticals = [verticalLines[0]] : p = { verticals: [verticalLines[0]] };
                for (var i = 1; i < 3; i++)
                    verticalLines[0].dis === verticalLines[i].dis && p.verticals.push(verticalLines[i]);
            }
            if (p) {
                p.bbox = bbox;
                _this._addAlignLine(p);
            }
        });
    },
    _addAlignLine: function (p) {
        var group = this.graph.get('group');
        var bbox = p.bbox;
        var lineStyle = this.alignLineStyle;
        var lineArr = this._alignLines;
        if (p.horizontals) {
            (0, util_1.each)(p.horizontals, function (lineObj) {
                var line = lineObj.line;
                var point = lineObj.point;
                var lineHalf = (line[0] + line[2]) / 2;
                var x1, x2;
                if (point.x < lineHalf) {
                    x1 = point.x - bbox.width / 2;
                    x2 = Math.max(line[0], line[2]);
                }
                else {
                    x1 = point.x + bbox.width / 2;
                    x2 = Math.min(line[0], line[2]);
                }
                var shape = group.addShape('line', { attrs: (0, util_1.mix)({ x1: x1, y1: line[1], x2: x2, y2: line[1] }, lineStyle), capture: false });
                lineArr.push(shape);
            });
        }
        if (p.verticals) {
            (0, util_1.each)(p.verticals, function (lineObj) {
                var line = lineObj.line;
                var point = lineObj.point;
                var lineHalf = (line[1] + line[3]) / 2;
                var y1, y2;
                if (point.y < lineHalf) {
                    y1 = point.y - bbox.height / 2;
                    y2 = Math.max(line[1], line[3]);
                }
                else {
                    y1 = point.y + bbox.height / 2;
                    y2 = Math.min(line[1], line[3]);
                }
                var shape = group.addShape('line', { attrs: (0, util_1.mix)({ x1: line[0], y1: y1, x2: line[0], y2: y2 }, lineStyle), capture: false });
                lineArr.push(shape);
            });
        }
    },
    getHorizontalLines: function (bbox) {
        return [
            [bbox.minX, bbox.minY, bbox.maxX, bbox.minY],
            [bbox.minX, bbox.centerY, bbox.maxX, bbox.centerY],
            [bbox.minX, bbox.maxY, bbox.maxX, bbox.maxY],
        ];
    },
    getVerticalLines: function (bbox) {
        return [
            [bbox.minX, bbox.minY, bbox.minX, bbox.maxY],
            [bbox.centerX, bbox.minY, bbox.centerX, bbox.maxY],
            [bbox.maxX, bbox.minY, bbox.maxX, bbox.maxY],
        ];
    },
    getDistance: function (line, point) {
        return { line: line, point: point, dis: this.pointLineDistance(line[0], line[1], line[2], line[3], point.x, point.y) };
    },
    pointLineDistance: function (lineX1, lineY1, lineX2, lineY2, pointX, pointY) {
        var lineLength = [lineX2 - lineX1, lineY2 - lineY1];
        if (matrix_util_1.vec2.exactEquals(lineLength, [0, 0]))
            return NaN;
        var s = [-lineLength[1], lineLength[0]];
        matrix_util_1.vec2.normalize(s, s);
        return Math.abs(matrix_util_1.vec2.dot([pointX - lineX1, pointY - lineY1], s));
    },
    _clearAlignLine: function () {
        (0, util_1.each)(this._alignLines, function (line) {
            line.remove();
        });
        this._alignLines = [];
        this.graph.paint();
    },
};
var AlignNode = (function (_super) {
    __extends(AlignNode, _super);
    function AlignNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-align-node';
        _this.register(Event);
        return _this;
    }
    AlignNode.prototype.getEvents = function () {
        return {
            'afternodedrag': 'onDrag',
            'afternodedragend': 'onDragEnd'
        };
    };
    return AlignNode;
}(registerBehavior_1.default));
exports["default"] = AlignNode;


/***/ }),
/* 37 */
/***/ ((module) => {

"use strict";
module.exports = require("@antv/matrix-util");

/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.layoutSetting = void 0;
var layoutDefault = {
    type: 'dagre',
    align: 'DL',
    nodesep: 20,
    ranksep: 50,
    controlPoints: true,
};
exports.layoutSetting = {
    horizontal: __assign(__assign({}, layoutDefault), { rankdir: 'LR' }),
    vertical: __assign(__assign({}, layoutDefault), { rankdir: 'TB' })
};


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlowUtil = void 0;
var FlowUtil = (function () {
    function FlowUtil() {
        this.debounce = function (func, timer) {
            var timeout = null;
            return function () {
                if (!timeout) {
                    timeout = setTimeout(func, timer);
                    return;
                }
                ;
                clearTimeout(timeout);
                timeout = setTimeout(func, timer);
            };
        };
        this.throttle = function () { };
    }
    return FlowUtil;
}());
exports.FlowUtil = FlowUtil;


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(41));
var Workflow_1 = __importDefault(__webpack_require__(1));
var Header_1 = __importDefault(__webpack_require__(42));
var NodePanelGroup_1 = __importDefault(__webpack_require__(47));
var AddNodePanel_1 = __importDefault(__webpack_require__(51));
var CommandPlugin_1 = __importDefault(__webpack_require__(52));
var ToolBarPlugin_1 = __importDefault(__webpack_require__(54));
var command_1 = __importDefault(__webpack_require__(55));
__webpack_require__(67);
var baseSize = {
    listWidth: 200,
    toolHeight: 48
};
var FlowUtil = (function () {
    function FlowUtil() {
        this.autoSize = function (innerHeight, innerWidth) {
            if (innerHeight === void 0) { innerHeight = window.innerHeight; }
            if (innerWidth === void 0) { innerWidth = window.innerWidth; }
            return {
                listWidth: baseSize.listWidth,
                listHeight: innerHeight - baseSize.toolHeight,
                flowWidth: innerWidth - baseSize.listWidth,
                flowHeight: innerHeight - baseSize.toolHeight
            };
        };
        this.debounce = function (func, timer) {
            var timeout = null;
            return function () {
                if (!timeout) {
                    timeout = setTimeout(func, timer);
                    return;
                }
                ;
                clearTimeout(timeout);
                timeout = setTimeout(func, timer);
            };
        };
        this.throttle = function () { };
    }
    return FlowUtil;
}());
var Flow = (function (_super) {
    __extends(Flow, _super);
    function Flow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toolBar = react_1.default.createRef();
        _this.xiooFlow = react_1.default.createRef();
        _this.util = new FlowUtil();
        _this.workflowContainer = react_1.default.createRef();
        _this.nodePanelContainer = react_1.default.createRef();
        _this.workflowInstance = null;
        _this.state = {
            size: {
                listWidth: 0,
                listHeight: 0,
                flowWidth: 0,
                flowHeight: 0
            }
        };
        _this.initWorkflow = function () {
            var size = _this.state.size;
            var _a = _this.props, initEdges = _a.initEdges, initNodes = _a.initNodes, layout = _a.layout, returnGraph = _a.returnGraph, animate = _a.animate, commandList = _a.commandList, judgeEdgeEnd = _a.judgeEdgeEnd, _b = _a.registerNodeList, registerNodeList = _b === void 0 ? [] : _b, _c = _a.registerEdgeList, registerEdgeList = _c === void 0 ? [] : _c, _d = _a.registerNodes, registerNodes = _d === void 0 ? [] : _d, _e = _a.registerBehaviors, registerBehaviors = _e === void 0 ? [] : _e, _f = _a.initPlugins, initPlugins = _f === void 0 ? [] : _f, treeGroup = _a.treeGroup, defaultEdge = _a.defaultEdge, defaultNode = _a.defaultNode, modes = _a.modes, _g = _a.mode, mode = _g === void 0 ? 'edit' : _g;
            var Command = new CommandPlugin_1.default();
            var plugins = [Command];
            if (_this.nodePanelContainer.current) {
                var NodePanel = new AddNodePanel_1.default({ container: _this.nodePanelContainer.current });
                plugins.push(NodePanel);
            }
            if (_this.toolBar.current) {
                var ToolBar = new ToolBarPlugin_1.default({ container: _this.toolBar.current });
                plugins.push(ToolBar);
            }
            var workflowInstance = new Workflow_1.default({
                container: _this.workflowContainer.current,
                width: size.flowWidth,
                height: size.flowHeight,
                plugins: plugins.concat(initPlugins),
                layout: layout,
                initNodes: initNodes,
                initEdges: initEdges,
                registerNodes: registerNodes,
                animate: animate,
                registerEdgeList: registerEdgeList,
                registerBehaviors: registerBehaviors,
                edgeCallback: judgeEdgeEnd,
                treeGroup: treeGroup,
                defaultEdge: defaultEdge,
                defaultNode: defaultNode,
                modes: modes
            });
            workflowInstance.graph.setMode(mode);
            workflowInstance.graph.on('onDoubleClickNode', function (e) {
            });
            workflowInstance.graph.on('onDargEdgeEnd', function (e) {
                console.log(e);
            });
            _this.workflowInstance = workflowInstance;
            _this.registerListener();
            returnGraph && returnGraph(_this.workflowInstance);
            (0, command_1.default)(commandList);
        };
        _this.registerListener = function () {
            var listeners = _this.props.listeners;
            Object.keys(listeners).forEach(function (key) {
                _this.workflowInstance.graph.on(key, listeners[key]);
            });
        };
        _this.handleHeaderChange = function (key) {
        };
        return _this;
    }
    Flow.prototype.componentDidMount = function () {
        var _this = this;
        var observer = new ResizeObserver(function (entity) {
            var _a = entity[0].contentRect, height = _a.height, width = _a.width;
            console.log(entity);
            _this.autoSize(height, width);
        });
        observer.observe(this.xiooFlow.current);
    };
    Flow.prototype.autoSize = function (height, width) {
        var _this = this;
        var size = this.util.autoSize(height, width);
        this.setState({ size: size }, function () {
            if (!_this.workflowInstance) {
                _this.initWorkflow();
            }
        });
        if (this.workflowInstance) {
            this.workflowInstance.graph.changeSize(size.flowWidth, size.flowHeight);
        }
    };
    Flow.prototype.render = function () {
        var _a = this.props.mode, mode = _a === void 0 ? 'edit' : _a;
        return (react_1.default.createElement("div", { className: "xioo-flow", id: "xioo-flow", ref: this.xiooFlow },
            this.props.ExtraElement,
            mode === 'edit' && (react_1.default.createElement("div", { className: "xioo-flow-header", ref: this.toolBar },
                react_1.default.createElement(Header_1.default, { xiooFlow: this.xiooFlow, unusedCommands: this.props.unusedCommands }, this.props.toolbar))),
            react_1.default.createElement("div", { className: "xioo-flow-body", style: { height: this.state.size.flowHeight } },
                mode === 'edit' && (react_1.default.createElement("div", { className: "xioo-flow-body-node", ref: this.nodePanelContainer, style: { width: this.state.size.listWidth } },
                    react_1.default.createElement(NodePanelGroup_1.default, { groupNodeList: this.props.groupNodeList }))),
                react_1.default.createElement("div", { className: "xioo-flow-body-flow", ref: this.workflowContainer, style: { width: mode === 'edit' ? this.state.size.flowWidth : this.state.size.flowWidth + baseSize.listWidth, height: mode === 'edit' ? this.state.size.flowHeight : this.state.size.flowHeight + baseSize.toolHeight } }))));
    };
    Flow.defaultProps = {
        groupNodeList: [],
        initNodes: [],
        initEdges: [],
        listeners: {},
        animate: false,
        commandList: [],
        registerBehaviors: [],
        treeGroup: false
    };
    return Flow;
}(react_1.Component));
exports["default"] = Flow;


/***/ }),
/* 41 */
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(41));
__webpack_require__(43);
function filterHeaderGroups(headerGroups, commandsToRemove) {
    return headerGroups.map(function (group) { return ({
        icons: group.icons.filter(function (icon) { return !commandsToRemove.includes(icon.command); }),
    }); }).filter(function (group) { return group.icons.length > 0; });
}
var headerGroups = [
    {
        icons: [
            { command: "undo", iconClass: "fa fa-mail-reply", text: "撤销" },
            { command: "redo", iconClass: "fa fa-mail-forward", text: "恢复" },
        ],
    },
    {
        icons: [
            { command: "copy", iconClass: "fa fa-clone", text: "复制" },
            { command: "delete", iconClass: "fa fa-trash-o", text: "删除" },
        ],
    },
    {
        icons: [
            {
                command: "blow",
                iconClass: "fa fa-search-plus",
                text: "放大",
                params: { value: 0.1 },
            },
            {
                command: "blow",
                iconClass: "fa fa-search-minus",
                text: "缩小",
                params: { value: -0.1 },
            },
            { command: "fitView", iconClass: "fa fa-laptop", text: "适应画布" },
            {
                command: "originSize",
                iconClass: "fa fa-calendar-check-o",
                text: "实际大小",
            },
            { command: "layout", iconClass: "fa fa-cube", text: "重新布局" },
        ],
    },
    {
        icons: [
            {
                command: "fullScreen",
                iconClass: "fa fa-window-maximize",
                text: "全屏",
                params: { domId: "xioo-flow" },
            },
        ],
    },
];
var index = (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleFullScreen = function () {
            var el = _this.props.xiooFlow.current;
            var rfs = el.requestFullScreen ||
                el.webkitRequestFullScreen ||
                el.mozRequestFullScreen ||
                el.msRequestFullScreen;
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
                return;
            }
        };
        return _this;
    }
    index.prototype.render = function () {
        var _a = this.props.unusedCommands, unusedCommands = _a === void 0 ? [] : _a;
        return (react_1.default.createElement("div", { className: "xioo-work-header" },
            filterHeaderGroups(headerGroups, unusedCommands).map(function (group, groupIndex) { return (react_1.default.createElement("div", { key: groupIndex, className: "xioo-work-header-group" }, group.icons.map(function (icon, iconIndex) { return (react_1.default.createElement("div", { key: iconIndex, className: "xioo-work-header-group-icon".concat(icon.params ? " actionable" : ""), "data-command": icon.command, "data-params": icon.params ? "".concat(JSON.stringify(icon.params)) : undefined },
                react_1.default.createElement("span", { className: "operate ".concat(icon.iconClass) }),
                react_1.default.createElement("span", { className: "icon-text" }, icon.text))); }))); }),
            react_1.default.Children.map(this.props.children, function (child, index) {
                var childProps = child.props;
                return react_1.default.cloneElement(child, childProps);
            })));
    };
    return index;
}(react_1.Component));
exports["default"] = index;


/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(44);
            var content = __webpack_require__(45);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 44 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 45 */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".xioo-work-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.xioo-work-header .xioo-work-header-group {\n  display: flex;\n  padding: 0px 8px;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon {\n  width: 30px;\n  height: 30px;\n  border: 1px solid transparent;\n  transition: 0.3s;\n  border-radius: 2px;\n  margin: 0 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon.actionable .operate {\n  color: #404040;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon .icon-text {\n  display: none;\n  position: absolute;\n  font-size: 12px;\n  height: 20px;\n  width: 60px;\n  background: #1990FF;\n  border-radius: 4px;\n  justify-content: center;\n  align-items: center;\n  top: 35px;\n  color: #fff;\n  border: 1px solid #0184FF;\n  box-shadow: 0 2px 4px 1px #c0c0c0;\n  opacity: 0;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon .icon-text::before {\n  content: '';\n  border: 10px solid transparent;\n  border-bottom-color: #1990FF;\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  top: -20px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon:hover {\n  border: 1px solid #f0f0f0;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon:hover .operate {\n  color: #1990FF;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon:hover .icon-text {\n  display: flex;\n  transition: 0.3s;\n  opacity: 1;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon .operate {\n  font-size: 18px;\n  color: #A2A2A2;\n  transition: 0.3s;\n}\n.xioo-work-header .xioo-work-header-group + .xioo-work-header-group {\n  border-left: 1px solid #f0f0f0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(41));
var NodeGenerate_1 = __importDefault(__webpack_require__(48));
__webpack_require__(49);
var NodePanelGroup = (function (_super) {
    __extends(NodePanelGroup, _super);
    function NodePanelGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            panelVisible: {},
            nodePanelGroup: []
        };
        _this.initNodeData = function () {
            var panelVisible = _this.state.panelVisible;
            var groupNodeList = _this.props.groupNodeList;
            var nodePanelGroup = groupNodeList.map(function (group) {
                panelVisible[group.groupKey] = group.defaultOpen ? group.defaultOpen : false;
                group.nodes = group.nodes.map(function (item) {
                    var attr = __assign(__assign({}, (item.style || {})), { img: item.icon, text: item.text, thumbnail: item.thumbnail, position: item.position, nodeType: item.nodeType, model: item.model || {} });
                    item.attrs = attr;
                    return item;
                });
                return group;
            });
            _this.setState({ nodePanelGroup: nodePanelGroup, panelVisible: panelVisible });
        };
        _this.handlePanelHeader = function (groupKey) {
            var panelVisible = _this.state.panelVisible;
            panelVisible[groupKey] = !panelVisible[groupKey];
            _this.setState({ panelVisible: panelVisible });
        };
        return _this;
    }
    NodePanelGroup.prototype.componentDidMount = function () {
        this.initNodeData();
    };
    Object.defineProperty(NodePanelGroup.prototype, "NodePanel", {
        get: function () {
            var _this = this;
            var _a = this.state.nodePanelGroup, nodePanelGroup = _a === void 0 ? [] : _a;
            return nodePanelGroup.map(function (item) {
                return (react_1.default.createElement("div", { className: "flow-group-panel", key: item.groupKey },
                    react_1.default.createElement("div", { className: "flow-group-panel-header", onClick: function () { return _this.handlePanelHeader(item.groupKey); } },
                        react_1.default.createElement("div", { className: "flow-group-panel-header-title ".concat(_this.state.panelVisible[item.groupKey] ? 'active' : '') },
                            react_1.default.createElement("div", { className: "flow-group-panel-header-icon" },
                                react_1.default.createElement("span", { className: "fa ".concat(item.groupIcon) })),
                            react_1.default.createElement("div", { className: "flow-group-panel-header-name" }, item.groupName)),
                        react_1.default.createElement("div", { className: "flow-group-panel-header-drop" },
                            react_1.default.createElement("span", { className: "fa fa-chevron-right flow-drop-down ".concat(_this.state.panelVisible[item.groupKey] ? 'active' : '') }))),
                    react_1.default.createElement("div", { className: "flow-group-panel-body ".concat(_this.state.panelVisible[item.groupKey] ? 'active' : 'unactive'), style: {
                            height: "".concat(_this.state.panelVisible[item.groupKey] ? 84 * item.nodes.length + 'px' : '0px')
                        } }, item.nodes && item.nodes.map(function (node, index) {
                        return react_1.default.createElement(NodeGenerate_1.default, { key: node.nodeType + index, node: node });
                    }))));
            });
        },
        enumerable: false,
        configurable: true
    });
    NodePanelGroup.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "flow-group" }, this.NodePanel));
    };
    return NodePanelGroup;
}(react_1.Component));
exports["default"] = NodePanelGroup;


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(41));
var HtmlNodes = {
    rect: function (attr) {
        return (react_1.default.createElement("div", { className: "panel-node rect" },
            react_1.default.createElement("div", { draggable: "true", "data-item": JSON.stringify(attr), className: "node-item rect", style: {
                    width: 100,
                    height: 50,
                    backgroundColor: attr.fill,
                    border: "2px solid ".concat(attr.stroke),
                    borderRadius: 4
                } }, attr.img && react_1.default.createElement("img", { src: attr.img, className: "panel-node-rect-icon" })),
            attr.text));
    },
    circle: function (attr) {
        return (react_1.default.createElement("div", { className: "panel-node circle" },
            react_1.default.createElement("div", { draggable: "true", "data-item": JSON.stringify(attr), className: "node-item circle", style: {
                    width: 50,
                    height: 50,
                    backgroundColor: attr.fill,
                    border: "2px solid ".concat(attr.stroke),
                    borderRadius: '50%'
                } },
                react_1.default.createElement("img", { src: attr.img, className: "panel-node-rect-icon" })),
            attr.text));
    },
    trigon: function (attr) {
        var position = {
            top: '▲',
            bottom: '▼',
            left: '◀︎',
            right: '▶'
        };
        var insert = {
            top: '10px 0 0',
            bottom: '0 0 14px 0',
            left: '0 0 0 10px',
            right: '0 20px 8px 0'
        };
        var insertStyle = {
            inset: insert[attr.position]
        };
        return (react_1.default.createElement("div", { className: "panel-node circle" },
            react_1.default.createElement("div", { draggable: "true", "data-item": JSON.stringify(attr), className: "node-item", style: {
                    fontSize: 64,
                    color: attr.fill,
                    lineHeight: '50px',
                    backgroundColor: 'transparent',
                    position: 'relative'
                } },
                react_1.default.createElement("img", { src: attr.img, className: "panel-node-rect-icon", style: __assign(__assign({ position: 'absolute' }, insertStyle), { margin: 'auto', width: 30, height: 30 }) }),
                position[attr.position ? attr.position : 'top']),
            attr.text));
    },
    diamond: function (attr) {
        return (react_1.default.createElement("div", { className: "panel-node" },
            react_1.default.createElement("div", { draggable: "true", "data-item": JSON.stringify(attr), className: "node-item diamond", style: {
                    width: 35,
                    height: 35,
                    backgroundColor: attr.fill,
                    border: "2px solid ".concat(attr.stroke),
                    borderRadius: 4
                } }, attr.img && react_1.default.createElement("img", { src: attr.img, className: "panel-node-rect-icon diamond" })),
            attr.text));
    }
};
var HtmlNode = function (_a) {
    var node = _a.node;
    return HtmlNodes[node.thumbnail](node.attrs);
};
exports["default"] = HtmlNode;


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(44);
            var content = __webpack_require__(50);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 50 */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".flow-group {\n  font-size: 12px;\n}\n.flow-group .flow-group-panel .flow-group-panel-header {\n  height: 40px;\n  width: 100%;\n  border: 1px solid #c0c0c0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-title {\n  display: flex;\n  align-items: center;\n  color: #504f4f;\n  transition: 0.3s;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-title.active {\n  color: #007ef5;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-title .flow-group-panel-header-name {\n  font-size: 14px;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-title .flow-group-panel-header-icon {\n  font-size: 14px;\n  margin-right: 8px;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-drop .flow-drop-down {\n  transition: 0.3s;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-drop .flow-drop-down.active {\n  transform: rotate(90deg);\n  color: #007ef5;\n}\n.flow-group .flow-group-panel .flow-group-panel-body {\n  background-color: #f3f2f2;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease;\n  overflow: hidden;\n}\n.flow-group .flow-group-panel .flow-group-panel-body.show {\n  display: flex;\n}\n.flow-group .flow-group-panel .flow-group-panel-body.hide {\n  display: none;\n}\n.flow-group .panel-node {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: move;\n  position: relative;\n  flex-flow: column;\n  width: 100%;\n  margin-top: 8px;\n}\n.flow-group .panel-node .node-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.flow-group .panel-node .node-item .panel-node-rect-icon {\n  height: 30px;\n  width: 30px;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.flow-group .panel-node .node-item .panel-node-rect-icon.diamond {\n  transform: rotate(-45deg);\n  width: 25px;\n  height: 25px;\n}\n.flow-group .panel-node .node-item.diamond {\n  transform: rotate(45deg);\n  margin-bottom: 10px;\n}\n.flow-group .panel-node + .panel-node {\n  border-top: 1px solid #c0c0c0;\n}\n.flow-group .panel-node + .panel-node .node-item {\n  margin-top: 8px;\n}\n@keyframes GroupHeaderUp {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes GroupHeaderDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    height: 0px;\n    opacity: 0;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __webpack_require__(9);
var AddNodePanel = (function () {
    function AddNodePanel(cfgs) {
        this._cfgs = (0, util_1.deepMix)(this.getDefaultCfg(), cfgs);
    }
    AddNodePanel.prototype.getDefaultCfg = function () {
        return { container: null };
    };
    AddNodePanel.prototype.get = function (key) {
        return this._cfgs[key];
    };
    AddNodePanel.prototype.set = function (key, val) {
        this._cfgs[key] = val;
    };
    AddNodePanel.prototype.initPlugin = function (graph) {
        var parentNode = this.get('container');
        var children = parentNode.querySelectorAll('div[data-item]');
        (0, util_1.each)(children, function (child, i) {
            child.addEventListener('dragstart', function (e) {
                graph.set('addNodeDragging', true);
                var nodeData = child.getAttribute('data-item');
                var nodeModel = JSON.parse(nodeData);
                var model = __assign({ nodeType: nodeModel.nodeName, offsetX: e.offsetX, offsetY: e.offsetY }, nodeModel);
                graph.set('addNodeModel', model);
            });
            child.addEventListener('dragend', function (e) {
                graph.emit('canvas:mouseup', e);
                graph.set('addNodeDragging', false);
            });
        });
    };
    AddNodePanel.prototype.destroy = function () {
        this.get('canvas').destroy();
        var container = this.get('container');
        container.parentNode.removeChild(container);
    };
    return AddNodePanel;
}());
exports["default"] = AddNodePanel;


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __webpack_require__(9);
var MacroCommand_1 = __importDefault(__webpack_require__(53));
var CommandPlugin = (function () {
    function CommandPlugin(cfgs) {
        if (cfgs === void 0) { cfgs = {}; }
        this._cfgs = (0, util_1.deepMix)(this.getDefaultCfg(), cfgs);
    }
    CommandPlugin.prototype.getDefaultCfg = function () {
        return { container: null };
    };
    CommandPlugin.prototype.get = function (key) {
        return this._cfgs[key];
    };
    CommandPlugin.prototype.set = function (key, val) {
        this._cfgs[key] = val;
    };
    CommandPlugin.prototype.initPlugin = function (graph) {
        graph.set('MacroCommand', MacroCommand_1.default);
    };
    CommandPlugin.prototype.destroy = function () {
    };
    return CommandPlugin;
}());
exports["default"] = CommandPlugin;


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var MacroCommand = (function () {
    function MacroCommand() {
        this.commands = {};
    }
    MacroCommand.prototype.registerCommand = function (name, Command) {
        if (this.commands[name])
            new Error("the ".concat(name, " command already exists"));
        this.commands[name] = Command;
    };
    MacroCommand.prototype.executeCommand = function (name, cfg) {
        this.commands[name] && this.commands[name].execute(cfg);
    };
    return MacroCommand;
}());
exports["default"] = new MacroCommand();


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __webpack_require__(9);
var select = ['copy', 'delete'];
var TooBarPlugin = (function () {
    function TooBarPlugin(cfgs) {
        this._cfgs = (0, util_1.deepMix)(this.getDefaultCfg(), cfgs);
    }
    TooBarPlugin.prototype.getDefaultCfg = function () {
        return { container: null };
    };
    TooBarPlugin.prototype.get = function (key) {
        return this._cfgs[key];
    };
    TooBarPlugin.prototype.set = function (key, val) {
        this._cfgs[key] = val;
    };
    TooBarPlugin.prototype.initPlugin = function (graph) {
        var parentNode = this.get('container');
        var children = parentNode.querySelectorAll('.xioo-work-header .xioo-work-header-group div[data-command]');
        (0, util_1.each)(children, function (child) {
            var name = child.getAttribute('data-command');
            var params = child.getAttribute('data-params');
            params = params ? JSON.parse(params) : {};
            child.addEventListener('click', function () {
                var command = graph.get('MacroCommand');
                command && command.executeCommand(name, __assign({ graph: graph }, params));
            });
        });
        graph.on('onSelectNode', function (item) {
            select.forEach(function (key) {
                var CopyDOM = parentNode.querySelector(".xioo-work-header .xioo-work-header-group div[data-command='".concat(key, "']"));
                CopyDOM.classList.add('actionable');
            });
        });
        graph.on('onClearSelectNode', function () {
            select.forEach(function (key) {
                var CopyDOM = parentNode.querySelector(".xioo-work-header .xioo-work-header-group div[data-command='".concat(key, "']"));
                CopyDOM.classList.remove('actionable');
            });
        });
    };
    TooBarPlugin.prototype.destroy = function () {
        this.get('canvas').destroy();
        var container = this.get('container');
        container.parentNode.removeChild(container);
    };
    return TooBarPlugin;
}());
exports["default"] = TooBarPlugin;


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var MacroCommand_1 = __importDefault(__webpack_require__(53));
var reload_1 = __importDefault(__webpack_require__(56));
var copy_1 = __importDefault(__webpack_require__(57));
var delete_1 = __importDefault(__webpack_require__(58));
var blow_1 = __importDefault(__webpack_require__(59));
var fitView_1 = __importDefault(__webpack_require__(60));
var originSize_1 = __importDefault(__webpack_require__(61));
var layout_1 = __importDefault(__webpack_require__(62));
var fullScreen_1 = __importDefault(__webpack_require__(63));
var undo_1 = __importDefault(__webpack_require__(64));
var redo_1 = __importDefault(__webpack_require__(65));
var docat_1 = __importDefault(__webpack_require__(66));
exports["default"] = (function (commontList) {
    if (commontList === void 0) { commontList = []; }
    MacroCommand_1.default.registerCommand('reload', new reload_1.default());
    MacroCommand_1.default.registerCommand('copy', new copy_1.default());
    MacroCommand_1.default.registerCommand('delete', new delete_1.default());
    MacroCommand_1.default.registerCommand('blow', new blow_1.default());
    MacroCommand_1.default.registerCommand('fitView', new fitView_1.default());
    MacroCommand_1.default.registerCommand('originSize', new originSize_1.default());
    MacroCommand_1.default.registerCommand('layout', new layout_1.default());
    MacroCommand_1.default.registerCommand('fullScreen', new fullScreen_1.default());
    MacroCommand_1.default.registerCommand('undo', new undo_1.default());
    MacroCommand_1.default.registerCommand('redo', new redo_1.default());
    MacroCommand_1.default.registerCommand('docat', new docat_1.default());
    commontList.forEach(function (item) {
        MacroCommand_1.default.registerCommand(item.command, new item.CommandObject());
    });
});


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ReloadCommand = (function () {
    function ReloadCommand() {
    }
    ReloadCommand.prototype.execute = function (cfg) {
        var graph = cfg.graph;
    };
    return ReloadCommand;
}());
exports["default"] = ReloadCommand;


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var CopyCommand = (function () {
    function CopyCommand() {
    }
    CopyCommand.prototype.execute = function (_a) {
        var graph = _a.graph;
        var item = graph.get('selectedItem');
        if (!item) {
            return;
        }
        var model = item.get('model');
        var id = Math.random();
        graph.addItem('node', __assign(__assign({}, model), { x: model.x + 10, y: model.y + 10, id: "".concat(id) }));
        graph.paint();
        var MacroCommand = graph.get('MacroCommand');
        MacroCommand.executeCommand('docat', { graph: graph });
    };
    return CopyCommand;
}());
exports["default"] = CopyCommand;


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var DeleteCommand = (function () {
    function DeleteCommand() {
    }
    DeleteCommand.prototype.execute = function (_a) {
        var graph = _a.graph;
        var item = graph.get('selectedItem');
        if (!item)
            return;
        graph.remove(item);
        graph.set('selectedItem', null);
        graph.emit('onClearSelectNode', null);
        var MacroCommand = graph.get('MacroCommand');
        MacroCommand.executeCommand('docat', { graph: graph });
    };
    return DeleteCommand;
}());
exports["default"] = DeleteCommand;


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var BlowCommand = (function () {
    function BlowCommand() {
    }
    BlowCommand.prototype.execute = function (_a) {
        var graph = _a.graph, value = _a.value;
        var zoom = graph.getZoom();
        var newValue = zoom + value;
        graph.zoomTo(newValue);
    };
    return BlowCommand;
}());
exports["default"] = BlowCommand;


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var FitViewCommand = (function () {
    function FitViewCommand() {
    }
    FitViewCommand.prototype.execute = function (_a) {
        var graph = _a.graph;
        graph.fitView(20);
    };
    return FitViewCommand;
}());
exports["default"] = FitViewCommand;


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var OriginSizeCommand = (function () {
    function OriginSizeCommand() {
    }
    OriginSizeCommand.prototype.execute = function (_a) {
        var graph = _a.graph;
        graph.zoomTo(1);
    };
    return OriginSizeCommand;
}());
exports["default"] = OriginSizeCommand;


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var LayoutCommand = (function () {
    function LayoutCommand() {
    }
    LayoutCommand.prototype.execute = function (_a) {
        var graph = _a.graph;
        graph.layout();
    };
    return LayoutCommand;
}());
exports["default"] = LayoutCommand;


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var FullScreenCommand = (function () {
    function FullScreenCommand() {
    }
    FullScreenCommand.prototype.execute = function (_a) {
        var graph = _a.graph, domId = _a.domId;
        var el = document.getElementById(domId);
        var rfs = el.requestFullScreen ||
            el.webkitRequestFullScreen ||
            el.mozRequestFullScreen ||
            el.msRequestFullScreen;
        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
            graph.paint();
            return;
        }
    };
    return FullScreenCommand;
}());
exports["default"] = FullScreenCommand;


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __webpack_require__(9);
var UndoCommand = (function () {
    function UndoCommand() {
    }
    UndoCommand.prototype.execute = function (_a) {
        var graph = _a.graph;
        var undoStack = graph.getUndoStack();
        if (!undoStack || undoStack.length === 1) {
            return;
        }
        var currentData = undoStack.pop();
        if (currentData) {
            var action = currentData.action;
            graph.pushStack(action, (0, util_1.clone)(currentData.data), 'redo');
            var data_1 = currentData.data.before;
            if (action === 'add') {
                data_1 = currentData.data.after;
            }
            if (!data_1)
                return;
            switch (action) {
                case 'visible': {
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            var item = graph.findById(model.id);
                            if (model.visible) {
                                graph.showItem(item, false);
                            }
                            else {
                                graph.hideItem(item, false);
                            }
                        });
                    });
                    break;
                }
                case 'render':
                case 'update':
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            graph.updateItem(model.id, model, false);
                        });
                    });
                    break;
                case 'changedata':
                    graph.changeData(data_1, false);
                    break;
                case 'delete': {
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            var itemType = model.itemType;
                            delete model.itemType;
                            graph.addItem(itemType, model, false);
                        });
                    });
                    break;
                }
                case 'add':
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            graph.removeItem(model.id, false);
                        });
                    });
                    break;
                case 'updateComboTree':
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            graph.updateComboTree(model.id, model.parentId, false);
                        });
                    });
                    break;
                default:
            }
        }
        var MacroCommand = graph.get('MacroCommand');
        MacroCommand.executeCommand('docat', { graph: graph });
    };
    return UndoCommand;
}());
exports["default"] = UndoCommand;


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __webpack_require__(9);
var RedoCommand = (function () {
    function RedoCommand() {
    }
    RedoCommand.prototype.execute = function (_a) {
        var graph = _a.graph;
        var redoStack = graph.getRedoStack();
        if (!redoStack || redoStack.length === 0) {
            return;
        }
        var currentData = redoStack.pop();
        if (currentData) {
            var action = currentData.action;
            var data_1 = currentData.data.after;
            graph.pushStack(action, (0, util_1.clone)(currentData.data));
            if (action === 'delete') {
                data_1 = currentData.data.before;
            }
            if (!data_1)
                return;
            switch (action) {
                case 'visible': {
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            var item = graph.findById(model.id);
                            if (model.visible) {
                                graph.showItem(item, false);
                            }
                            else {
                                graph.hideItem(item, false);
                            }
                        });
                    });
                    break;
                }
                case 'render':
                case 'update':
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            graph.updateItem(model.id, model, false);
                        });
                    });
                    break;
                case 'changedata':
                    graph.changeData(data_1, false);
                    break;
                case 'delete':
                    if (data_1.edges) {
                        data_1.edges.forEach(function (model) {
                            graph.removeItem(model.id, false);
                        });
                    }
                    if (data_1.nodes) {
                        data_1.nodes.forEach(function (model) {
                            graph.removeItem(model.id, false);
                        });
                    }
                    if (data_1.combos) {
                        data_1.combos.forEach(function (model) {
                            graph.removeItem(model.id, false);
                        });
                    }
                    break;
                case 'add': {
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            var itemType = model.itemType;
                            delete model.itemType;
                            graph.addItem(itemType, model, false);
                        });
                    });
                    break;
                }
                case 'updateComboTree':
                    Object.keys(data_1).forEach(function (key) {
                        var array = data_1[key];
                        if (!array)
                            return;
                        array.forEach(function (model) {
                            graph.updateComboTree(model.id, model.parentId, false);
                        });
                    });
                    break;
                default:
            }
        }
        var MacroCommand = graph.get('MacroCommand');
        MacroCommand.executeCommand('docat', { graph: graph });
    };
    return RedoCommand;
}());
exports["default"] = RedoCommand;


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var CopyCommand = (function () {
    function CopyCommand() {
    }
    CopyCommand.prototype.execute = function (_a) {
        var graph = _a.graph;
        this.operationStyle('undo', graph);
        this.operationStyle('redo', graph);
    };
    CopyCommand.prototype.operationStyle = function (attr, graph) {
        var dom = document.querySelector("div[data-command=\"".concat(attr, "\"]"));
        if (attr === 'undo') {
            var undoStack = graph.getUndoStack();
            this.addStyle(dom, !undoStack || undoStack.length === 1);
        }
        if (attr === 'redo') {
            var redoStack = graph.getRedoStack();
            this.addStyle(dom, !redoStack || redoStack.length === 0);
        }
    };
    CopyCommand.prototype.addStyle = function (dom, isStyle) {
        if (dom) {
            if (isStyle) {
                dom.classList.remove('actionable');
            }
            else {
                dom.classList.add('actionable');
            }
        }
    };
    return CopyCommand;
}());
exports["default"] = CopyCommand;


/***/ }),
/* 67 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(44);
            var content = __webpack_require__(68);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 68 */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(46);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.xioo-flow {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background-color: #fff;\n}\n.xioo-flow .xioo-flow-header {\n  height: 48px;\n  width: 100%;\n  background-color: #ffffff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 0px 24px;\n}\n.xioo-flow .xioo-flow-body {\n  display: flex;\n}\n.xioo-flow .xioo-flow-body .xioo-flow-body-node {\n  border-right: 1px solid #e0e0e0;\n  overflow: scroll;\n  height: 100%;\n}\n.xioo-flow .xioo-flow-body .xioo-flow-body-node .xioo-panel-item {\n  width: 100%;\n  height: 50px;\n  background-color: chocolate;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 69 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToolItem = exports.ToolGroup = void 0;
var ToolGroup_1 = __importDefault(__webpack_require__(70));
exports.ToolGroup = ToolGroup_1.default;
var ToolItem_1 = __importDefault(__webpack_require__(72));
exports.ToolItem = ToolItem_1.default;


/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ToolGroup_1 = __importDefault(__webpack_require__(71));
exports["default"] = ToolGroup_1.default;


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(41));
var ToolGroup = (0, react_1.memo)(function (_a) {
    var children = _a.children, onChange = _a.onChange;
    return (react_1.default.createElement("div", { className: "xioo-work-header-group" }, react_1.default.Children.map(children, function (child) {
        var childProps = child.props;
        return react_1.default.cloneElement(child, __assign(__assign({}, childProps), { onChange: onChange }));
    })));
});
exports["default"] = ToolGroup;


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ToolItem_1 = __importDefault(__webpack_require__(73));
exports["default"] = ToolItem_1.default;


/***/ }),
/* 73 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(41));
var ToolItem = (0, react_1.memo)(function (_a) {
    var text = _a.text, icon = _a.icon, command = _a.command, params = _a.params, _b = _a.status, status = _b === void 0 ? true : _b, event = _a.event, onChange = _a.onChange;
    var _c = (0, react_1.useState)({}), divProps = _c[0], setDivParps = _c[1];
    (0, react_1.useEffect)(function () {
        var startProps = {};
        if (command) {
            startProps['data-command'] = command;
        }
        if (params) {
            startProps['data-params'] = JSON.stringify(params);
        }
        setDivParps(startProps);
    }, ["command", "params"]);
    var handleClick = function () {
        onChange && onChange(event);
    };
    return (react_1.default.createElement("div", __assign({ className: "xioo-work-header-group-icon ".concat(status ? 'actionable' : '') }, divProps, { onClick: handleClick }),
        react_1.default.createElement("span", { className: "operate fa ".concat(icon) }),
        react_1.default.createElement("span", { className: "icon-text" }, text)));
});
exports["default"] = ToolItem;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});