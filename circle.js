var circleRadius = prompt("Please enter the radius of the circle: ");

var area = Math.PI * Math.pow(circleRadius, 2);

alert("The area of the circle is "+(area));

var number = prompt("Please enter another value: ");

var sqrtResult = Math.sqrt(number);

alert("The square root of "+(number)+" is" +(sqrtResult));

var angle = prompt("Please enter an angle: ");

var cosResult = Math.cos(angle*(Math.PI/180));

alert("The cos value is"+(cosResult.toFixed(4)));