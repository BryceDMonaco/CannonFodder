#pragma strict
var turnSpeed : float = 1;
var slowSpeed : float = 1;
var maxSpeed : float = 1;
var accelSpeed : float = 1;
function Start () {
turnSpeed = 0;
}

function Update () {
 if(Input.GetButton("Fire1")){
 	turnSpeed = maxSpeed;
 //transform.Rotate(0,0,turnSpeed*Time.deltaTime);
 } else if(!(Input.GetButton("Fire1")) && (turnSpeed > 0)){
 	turnSpeed-= slowSpeed;
 	}
 	
 	 transform.Rotate(0,0,turnSpeed*Time.deltaTime);
}