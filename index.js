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
        collection = Object.values(collection)
        
        if (!result) {
				result = collection[0]
				collection = collection.slice(1)
			}
			
			for (let i = 0; i < collection.length; i++){
        result = callback(result, collection[i], collection);
      }
      return result;

    },
    
    find: function(collection, callback){
      
    },
    filter: function(){
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) return collection[idx]

      return undefined
    },
    size: function(){},
    first: function(){},
    last: function(){},
    compact: function(){},
    sortBy: function(){},
    flatten: function(){},
    uniq: function(){},
    keys: function(){},
    values: function(){},

    functions: function() {

    },


  }
})()

fi.libraryMethod()
