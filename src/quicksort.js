const Fruits = require('../fruits');
let randomWords = [];

function quicksortAndClean(input){
	if(input.length < 1){
		return [];
	}
	const pivot = input.shift();
	const left = [];
	const right = [];
	input.forEach((elm)=>{
		if(elm<pivot){
			left.push(elm);
		}else if(elm>pivot){
			right.push(elm);
		}
	});
	return quicksortAndClean(left).concat(pivot).concat(quicksortAndClean(right));
}


async function beforeAll(){
  for(var i = 0; i < 10000; i++){
    const randomIndex = Math.floor(Math.random() * Fruits.length);
    randomWords.push(Fruits[randomIndex]);
  }
}

async function afterAll(){
  randomWords = [];
}
async function test(){
	// let random = Array.from(randomWords);
  const response = quicksortAndClean(randomWords);
}

module.exports = {
	beforeAll,
	test,
	afterAll
}
