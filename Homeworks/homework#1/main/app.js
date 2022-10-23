const distance = (a, b) => {
	//TODO: implementați funcția

	function Levenshtein(x, y) {
		
		if (x.length == 0) return y.length;
		if (y.length == 0) return x.length;

		var matrix = [];

		// increments
		var i;
		for (i = 0; i <= y.length; i++) {
			matrix[i] = [i];
		}

		
		var j;
		for (j = 0; j <= x.length; j++) {
			matrix[0][j] = j;
		}

		// completeaza matricea
		for (i = 1; i <= y.length; i++) {
			for (j = 1; j <= x.length; j++) {
				if (y.charAt(i-1) == x.charAt(j-1)) {
					matrix[i][j] = matrix[i-1][j-1];
				} else {
					matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, 
											Math.min(matrix[i][j-1] + 1, 
													matrix[i-1][j] + 1)); 
				}
			}
		}

		return matrix[y.length][x.length];
		
	}




if (typeof a !== 'string' || typeof b !== 'string') {
	throw new Error('InvalidType');
}

if (a === '' || b === '') {
	return 0;
}
if (a === b) {
	console.log("Siruri egale!")
	return;
}
if (typeof a === '' || typeof b === '') {
	return 0;

}



//console.log(Levenshtein(a, b));
return Levenshtein(a, b);

	
}


module.exports.distance = distance