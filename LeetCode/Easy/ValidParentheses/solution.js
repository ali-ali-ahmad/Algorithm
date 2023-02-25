var isValid = function(s) {
    const leftSide = new Set(['(', '{', '[']);
    const rightSide = new Set([')', '}', ']']);
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (leftSide.has(s[i])) {
            stack.push(s[i]);
        } else if (rightSide.has(s[i])) {
            if (stack.length === 0) {
                return false;
            }
            const lastLeftSide = stack.pop();
            if ((lastLeftSide === '(' && s[i] !== ')') || 
                (lastLeftSide === '{' && s[i] !== '}') || 
                (lastLeftSide === '[' && s[i] !== ']')) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};