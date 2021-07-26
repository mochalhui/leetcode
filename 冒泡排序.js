/**
 * 冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，
 * 一次比较两个元素，如果它们的顺序错误就把它们交换过来。
 * 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
 * 这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
 */

/**
 * <1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 * <2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 * <3>.针对所有的元素重复以上的步骤，除了最后一个；
 * <4>.重复步骤1~3，直到排序完成。
 */
/**
 * 可以用for循环或者while来实现
 */
function MyForBubble(arr) {//for循环版
    if (arr.length) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
           for(let j = 0; j < len - 1 - i; j++) { // len - 1 - i 是因为 每一次一定能找到最大值
               if (arr[j] > arr[j+1]) {
                   [arr[j], arr[j+1]] = [arr[j+1], arr[j]];//es6 解构赋值
               }
           }
        }
    }
    return arr;
}
function MyWhileBubble(arr){
    if (arr.length) {
        const len = arr.length;
        let i = len - 1;
    }
}
/**
 * 改进版
 * 细想想 只要开始交换，那么交换之后的就是对的，直到停止交换，所以最后一个开始交换的地方，之后都是对的
 * 我们拿一个游标记录这里，我们把它叫做key
 * 
 * 注意一下，我们第一个for循环的作用是希望遍历这个数组
 */
function MyKeyBubble(arr){
    if (arr.length) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
           for(let j = 0; j < key; j++) { // len - 1 - i 是因为 每一次一定能找到最大值
               if (arr[j] > arr[j+1]) {
                   [arr[j], arr[j+1]] = [arr[j+1], arr[j]];//es6 解构赋值
               }
           }
        }
    }
    return arr;
}