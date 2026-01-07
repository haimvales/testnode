import test from 'node:test';
import assert from 'node:assert';
import { chekAllNumbers, getArr } from './app.js';


test.describe("tests getArr", () => {
    test("getArr with valid result", () => {
        // assert.equal(3,3) // 2 ==
        // assert.strictEqual(3,3) // 3 ===
        // assert.strictEqual(getArr(), [1,2,3,4]) // 3 === במערך זה לא אותו כתובת אז יחזיר שלא נכון
        assert.deepStrictEqual(getArr(), [1, 2, 3, 4]) // 3 === זה בודק בתוך המערך אם אותו דבר ולא כתובת
        // assert.notDeepEqual(getArr(), [1,2,3,4]) // 3 === בודק שזה לא אותו דבר
    })
})


// node -- test app.test.js
// node -- test מזהה מי שמסתיים ב test