var draw = function (edges) {
    return function (n) {
        var v = edges;
        var g = new Graph();
        var i = 0;
        var render = function(r, n) {
          var set = r.set().push(
             r.ellipse(n.point[0]-30, n.point[1]-13, 30, 20)
                .attr({"fill": "#fa8", "stroke-width": 2, r : "9px"}))
                .push(r.text(n.point[0]-30, n.point[1]-10, n.label)
                    .attr({"font-size":"20px"}));
          return set;
     };
        while (i < v.length) {
            if (v[i][0]) g.addNode(v[i][0], { label: v[i][0], render : render});
            if (!v[i][0]) g.addNode(v[i][0], { label: "0", render : render});
            if (v[i][1]) g.addNode(v[i][1], { label: v[i][1], render : render});
            if (!v[i][1]) g.addNode(v[i][1], { label: "0", render : render});

            if (v[i][3]) g.addEdge(v[i][0], v[i][1], { stroke: "#ADFF2F", fill: "#ADFF2F", label: v[i][2], directed: true });
            if (!v[i][3]) g.addEdge(v[i][0], v[i][1], { stroke: "#A9A9A9", fill: "#A9A9A9", label: v[i][2], directed: true });
            i = i + 1;
        }

        var layouter = new Graph.Layout.Spring(g);
        layouter.layout();

        var renderer = new Graph.Renderer.Raphael('canvas', g, 540, 300);
        renderer.draw();
    };
};
