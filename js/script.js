function getTriangleArea (a, h) {
	if ((a <= 0) && (h <= 0)) {
		console.log('Nieprawidłowe dane');
	}
	return a*h/2;	
}
console.log(getTriangleArea(10, 6) );

var triangleArea1 = getTriangleArea(10, 15);
var triangleArea2 = getTriangleArea(5, 12);
var triangleArea3 = getTriangleArea(9, 1);
console.log(triangleArea1);
console.log(triangleArea2);
console.log(triangleArea3);