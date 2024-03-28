#pragma strict

function Start () {

}

var rateOfFire = .1;
var bullet : Rigidbody;
var power : float = 15000;
 
function Update () {
   if (Input.GetButtonDown("Fire1"))
      InvokeRepeating("Shoot", .001, rateOfFire);
   if (Input.GetButtonUp("Fire1"))
      CancelInvoke("Shoot");
}
 
function Shoot () {
   // Instantiate a bullet here
   	//Instantiate the bullet using Instantiate([what], [where], [rotation])
	var instance: Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
	//Then add forward velocity to it
	var fwd: Vector3 = transform.TransformDirection(Vector3.back);
	instance.AddForce(fwd * power * 10);
}