var array = [];
for (var i = 1; i < 11; i += 1) {
	let y = i;
	array.push(function() {
		console.log(y);
	})
}
array.forEach(function(func) {
   func()
 });

for (var y = 1; y < 11; y++) {
	for (var x = 1; x < 11; x++)
	document.write(y + "*" + x + "=" + x*y + "<br>")
}