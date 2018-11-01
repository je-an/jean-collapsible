define([ // jscs:ignore
    "DomElement",
    "DomUtil",
    "Inheritance",
    "TypeCheck",
    "Failure",
    "Merge",
    "text!collapsible-html",
    "css!collapsible-css"
], function (
    DomElement,
    DomUtil,
    Inheritance,
    TypeCheck,
    Failure,
    Merge,
    controlHtml
) {
        /**
         * Provides a collapsible control  
         * @alias Slider 
         * @constructor
         * @param {Object} options - options object
         * @param {Boolean} [options.isCollapsed=true] - True if collapsible is collapsed, false otherwise
         */
        var Collapsible = function (options) {
            Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
                collapsedArrow: "&#9660;",
                expandedArrow: "&#9650;",
                html: controlHtml,
                isCollapsed: TypeCheck.isBoolean(options.isCollapsed) ? options.isCollapsed : true,
            }, TypeCheck.isDefined(options) ? options : {}));
            this.body = DomUtil.getChildByClass(this.element, "body");
            this.btn = DomUtil.getChildByClass(this.element, "toogle");
            this.element.addEventListener("click", this._onBtnClick.bind(this));
            this._setState();
        };
        /**
        * @param {String} id - the id of the element which shall be added
        * @param {HTMLElement} element - the element which shall be added to body of the collapsible 
        */
        Collapsible.prototype.add = function (id, element) {
            if (!TypeCheck.isString(id)) {
                Failure.throwTypeError("id is not a string");
            }
            element.setAttribute("data-jean-collapsible-id", id);
            this.body.appendChild(element);
            return true;
        };
        /** @param {String} id - the id of the element which shall be removed */
        Collapsible.prototype.remove = function (id) {
            var element = DomUtil.getChildById(this.body, id), isRemoved = false;
            if (TypeCheck.isDefined(element)) {
                isRemoved = true;
                element.remove();
            }
            return isRemoved;
        };
        /** */
        Collapsible.prototype._setState = function () {
            var body = this.body, btn = this.btn, options = this.options;
            if (options.isCollapsed) {
                body.style.height = "0px";
                btn.innerHTML = options.collapsedArrow;
                body.classList.remove("border-top");
            } else {
                body.style.height = "";
                btn.innerHTML = options.expandedArrow;
                body.classList.add("border-top");
            }
        };
        /** */
        Collapsible.prototype._onBtnClick = function () {
            this.options.isCollapsed = !this.options.isCollapsed;
            this._setState();
        };
        return Collapsible;
    });