(function callTest() {
    /**
     * call 함수
     * : 함수를 호출하되, 첫번째 인자로 this 를 지정할 수 있다.
     * @see https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd
     */

    var obj = {
        string: 'zero',
        yell: function() {
            console.log(this.string);
        }
    };
    var obj2 = {
        string: 'what?'
    };
    obj.yell(); // 'zero';
    obj.yell.call(obj2); // 'what?'

    /**
     * arguments는 함수라면 처음부터 갖고 있는 숨겨진 속성인데
     * 함수에 들어온 인자를 (유사)배열 형식으로 반환
     */
    function example() {
        console.log(arguments);
    }
    example(1, 'string', true);

    /**
     * 유사 배열이라 배열의 메소드는 사용할수 없음.
     */
    function example2() {
        try {
            console.log(arguments.join());
        } catch (e) {
            console.log(e);
        }
    }
    example2(1, 'string', true);

    /**
     * 이때 call 함수를 응용하면, 배열의 프로토타입에 있는 join 함수를 빌려 쓸 수 있음.
     */
    function example3() {
        console.log(Array.prototype.join.call(arguments));
        console.log(Array.prototype.slice.apply(arguments)[1]);
    }
    example3(1, 'string', true);
}());



