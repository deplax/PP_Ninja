window.onload = function(){
    scopeTest();
    function outer() {
        var a = 1;
        function inner() {

        };
        var b = 2;
        if (a == 1){
            var c = 3;
        }
    }
}


var scopeTest = function() {
    test("start", function(){
        assert(typeof outer === "function", "outer");
        assert(typeof inner === "function", "inner");
        assert(typeof a === "function", "a");
        assert(typeof b === "function", "b");
        assert(typeof c === "function", "c");
    });
}
