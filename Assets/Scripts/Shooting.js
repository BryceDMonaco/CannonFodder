/*
Author: Bryce M
Last Update: 01/23/14
*/

#pragma strict

var bullet : Rigidbody;
var power : float = 15000;
var moveSpeed : float = 5;
var rot : float;
var endTime : float;
var shotTimer : float = 1;
var primaryShot : boolean = true;
var secondaryShot : boolean = false;

function Start () {

endTime = Time.time + shotTimer;

}

function Update () {

var timeLeft : int = endTime - Time.time;

//Check if LMB has been pressed (Activates when the button comes up)
if((Input.GetButtonUp("Fire1")) && (timeLeft < 0) && (primaryShot)){
	
	//Instantiate the bullet using Instantiate([what], [where], [rotation])
	var instance: Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
	//Then add forward velocity to it
	var fwd: Vector3 = transform.TransformDirection(Vector3.back);
	instance.AddForce(fwd * power * 10);
	//Reset the shot timer
	endTime = Time.time + shotTimer;
	
	}
	
if((Input.GetButtonUp("Fire2")) && (timeLeft < 0) && (secondaryShot)){
	
	//Instantiate the bullet using Instantiate([what], [where], [rotation])
	var instance2: Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
	//Then add forward velocity to it
	var fwd2: Vector3 = transform.TransformDirection(Vector3.back);
	instance2.AddForce(fwd2 * power * 10);
	//Reset the shot timer
	endTime = Time.time + shotTimer;
	}
}