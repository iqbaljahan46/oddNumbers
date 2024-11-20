const arr=[1,2,3,54,55,24,29,26,102,333];

let oddNumbers=[];

for(i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        oddNumbers.push(arr[i]);
    }
}console.log(oddNumbers);
