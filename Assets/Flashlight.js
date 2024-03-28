#pragma strict

function Start () {

}

function Update () {

light.intensity = (Ins) ;

if(Input.GetButtonUp("Fire1")) {
	if(! Tog) {
		Tog = true;
		Ins = 3;
}
else if(Tog) {
	Tog = false;
	Ins = 0;
}
}
}

var Tog : boolean = false;
var Ins : float = 0;