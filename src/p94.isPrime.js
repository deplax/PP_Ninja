(function () {
    function isPrime(value) {
        if (!isPrime.answers) isPrime.answers = {};

        if (isPrime.answers[value] != null) {
            return isPrime.answers[value];
        }

        var prime = value != 1;
        for (var i = 2; i < value; i++) {
            if (value % i == 0) {
                prime = false;
                break;
            }
        }
        return isPrime.answers[value] = prime;
    }

    test("prime", function () {
        assert(isPrime(5), "5는 소수다!");
        assert(isPrime.answers[5], "캐시된 응답이 반환된다.");
    });
}());