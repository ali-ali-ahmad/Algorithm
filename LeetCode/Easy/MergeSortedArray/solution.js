var merge = function(nums1, m, nums2, n) {
    let reverseN;

    if (m === 0) {
        reverseN = 0;
        while (n !== reverseN) {
            nums1[reverseN] = nums2[reverseN];
            reverseN++;
        }
        return nums1;
    } else if (n === 0) {
        return nums1;
    } else {
        reverseN = 0;
        while (n !== reverseN) {
            nums1[m + reverseN] = nums2[reverseN]
            reverseN++;
        }
        return nums1.sort(function(a, b){return a-b});
        
    }

};