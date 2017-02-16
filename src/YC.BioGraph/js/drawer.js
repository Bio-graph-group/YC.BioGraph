var draw1 = function (height) {
        return function (width) {
          return function (edges) {
            return function (n) {
                    var v = edges;
                    var g = new Graph();
                    var i = 0;
                    var render = function (r, n) {
                        var set = r.set().push(
                            r.rect(n.point[0] - 30, n.point[1] - 13, 62, 66).attr({ "fill": "#fa8", "stroke-width": 2, r: "9px" })).push(
                            r.text(n.point[0], n.point[1] + 20, n.label).attr({ "font-size": "8px" }));
                        set.items.forEach(function (el) { el.tooltip(r.set().push(r.rect(0, 0, 30, 30).attr({ "fill": "#fec", "stroke-width": 1, r: "9px" }))) });
                        return set;
                    }

                    while (i < v.length)
                    {
                        if (v[i][0]) g.addNode(v[i][0], { label: v[i][0] });
                        if (!v[i][0]) g.addNode(v[i][0], { label: "0" });
                        if (v[i][1]) g.addNode(v[i][1], { label: v[i][0] });
                        if (!v[i][1]) g.addNode(v[i][1], { label: "0" });

                        if (v[i][3]) g.addEdge(v[i][0], v[i][1], { stroke: "#ADFF2F", fill: "#ADFF2F", label: v[i][2] });
                        if (!v[i][3]) g.addEdge(v[i][0], v[i][1], { stroke: "#A9A9A9", fill: "#A9A9A9", label: v[i][2] });
                        i = i + 1;
                    }

                    var layouter = new Graph.Layout.Spring(g);
                    layouter.layout();

                    var renderer = new Graph.Renderer.Raphael('canvas', g, height, width);
                    renderer.draw();
            };
        };
    };
};
var draw = function (height) {
    return function (width) {
        return function (edges) {
            return function (n) {
                layouter.layout();
                renderer.draw1();
            }
        }
    }
};
