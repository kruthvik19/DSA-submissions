class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const open = {
        "}":"{",
        "]":"[",
        ")":"(",
        }
        for (let c of s){
            if (open[c]){
                if(stack.length > 0 && stack[stack.length - 1] === open[c]){
                    stack.pop();
                }else{
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0 ;
    }
}
