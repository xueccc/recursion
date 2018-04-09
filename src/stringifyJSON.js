// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes her

  if (typeof obj === "undefined"){
    return //undefined;
  }

  else if (obj === null){
    return "" + null + "";
  }
  else if (typeof obj === "boolean"){
    return "" + obj + "";
  }

  else if (typeof obj === "number"){
     obj =  "" + obj;
    return obj;
  }
  
   else if (typeof obj === "string"){
    return '"' + obj + '"';
   }

   else if (obj === {}){
     return '{}';
   }

   else if (typeof obj  === "function"){
     return obj;
   }

   else if (Array.isArray(obj) && obj.length === 0){
    return "[]";
   }

   else if (Array.isArray(obj)){
    var arr = obj.map(function(item){
     return item = stringifyJSON(item);
    })

    return "[" + arr.join(",") + "]";
   }


   else if (typeof obj === "object"){
    var result = [];
    Object.keys(obj).forEach(function(key){

      var val = stringifyJSON(obj[key]);
      if (val === undefined || typeof val === "function"){
        return {};
      } else {
      
      result.push( '"' + key + '":' + val);
      }
    
     });
    return "{" + result.join(",")+ "}";
   }
  
  
};

