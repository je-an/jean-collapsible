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
         * @param {String} options.heading - the heading of this collapsible
         * @param {Boolean} [options.isCollapsed=true] - True if collapsible is collapsed, false otherwise
         */
        var Collapsible = function (options) {
            Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
                collapsedArrow: "&#8744;",
                expandedArrow: "&#8743;",
                html: controlHtml,
                heading: TypeCheck.isString(options.heading) ? options.heading : "Collapsible",
                isCollapsed: TypeCheck.isBoolean(options.isCollapsed) ? options.isCollapsed : true,
            }, TypeCheck.isDefined(options) ? options : {}));
            this.body = DomUtil.getChildByClass(this.element, "collapsible-body");
            this.header = DomUtil.getChildByClass(this.element, "collapsible-header");
            this.btn = DomUtil.getChildByClass(this.element, "collapsible-toogle");
            this.element.addEventListener("click", this._onBtnClick.bind(this));
            this._setState();
            this.setHeading(this.options.heading);
        };
        Inheritance.inheritPrototype(Collapsible, DomElement);
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
        /** @param {String} heading - the new collapsible heading */
        Collapsible.prototype.setHeading = function (heading) {
            this.header.innerHTML = TypeCheck.isString(heading) ? heading : this.options.heading;
        };
        /** */
        Collapsible.prototype._setState = function () {
            var body = this.body, btn = this.btn, options = this.options;
            if (options.isCollapsed) {
                body.style.display = "none";
                btn.innerHTML = options.collapsedArrow;
                body.classList.remove("border-top");
            } else {
                body.style.display = "block";
                btn.innerHTML = options.expandedArrow;
                body.classList.add("border-top");
            }
        };
        /** @param {Object} e - event object */
        Collapsible.prototype._onBtnClick = function (e) {
            this.options.isCollapsed = !this.options.isCollapsed;
            this._setState();
            event.stopPropagation();
            event.preventDefault();
        };
        return Collapsible;
    });