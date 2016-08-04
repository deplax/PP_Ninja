var assertForm = "<style type='text/css'>#result li.pass {color:green;}#result li.fail {color:red;} </style><meta charset='UTF-8'>";
var head = document.getElementsByTagName("head")[0];
var html = document.getElementsByTagName("html")[0];
var body = document.createElement("body");
body.innerHTML += "<ul id='result'></ul>";
head.innerHTML += assertForm;
html.appendChild(body);

(function() {
    var results;
    this.assert = function assert(value, desc){
        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        document.getElementById("result").appendChild(li);
    };
})();