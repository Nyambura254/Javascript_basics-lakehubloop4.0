// function inArray(array1,array2){
//     const _match = []

//     for (let i = 0; i < array2.length; i++) {
//       for (let x = 0; x < array1.length; x++) {
//         const a1El = array1[x];
//         const a2El = array2[i];
//         if (a2El.includes(a1El)) {
//           _match.push(a1El)
//         }
//       }
//     }

//     return _match.filter((el, i, a) => a.indexOf(el) === i).sort((a, b) => {
//       const _a = a.toLowerCase();
//       const _b = b.toLowerCase();

//       if (_a < _b) {
//         return -1;
//       }

//       return 1;
//     })
//   }


function inArray(arr1, arr2) {
    let arr = []; //empty array ....1.create a array store 

    for (var i = 0; i < arr1.length; i++) {
        let s1 = arr1[i];
        //2.Loop over both array and push inside the  array those who array2 include the value of the array1 element
        for (var j = 0; j < arr2.length; j++) {
            var s2 = arr2[j];

            //look at each element to make sure they are unique by using indexOf. 
            if (s2.indexOf(s1) !== -1 && arr.indexOf(s1) == -1) {

                //finish with the sort function and push
                arr.push(s1);
            }
        }
    }
    //view the resulted sort
    return arr.sort();
}