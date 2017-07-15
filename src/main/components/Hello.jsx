"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
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
        this.props.incrementAction();
    };
    Hello.prototype.decrement = function () {
        this.props.decrementAction();
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
        incrementAction: function () { dispatch(actions_1.default.incrementAction()); },
        decrementAction: function () { dispatch(actions_1.default.decrementAction()); }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(Hello);
