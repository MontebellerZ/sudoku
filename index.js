class SudokuGame{
	constructor(dificuldade){
		this.dificuldade = dificuldade;

		this.grid = new Array(9).fill(0);
		this.grid.forEach((v, i)=>{
			this.grid[i] = new Array().fill(0);
		});
	}

	presetGrid(){
		let numeros;
		let posN;

		for(let i=0; i<3; i++){
			for(let j=0; j<3; j++){
				numeros = sequenciar(9, 1);

				for(let k=0; k<3; k++){
					for(let l=0; l<3; l++){
						posN = Math.floor(Math.random() * numeros.length);
						this.grid[i*3+k][j*3+l] = numeros[posN];
						numeros.splice(posN, 1);
					}
				}
			}
		}
	}
}

function sequenciar(n, min){
	let vet = new Array(n).fill(0);
	vet.forEach((v, i) => {
		vet[i] = i+min;
	});
	return vet;
}

function show(mat, div){
	let txt = "";
	for(let i=0; i<9; i++){
		txt += (`<div class="jump">`);

		for(let j=0; j<9; j++){
			txt += (`<div class="celula c${Math.floor(i/3)*3+Math.floor(j/3)+1}">${mat[i][j]}</div>`);
		}

		txt += (`</div>`);
	}
	div.innerHTML = txt;
}

function construcaoCtrl(x){
	let div = document.getElementById("possivel");

	(x==1 && atual>0) ? atual-- : ((x==2 && atual<81) ? atual++ : console.log("Algo de errado não está certo..."));

	show(resultado.mapaMatriz.reg[atual], div);
}

function teste(){
	let mDiv = document.getElementById("matriz");
	let pDiv = document.getElementById("possivel");

	atual=0;
	resultado = new SudokuGame(1);
	resultado.presetGrid();

	show(resultado.grid, mDiv);
	//show(resultado.mapaMatriz.reg[0], pDiv);
}

var atual=0;
var resultado;

setTimeout(()=>{
	teste();
}, 100);