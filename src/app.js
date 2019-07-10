import * as R from 'ramda';

// import react from 'react';
// import reactDOM from'react-dom';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [4,7,8,9,1,220,45,46,232829];

const arr3 = R.intersection(arr1, arr2);


console.log(arr3);
