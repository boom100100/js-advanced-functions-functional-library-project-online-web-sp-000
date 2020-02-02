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

    reduce: function(collection = [], callback = () => {}, acc) {
      
      
      if (!(collection instanceof Array))
        collection = Object.values(collection)
        
        if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}
			
			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
      
      for (let i = 0; i < collection.length; i++){
        result = result + callback(collection[i], result);
      }
      return result;

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
