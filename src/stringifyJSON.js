var stringifyJSON = function(obj){
  
  if(Array.isArray(obj)){
    var result = [];
    for(var i = 0; i < obj.length; i++){
       result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }

  if( typeof obj === 'object' && obj !== null ){
    var result = [];
    for(var k in obj){
      if( typeof obj[k] !== 'function' && obj[k] !== undefined ){
        result.push(stringifyJSON(k) + ':' + stringifyJSON(obj[k]));
      }  
    };
    return '{' + result + '}';
  }

  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if(typeof obj === 'number'){
    return '' + obj;
  }
  if(obj === null){
    return 'null';
  }
  if(typeof obj === 'boolean'){
    return '' + obj;
  }
  
};


// // this is what you would do if you liked things to be easy:
// // var stringifyJSON = JSON.stringify;

// // but you don't so you're going to write it from scratch:


// var stringifyJSON = function(obj){

//   if(Array.isArray(obj)){
//     var result = [];
//     for(var i = 0; i < obj.length; i++){
//       result.push(stringifyJSON(obj[i]));
//     }
//     return '[' + result.join(',')  + ']';
//   }  

//   if( typeof obj === 'object' && obj !== null){
//     var result = [];
//     for(var k in obj){
//       if(obj[k] === undefined || typeof obj[k] === 'function'){
//         continue;
//       }
//       result.push( stringifyJSON(k) + ':' + stringifyJSON(obj[k]) );
//     }
//     // type coerces the [] into {}
//     return '{' + result.join(',') + '}';
//   }
//   // strings
//   if(typeof obj === 'string'){
//     return '"' + obj + '"';  
//   }
//   // non-string primitives
//   return '' + obj;
  
// }
// strings
// non-bool primitives
// booleans
// objects

























