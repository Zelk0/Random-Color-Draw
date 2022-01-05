const container = document.getElementById('container');

const colors = [
	'#e74c3c',
	'#8e44ad',
	'#3498db',
	'#e67e22',
	'#2ecc71',
	'#800000',
	'#FFA07A ',
	'#CD5C5C',
	'#FFA07A ',
	'#008080 ',
	'#FA8072 ',
	'#CD5C5C ',
	'#00FF00 ',
	'#00FFFF ',
];
const squares = 400;

for (let i = 0; i < squares; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));

	square.addEventListener('mouseout', () => removeColor(square));
	container.appendChild(square);
}

function setColor(element) {
	const color = getRandomcolor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.background = '#1d1d1d';
	element.style.boxShadow = '0 0 2px #000';
}

function getRandomcolor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
