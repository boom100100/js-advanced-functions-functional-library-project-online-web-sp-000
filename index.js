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

    reduce: function(result, collection = [], callback = () => {}) {
      
      
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

    functions: function() {

    },


  }
})()

fi.libraryMethod()
