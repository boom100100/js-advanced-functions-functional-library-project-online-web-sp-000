const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      //const better than let
      const copy = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < copy.length; i++){
        callback(copy[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      
      let copy = [];
      
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      
      for (let i = 0; i < collection.length; i++){
        copy.push(callback(collection[i]));
      }
      return copy;
    },

    //refactor test and function parameters so default parameters are last
    reduce: function(collection = [], callback = () => {}, result) {
      
      
      if (!(collection instanceof Array))
        collection = Object.values(collection);
        
        if (!result) {
				result = collection[0];
				collection = collection.slice(1);
			}
			
			for (let i = 0; i < collection.length; i++){
        result = callback(result, collection[i], collection);
      }
      return result;

    },
    
    find: function(collection, predicate){
      if (!(collection instanceof Array))
        collection = Object.values(collection);

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) return collection[idx];

      return undefined;
    },
    
    filter: function(collection, predicate){
      if (!(collection instanceof Array))
        collection = Object.values(collection);

      const newArr = [];

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) newArr.push(collection[idx]);

      return newArr;
    },
    
    size: function(collection){
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length;
    },
    
    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0];
    },
    
    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1];
    },
    
    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN]);
      return collection.filter(el => !badBad.has(el));
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection];
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },
    
    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection);
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val);
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr);
        }
      }
      return newArr;
    },
    
    uniq: function(){},
    keys: function(){},
    values: function(){},

    functions: function() {

    },


  }
})()

fi.libraryMethod()
