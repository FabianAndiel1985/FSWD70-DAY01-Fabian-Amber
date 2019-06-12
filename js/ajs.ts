var Sparkling = [{
		"name": "Kenwood","description": "Brut Yulupa Cuvee, California","price": 9.75,"size": "glass"
	},{
		"name": "Prosecco",
		"description": "Veneto, Italy",
		"price": 48.00,
		"size": "bottle"
	},]
	var White = [{
		"name": "Rosatello",
		"description": "Moscato, Italy",
		"price": 9.25,
		"size": "glass"
	},{
		"name": "Seaglass",
		"description": "Riesling, Monteray County, CA",
		"price": 9.75,
		"size": "glass"
	},{
		"name": "Kim Crawford",
		"description": "Sauvignon Blanc, Marlborough, NZ",
		"price": 12.50,
		"size": "glass"
	},{
		"name": "Three Thieves",
		"description": "Chardonnay, California",
		"price": 9.00,
		"size": "glass"
	},]
	var Red = [{
		"name": "Mark West",
		"description": "Pinot Noir, California",
		"price": 10.00,
		"size": "glass"
	},{
		"name": "Columbia Crest",
		"description": "H3 Merlot, Horse Heavenn Hills, WA",
		"price": 10.00,
		"size": "glass"
	},{
		"name": "14 Hands",
		"description": "Cabernet Sauvignon, Columbia Valley, WA",
		"price": 10.00,
		"size": "glass"
	},{
		"name": "Santa Cristina",
		"description": "Chianti Superiore, Tuscany, IT",
		"price": 10.75,
		"size": "glass"
	},{
		"name": "Stag's Leap Wine Cellars",
		"description": "Cabernet Blec, Napa Valley, CA",
		"price": 66.00,
		"size": "bottle"
	},{
		"name": "Malbec",
		"description": "Mendoza, Argentina",
		"price": 48.00,
		"size": "bottle"
	},]
	var Cocktails = [{
		"name": "Espresso Martini",
		"description": "Espresso, Kahlua, Stoli Vanil",
		"price": 12.50,
	},{
		"name": "Strawberry Rhubarb Mule",
		"description": "Mint, Strawberry-Rhubarb Jam, Ginger Beer, Reyka",
		"price": 11.00,
	},{
		"name": "Old Fashioned",
		"description": "orange, luxardo cherry, cocchi di Torino, Bourbon",
		"price": 15.00,
	},{
		"name": "Margarita",
		"description": "Milagro Silver Tequila, lime, Cointreau",
		"price": 11.00,
	},]
	var Beers = [{
		"name": "Sam Adam's",
		"description": "Boston Lager 5.0% ABV",
		"price": 5.00,
		"size": "draught",
	},{
		"name": "Bud Light",
		"description": "4.2% ABV",
		"price": 5.00,
		"size": "draught",
	},{
		"name": "Blue Moon",
		"description": "Belgian White 5.4% ABV",
		"price": 5.00,
		"size": "draught",
	},{
		"name": "Budweiser",
		"description": "5.0% ABV",
		"price": 4.00,
		"size": "bottle",
	},{
		"name": "Coors Light",
		"description": "4.2% ABV",
		"price": 4.00,
		"size": "bottle",
	},{
		"name": "Corona Light",
		"description": "4.1% ABV",
		"price": 4.00,
		"size": "bottle",
	},]
	var Nonalcohol = [{
		"name": "Bottled Water",
		"description": "San Pellegrino, Sparkling or Acqua Panna, Still",
		"price": 4.50,
	},{
		"name": "Hand Crafted Soda",
		"description": "Black Cherry, Cuba, Ginger-Lime, Sour Blueberry",
		"price": 4.50,
	},{
		"name": "Infused Lemonade & Iced Tea",
		"description": "Black Cherry, Blueberry Ginger, Peach, Raspberry, Strawberry",
		"price": 4.50,
	},{
		"name": "Cold Brew Coffee",
		"description": "",
		"price": 4.50,
	},{
		"name": "Tea",
		"description": "",
		"price": 4.50,
	},]




for (var i = 0; i < Sparkling.length; i++) {

	const {name: n, description: d, price:p, size:s,} = Sparkling[i];
	document.getElementById('sparkling').innerHTML +=("<h4>"+n+"</h4>" + d +"<br> $" + p + " per " + s + "<br>")
}


for (var i = 0; i < White.length; i++) {

	const {name: n, description: d, price:p, size:s,} = White[i];
	document.getElementById('white').innerHTML +=("<h4>"+n+"</h4>" + d +"<br> $" + p + " per " + s + "<br>")
}

for (var i = 0; i < Red.length; i++) {

	const {name: n, description: d, price:p, size:s,} = Red[i];
	document.getElementById('red').innerHTML +=("<h4>"+n+"</h4>" + d +"<br> $" + p + " per " + s + "<br>")
}

for (var i = 0; i < Cocktails.length; i++) {

	const {name: n, description: d, price:p} = Cocktails[i];
	document.getElementById('cocktails').innerHTML +=("<h4>"+n+"</h4>"+ d + " $" + p + "<br>")
}

for (var i = 0; i < Beers.length; i++) {

	const {name: n, description: d, price:p, size:s,} = Beers[i];
	document.getElementById('beer').innerHTML +=("<h4>"+n+"</h4>" + d +"<br> $" + p + " per " + s + "<br>")
}

for (var i = 0; i < Nonalcohol.length; i++) {

	const {name: n, description: d, price:p} = Nonalcohol[i];
	document.getElementById('nonalcohol').innerHTML +=("<h4>"+n+"</h4>"+ d + " $" + p + "<br>")


}