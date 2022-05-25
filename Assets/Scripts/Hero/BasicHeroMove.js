var moveSpeed : int;
var inSpeed : int;
var facing = "Right";//Current Direction that hero is facing
var groundAdjust : Vector3; //to adjust starting point of groundcast
var grounded = true;
var anim;
var jumpMax : float;
var jumpTimer : float;
var jumpForce : float = 1.5;

function Start()
{
	jumpMax = 0.4;
	anim = GetComponent(Animator);
}

function Update () 
{

GroundCheck();

	var horizontal = Input.GetAxis("Horizontal");
	var vertical : int = Input.GetAxis("Vertical");
	if(vertical == 1)
	{
		anim.SetBool("AimUp", true);
		anim.SetBool("AimDown", false);
	}
	else if(vertical == -1)
	{
		anim.SetBool("AimUp", false);
		anim.SetBool("AimDown", true);
	}
	else
	{
		anim.SetBool("AimUp", false);
		anim.SetBool("AimDown", false);
	}
	
	if(horizontal >= -0.5 && horizontal <= 0.5)
	{
		horizontal = 0;
		anim.SetBool("Running",false);
	}

	if(horizontal != 0)
	{
		transform.Translate(Vector2(horizontal,0)* moveSpeed * Time.deltaTime);
		anim.SetBool("Running",true);
	}

	if(horizontal >= 0.1 && facing == "Left")//If right is push and the character is facing left
	{
		transform.localScale.x *= -1; // Flip x scale to face right direction
		facing = "Right";//and change which direction they are facing.
	}
	else if(horizontal <= -0.1 && facing == "Right")
	{
		transform.localScale.x *= -1;
		facing = "Left";
	}

	if(Input.GetButtonDown("Jump") && grounded == true) //do line casting
	{
		rigidbody2D.AddForce(Vector2(0,20)*10 * jumpForce);
		jumpTimer= 0;
		grounded = false;
		
	}
	
	if(Input.GetButton("Jump") && jumpTimer <= jumpMax - 0.1) //do line casting
	{
		jumpTimer += Time.deltaTime;
		rigidbody2D.AddForce(Vector2(0,20)*jumpForce);
	}	
	if(Input.GetButtonUp("Jump"))
	{
		jumpTimer = jumpMax;
	}
	
	

}

function GroundCheck()
{
	
	
	var groundSearch : RaycastHit2D = Physics2D.Linecast(transform.position + groundAdjust,transform.position - Vector2(0,0.2),1);
	
	if(groundSearch.collider != null)
	{
		grounded = true;
		if(anim)
		{
		anim.SetBool("Jumping", false);
		}
	}
	else if(groundSearch.collider == null)
	{
		grounded = false;
		if(anim)
		{
		anim.SetBool("Jumping", true);
		}
	}	
}



