var equiped = false;
var parent : Transform;


function Update () 
{
	if(parent != null)
	{
		var pLX : int = parent.transform.parent.localScale.x;
		transform.position = parent.transform.position;
		transform.rotation = (parent.transform.rotation);
		transform.rotation.z *= pLX;
		
		transform.localScale.x = pLX;
		
	
	}
	if(equiped == true)
	{
		if(Input.GetButtonDown("PickUp"))
		{
			Release();
		}
	}
}

function Release()
{
	var horizontal = Input.GetAxis("Horizontal");
	var vertical : float = Input.GetAxis("Vertical");
	var weaponScript = GetComponentInChildren(WeaponScript);
	weaponScript.enabled = false;
	parent = null;
	transform.parent = null;
	gameObject.AddComponent(Rigidbody2D);
	rigidbody2D.AddForce(Vector2(horizontal,vertical) * 500);
	equiped = false;
	yield WaitForSeconds(0.2);
	
}

function OnTriggerStay2D(other : Collider2D)
{
	if(other.gameObject.tag == "Player")
	{
	
	
		if(Input.GetButtonDown("PickUp") && equiped == false)
		{
		
			for(var i : Transform in other.transform)
			{
				if(i.gameObject.tag == "WeaponHolder")
				{
					var weaponScript = GetComponentInChildren(WeaponScript);
					weaponScript.enabled = true;
					parent = i;
					Destroy(rigidbody2D);
					yield WaitForSeconds(0.2);
					equiped = true;
				}
			}	
		}
	}
}