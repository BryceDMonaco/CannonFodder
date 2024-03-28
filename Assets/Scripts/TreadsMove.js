#pragma strict
var positiveSpeed : float = 1;
var negativeSpeed : float = -1;
function Update () {
    if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.LeftArrow) || (Input.GetKey("w") && Input.GetKey("a")) || Input.GetKey("d")) {
        animation["Forward"].wrapMode = WrapMode.Loop;
        animation["Forward"].speed = positiveSpeed;
        if(animation.IsPlaying) { //This is to see if the animation finished while the key was up
            animation.Play("Forward");
        }
    } else {
        animation["Forward"].wrapMode = WrapMode.Once;
    }
    
    if(Input.GetKey("s"))  { //|| Input.GetKey("d") || Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.RightArrow) || (Input.GetKey("s") && Input.GetKey("d"))) {
        animation["Forward"].wrapMode = WrapMode.Loop;
        animation["Forward"].speed = negativeSpeed;
        if(animation.IsPlaying) { //This is to see if the animation finished while the key was up
            animation.Play("Forward");
        }
    } else {
        animation["Forward"].wrapMode = WrapMode.Once;
    }
}