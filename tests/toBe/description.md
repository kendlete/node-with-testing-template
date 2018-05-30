# A test using the Jest matcher toBe

toBe uses `Object.is()` to test equality. This is not the same as `===`

`Object.is()` finds `NaN` equal to `NaN`, and `-0` is not equal to `0`