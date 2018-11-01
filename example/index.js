require(["JeanCollapsible", "DomUtil", "css!bootstrap"], function (JeanCollapsible, DomUtil) {
    var collapsible = new JeanCollapsible({

    });
    document.body.appendChild(collapsible.element);
    collapsible.add("id", DomUtil.createElementFromMarkup("<div>test</div>"));
});