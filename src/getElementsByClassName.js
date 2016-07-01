// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node){
//For My Info
//.classList is a function that searches for classNames in an element and returns them as a 
// DomTokenList, a list with spaces.

//.childNodes is a function that returns an array-like obj, a NodeList of the children of a node
  
  if(node){
    node = node;
  } else {
    node = document.body;
  }

  var result = [];
                           
  var splitClassNames = node.classList;
  
  if( _.contains(splitClassNames, className) ){
   result.push(node);
  }
  
  if(node.hasChildNodes()){

    var children = node.childNodes;

   _.each(children, function(child){
    var nextCall = getElementsByClassName(className, child);
    
    result = result.concat(nextCall);
   }); 
  }      
  return result;
};
