function binary_search(array, num) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] == num) return mid;
        if (array[mid] > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return null;
}