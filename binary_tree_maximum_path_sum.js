/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = -Number.MAX_VALUE;
    getMaxSum(root);
    return max;
    function getMaxSum(node) {
      if (!node) return 0;
      var leftSum = getMaxSum(node.left);
      var rightSum = getMaxSum(node.right);
      max = Math.max(max, node.val + leftSum + rightSum);
      return Math.max(0, node.val + leftSum, node.val + rightSum);
    }
  
      
  };