function f1() {
  return;
  var i = 0;
}
f1();

function f2() {
  return 1;
  var i = 0;
}
f2();

function f3() {
  var i = 0;
  throw "test";
  var j = 0;
}
f3();

function f4() {
  var i = 0;
  if (true) {
    return;
  }
  throw "test";
  var j = 0;
}
f4();

var obj = {
  method1() { return; var i = 0; },
  method2() { return; },
};

class C {
  method1() { return; var i = 0; }
  method2() { return; }
}

var arrow1 = () => { return; var i = 0; };
var arrow2 = () => { return; };
