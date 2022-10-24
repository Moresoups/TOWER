function speedSort(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    }
return arr;
};

console.log(speedSort([player-speed-1,enemy-speed-1]));