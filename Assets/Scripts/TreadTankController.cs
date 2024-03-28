using UnityEngine;
using System.Collections;

public class TreadTankController : MonoBehaviour
{
    public Rigidbody projectile;
    public Transform shotPos;
    public float shotForce = 1000f;
    public float moveSpeed = 10f;
	public float rotSpeed = 5f;
	
    void Update ()
    {
		float h = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;
        float v = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed * 5;
				
        transform.Translate(new Vector3(0, 0, -v));
		transform.Rotate(new Vector3(0, h*10, 0f));
        
    }
}