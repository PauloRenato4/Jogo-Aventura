
window.onload = function(){

	var game = new Phaser.Game(800,600, Phaser.AUTO, '', {create: create});

	function create (){
		console.log('Instalado');
	}
};