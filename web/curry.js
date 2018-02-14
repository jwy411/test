/**
 * 커링 함수
 * : 함수의 전달인자 몇 개를 미리 채움으로써 더 간단한 함수를 만드는 방법
 *
 function volume( l, w, h ) {
        return l * w * h;
    }
 var curried = curry( volume );
 curried( 1 )( 2 )( 3 ); // 6
 */


(function curryTest() {
    function curry(fn) {
        var arity = fn.length;
        return (function resolver() {
            var memory = Array.prototype.slice.call(arguments);
            var next;
            return function () {
                var local = memory.slice();
                Array.prototype.push.apply(local, arguments);
                next = local.length >= arity ? fn : resolver;
                return next.apply(null, local);
            };
        }());
    }

    function volume(l, w, h) {
        return l * w * h;
    }

    var curried = curry(volume);
    var timesTwo = curried(2);
    var timesFour = timesTwo(2);

    console.log(timesFour(8)); // 32
}());