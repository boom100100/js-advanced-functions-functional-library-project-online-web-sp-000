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
    
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
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
    
    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee);
      } else if (!iteratee) {
        return Array.from(new Set(collection));
      } else {
        const modifiedVals = new Set();
        const uniqVals = new Set();
        for (let val of collection) {
          const moddedVal = iteratee(val);
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal);
            uniqVals.add(val);
          }
        }
        return Array.from(uniqVals);
      }
    },

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(object) {
      
      
      /*const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }*/

      return functionNames.sort()
    
      let result = [];
      for (let key in object){
        if (object[key] === "function")
          result.push(key);
        
      }
      
      return result;
    },


  }
})()

fi.libraryMethod()
