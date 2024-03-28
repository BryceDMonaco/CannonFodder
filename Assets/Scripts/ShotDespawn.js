#pragma strict

var expPre : GameObject;

function Start () {

}

function Update () {

Destroy(gameObject, 5);
}

function OnCollisionEnter(collision : Collision) {
		var instance: GameObject = Instantiate(expPre, transform.position, transform.rotation);
		Destroy (gameObject);
	}