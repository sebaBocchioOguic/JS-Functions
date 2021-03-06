// Calculation of absolute difference between the sum of diagonals inside a matrix
function diagonalDifference(arr) {
    
    // Variable of Absolute Difference
    var abs_dif = 0;

    // Sum of diagonals
    var sum_left_diag = 0;
    var sum_right_diag = 0;

    // Number of Intergers by Diagonal of Matrix
    var size = arr[0].length;

    // Variables for Loops
    var i; var j;

    // Loop For Left Diagonal
    for (i = 0; i < size; i++) { sum_left_diag += arr[i][i]; }

    // Loop For Right Diagonal
    for (i = (size-1), j = 0; i >= 0; i--, j++) { sum_right_diag += arr[i][j]; }

    // Absolute Difference
    abs_dif = Math.abs(sum_left_diag - sum_right_diag);

    // Return Result
    return abs_dif;

}
