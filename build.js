({
    baseUrl: '.',
    out: 'dist/jean-collapsible.js',
    optimize: 'none',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/Collapsible"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.Collapsible = root.Collapsible || {}; \n" +
        "\t \troot.Collapsible = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/Collapsible'); \n" +
        "}));"
    },
     paths:{
       
    }
})