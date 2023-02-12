// Call, bind example 
function sum() {
    return this.x + this.y;
}

var context = {
    x: 1,
    y: 2
};

sum.call( context );   // 3

context.sum = sum;
context.sum();              	// 3

var s = sum.bind( context );
s();                    		// 3


//  CAN ALSO BE WRITTEN AS 
function sum(ctx) {
    return ctx.x + ctx.y;
}
var context = {
    x: 1,
    y: 2
};
console.log(sum( context ));