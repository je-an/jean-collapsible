require(["JeanCollapsible", "DomUtil", "css!bootstrap"], function (JeanCollapsible, DomUtil) {
    var collapsible = new JeanCollapsible({

    });
    document.body.appendChild(collapsible.element);
    collapsible.add("id", new JeanCollapsible({

    }).element);
});