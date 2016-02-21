var A = (function () {
    function A() {
        this._name = 'abc';
    }
	 debugger
    Object.defineProperty(A.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return A;
}());
