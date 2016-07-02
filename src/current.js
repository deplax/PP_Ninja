(function () {
    function merge(root) {
        for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                root[key] = arguments[i][key];
            }
        }
        return root;
    }

    var merged = merge(
        {name: "Batou"},
        {city: "Niihama"});

    test("merge", function() {
        assert(merged.name == "Batou", "batou");
        assert(merged.city == "Niihama", "nihana");
    })

}());