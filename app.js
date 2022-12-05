("use strict");

const adv = document.querySelector(".promo__adv img"),
	wrapper = document.querySelector(".promo__bg"),
	genre = wrapper.querySelector(".promo__genre"),
	seriesList = document.querySelector(".promo__interactive-list");

const seriesDB = {
	series: [
		"Omar",
		"The Final Legacy",
		"Ertugrul",
		"Magnificent Century",
		"The Great Seljuks: Guardians...",
	],
};
const btn = document.querySelector("#btn");
const elForm = document.querySelector(".add");
const elinput = document.querySelector(".adding__input");
const elCheckbox = document.querySelector("[type=checkbox]");

genre.textContent = "Kamediya";
wrapper.style.backgroundImage = "url('img/1.jpg')";

function habit(e) {
	e.preventDefault();
	let inputValue = elinput.value;

	if (inputValue.length >= 18) {
		const inputLastValue = inputValue.slice(0, 18);
		seriesDB.series.push(inputLastValue);
		elinput.value = "";

		seriesList.innerHTML = "";

		seriesDB.series.forEach((item, idx) => {
			seriesList.innerHTML += `
                         <li class="promo__interactive-item">
		                    ${idx + 1} ${item} ...
	                    	<div class="delete"></div>
	                    </li>
                         `;
		});
	} else {
		seriesDB.series.push(inputValue);
		elinput.value = "";
		console.log(seriesDB.series);

		seriesList.innerHTML = "";

		seriesDB.series.forEach((item, idx) => {
			seriesList.innerHTML += `
                    <li class="promo__interactive-item">
                         ${idx + 1} ${item}
                         <div class="delete"></div>
                    </li>
                    `;
		});
		const check = elCheckbox.checked;
		console.log(check);
		seriesDB.series.sort();
	}
}

elForm.addEventListener("submit", habit);
console.log(seriesDB.series);

// 