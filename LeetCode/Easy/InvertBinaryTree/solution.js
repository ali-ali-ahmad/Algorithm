// var invertTree = function(root) {
//     if (root === null) {
//         return null;
//     }
    
//     let temp = invertTree(root.left);
//     root.left = invertTree(root.right);
//     root.right = temp;

//     return root;
// };
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    
    let stack = [root];
    
    while (stack.length > 0) {
        let current = stack.pop();
        
        let temp = current.left;
        current.left = current.right;
        current.right = temp;
        
        if (current.left !== null) {
            stack.push(current.left);
        }
        if (current.right !== null) {
            stack.push(current.right);
        }
    }
    
    return root;
};