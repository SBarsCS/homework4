const s = function(str,num){
  if(num === 0){
    return' ';
  }
    return str + s(str,num-1);
  };
const triangle = function(height) {
  const helper = function(height,initialHeight){
    if(height === 0){
      return;
    }
    console.log(s(' ',initialHeight-height) + s('*',2*height-1));
    helper(height-1,initialHeight);
  };
  helper(height,height);
};
triangle(4);



//pow
const pow = function(base,n) {
  if (n === 0){
    return 1;
  }
  return base * pow(base,n-1);
};
pow(5,4);



//string
const reverse = function(string){
  const helper = function(str,index){
    if (index<0){
    return' ';
    }
    return str[index] + helper(str,index-1);
  };
  return helper(string,string.length-1);
};
console.log(reverse("abcd"));



//stars
const line = function(num){
    if(num === 0){
     return' ';
    }
    return'* ' + line(num-1);
  };
     const checkerboard = function(num) {
      const helper = function(num,initialNum){
   if(num === 0){
     return;
   }
   if(num%2 === 0){
     console.log(' ' + line(initialNum));
   }else{
   console.log(line(initialNum));
 }
 helper(num-1, initialNum);
};
helper(num,num);
};
 checkerboard(17);