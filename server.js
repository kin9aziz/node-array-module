
module.exports = {
	//This function uses reduce method and it sums all numbers in an array and returns a single value
    arraySum: function (arr){
        return arr.reduce(function(a, b){
            return a + b
        }, 0);
    },

    //This function gets the sum of an array an divides it by the length of the array (It then returns the average value)
    arrayAverage: function (arr){
        return arr.reduce(function(a, b){
            return a + b
        }, 0) / (arr.length === 0 ? 1 : arr.length);
    }
}