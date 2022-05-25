

function Start () {
	renderer.material.color.a = 0;
	yield WaitForSeconds(3);
	Application.LoadLevel("StartScreen");
}
function Update () {
	renderer.material.color.a += 0.005;	
}