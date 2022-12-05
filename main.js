"use strict";

let numberOfSeries;

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
	srart: function () {
		seriesDB.count = +prompt("Nechta serial ko'rdingiz ?");

		while (
			seriesDB.count == null ||
			seriesDB.count == "" ||
			seriesDB.count == NaN
		) {
			seriesDB.count = +prompt("Nechta serial ko'rdingiz ?");
		}
	},
};

function rememberMySeries() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Oxirgi ko'rgan kinoyingiz qaysi"),
			b = prompt("Necha baho berasiz ?");
		if (a != null && a != "" && b != null && b != "") {
			seriesDB.series[a] = b;
			console.log("done");
		} else {
			console.log("error");
			i--;
		}
	}
}

rememberMySeries();

function detectLevelSeries() {
	if (seriesDB.count < 5) {
		console.log("Kam serial ko'ripsiz !");
	} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
		console.log("Siz klassik tomoshabin ekansiz ");
	} else if (seriesDB.count >= 10) {
		console.log("Siz kinchi eknasiz !");
	} else {
		console.log("error");
	}
}

detectLevelSeries();

function showDb() {
	if (!seriesDB.private) {
		console.log(seriesDB);
	}
}

// showDb();

console.log(seriesDB);

function writegenres() {
	for (let i = 0; i <= 2; i++) {
		const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
		seriesDB.genres[i] = genre;
	}
}

writegenres();
