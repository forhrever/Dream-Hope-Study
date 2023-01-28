function solution(arr){
    return arr.filter((el,al) => el !== arr[al + 1]);
  }