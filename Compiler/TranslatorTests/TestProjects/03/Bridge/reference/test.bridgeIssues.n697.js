/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N697.ComponentHelpers$1', function (TProps) { return {
    statics: {
        wrapProps: function (TProps) {
            return Bridge.fn.bind(this, function (props) {
                throw new Bridge.NotImplementedException();
            });
        }
    }
}; });

Bridge.define('Test.BridgeIssues.N697.ReactElement');

Bridge.define('Test.BridgeIssues.N697.StatelessComponent$1', function (TProps) { return {
    statics: {
        _reactStatelessRenderFunction: null,
        op_Implicit$1: function (component) {
            if (component === null)
                throw new Bridge.ArgumentNullException("component");

            return component._reactElement;
        },
        op_Implicit: function (component) {
            if (component === null)
                throw new Bridge.ArgumentNullException("component");

            return component._reactElement;
        }
    },
    _reactElement: null,
    constructor: function (props, children) {
        if (children !== null) {
            if (Bridge.Linq.Enumerable.from(children).any(function (element) {
                return element === null;
            }))
                throw new Bridge.ArgumentException("Null reference encountered in children set");
        }

        // When preparing the "_reactStatelessRenderFunction" reference, a local "reactStatelessRenderFunction" alias is used - this is just so that the JavaScript
        // code further down (which calls React.createElement) can use this local alias and not have to know how Bridge stores static references
        var reactStatelessRenderFunction = Bridge.get(Test.BridgeIssues.N697.StatelessComponent$1(TProps))._reactStatelessRenderFunction;
        if (reactStatelessRenderFunction === null) {
            reactStatelessRenderFunction = this.createStatelessRenderFunction();
            Bridge.get(Test.BridgeIssues.N697.StatelessComponent$1(TProps))._reactStatelessRenderFunction = reactStatelessRenderFunction;
        }

        // When we pass the props reference to React.createElement, React's internals will rip it apart and reform it - which will cause problems if TProps is a
        // class with property getters and setters (or any other function) defined on the prototype, since members from the class prototype are not maintained
        // in this process. Wrapping the props reference into a "value" property gets around this problem, we just have to remember to unwrap them again when
        // we render. In most cases where children are specified as a params array, we don't want the "children require unique keys" warning from React (you
        // don't get it if you call DOM.Div(null, "Item1", "Item2"), so we don't want it in most cases here either - to achieve this, we prepare an arguments
        // array and pass that to React.createElement in an "apply" call. Similar techniques are used in the stateful component.
        var createElementArgs = [reactStatelessRenderFunction, Bridge.get(Test.BridgeIssues.N697.ComponentHelpers$1(TProps)).wrapProps(TProps)(props)];
        if (children !== null)
            createElementArgs = createElementArgs.concat(children);
        this._reactElement = React.createElement.apply(null, createElementArgs);
    },
    /**
     * Props is not used by all components and so this may be null
     *
     * @instance
     * @protected
     * @this Test.BridgeIssues.N697.StatelessComponent$1
     * @memberof Test.BridgeIssues.N697.StatelessComponent$1
     * @function getprops
     * @return  {TProps}
     */
    /**
     * Props is not used by all components and so this may be null
     *
     * @instance
     * @function setprops
     */
    getprops: function () {
        return this.props ? this.props.value : null;
    },
    /**
     * This will never be null nor contain any null references, though it may be empt if there are children to render
     *
     * @instance
     * @protected
     * @this Test.BridgeIssues.N697.StatelessComponent$1
     * @memberof Test.BridgeIssues.N697.StatelessComponent$1
     * @function getChildren
     * @return  {Array.<Object>}
     */
    /**
     * This will never be null nor contain any null references, though it may be empt if there are children to render
     *
     * @instance
     * @function setChildren
     */
    getChildren: function () {
        return this.props && this.props.children ? this.props.children : [];
    },
    createStatelessRenderFunction: function () {
        // We need to prepare a function to give to React.createElement that takes a props reference and maintains that for the instance of the element for the
        // duration of the Render call AND for any work that might happen later, such as in an OnChange callback (or other event-handler). To do this, we need an
        // instance that will capture this props value and that has all of the functionality of the original component (such as any functions that it has). The
        // best way that I can think of is to use Object.create to prepare a new instance, taking the prototype of the component class, and then setting its
        // props reference, then wrapping this all in a function that calls its Render function, binding to this instance. This woud mean that the constructor
        // would not get called on the component, but that's just the same as for stateful components (from the Component class).
        var fullClassName = Bridge.getTypeName(this);
        
			var classPrototype;
			eval('classPrototype = ' + fullClassName + '.prototype');
			var scopeBoundFunction = function(props) {
				var target = Object.create(classPrototype);
				target.props = props;
				return target.render.apply(target, []);
			}
			

        // We have an anonymous function for the renderer now but it would better to name it, since React Dev Tools will use show the function name (if defined) as
        // the component name in the tree. The only way to do this is, unfortunately, with eval - but the only dynamic content is the class name (which should be
        // safe to use since valid C# class names should be valid JavaScript function names, with no escaping required) and this work is only performed once per
        // class, since it is stored in a static variable - so the eval calls will be made very infrequently (so performance is not a concern).
        var className = Bridge.Linq.Enumerable.from(fullClassName.split(".")).last();
        var namedScopeBoundFunction = null;
        
			eval("namedScopeBoundFunction = function " + className + "(props) { return scopeBoundFunction(props); };");
			
        return namedScopeBoundFunction;
    }
}; });



Bridge.init();