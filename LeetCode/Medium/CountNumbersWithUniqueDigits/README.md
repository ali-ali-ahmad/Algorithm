<h1>Count Numbers with Unique Digits</h1>

<p>Given an integer <code>n</code>, return the count of all numbers with unique digits, <code>x</code>, where <code>0 <= x < 10 power to n</code>.</p>


```java
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) {
        return 1;
    }
    let ans = 10, base = 9;
    for (let i = 2; i <= n; i++) {
        base *= (9 - i + 2);
        ans += base;
    }
    return ans;
};
```

<hr>
<p>For more details, check the following link: <a href="https://leetcode.com/problems/count-numbers-with-unique-digits/">LeetCode</a></p>




