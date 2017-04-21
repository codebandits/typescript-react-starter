"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var Counter_1 = require("./Counter");
var actions_1 = require("../actions/actions");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.increment = _this.increment.bind(_this);
        _this.decrement = _this.decrement.bind(_this);
        return _this;
    }
    Hello.prototype.increment = function () {
        this.props.actions.incrementAction();
    };
    Hello.prototype.decrement = function () {
        this.props.actions.decrementAction();
    };
    Hello.prototype.render = function () {
        return <div>
            <h1>Hello typescript and react!</h1>
            <Counter_1.default counter={this.props.counter} decrement={this.decrement} increment={this.increment}/>
        </div>;
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
exports.mapStateToProps = function (state) {
    return state.counters;
};
exports.mapDispatchToProps = function (dispatch) {
    return {
        actions: redux_1.bindActionCreators(actions_1.default, dispatch)
    };
};
exports.default = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(Hello);
