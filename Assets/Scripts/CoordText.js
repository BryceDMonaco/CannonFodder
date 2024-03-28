#pragma strict
var whatAxis : String = "Choose x, y, or z";
var whatObject : String = "Write object's name";
private var shotCount : int = 0;

function Start () {

}

function Update () {
if (Input.GetButtonUp("Fire1"))  {
	shotCount++;
	}
	
var ypos : float = (transform.position.y);
var xpos : float = (transform.position.x);
var zpos : float = (transform.position.z);

//GameObject.Find(whatObject).guiText.text = xpos.ToString("#.00");

if (whatAxis == "x" || whatAxis == "X")  {
	GameObject.Find(whatObject).guiText.text = xpos.ToString("#.00");
} else if (whatAxis == "y" || whatAxis == "Y")  {
	GameObject.Find(whatObject).guiText.text = ypos.ToString("#.00");
} else if (whatAxis == "z" || whatAxis == "Z")  {
	GameObject.Find(whatObject).guiText.text = zpos.ToString("#.00");
} else if (whatAxis == "shot")  {
	GameObject.Find(whatObject).guiText.text = shotCount.ToString();
} else {
	GameObject.Find(whatObject).guiText.text = "Choose an axis";
	}
}