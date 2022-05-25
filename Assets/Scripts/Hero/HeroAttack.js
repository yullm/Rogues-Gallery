//Power Attack

var chargeTimer : float;
var attackTimer : float;
var hMove : BasicHeroMove;
var hS : HeroStats;//set from HS
var attackSpeed : float;
var punchBox : GameObject;
var anim : Animator;
var canAttack = false;
var charged = false;
var pullBack = false;
var pBoxScript : PunchBoxDamage;

function OnEnable () 
{
hMove = gameObject.GetComponent(BasicHeroMove);
anim = gameObject.GetComponent(Animator);
if(hS)
{
	attackSpeed = 1 / hS.heroAtkSpd;
	pBoxScript = punchBox.GetComponent(PunchBoxDamage);
	pBoxScript.hS = hS;
	pBoxScript.damage = hS.heroDamage;
	
}

}

function Update () 
{
var hInput : int = Input.GetAxis("Horizontal");
	if(canAttack == false)
	{
		attackTimer += Time.deltaTime;
		if(attackTimer >= attackSpeed)
		{
			canAttack = true;
			attackTimer = attackSpeed;
		}
	}
	else if(canAttack == true)
	{
		if(Input.GetButtonDown("Attack"))
		{	
			pullBack = true;
			anim.SetTrigger("PullBack");
			if(anim.GetBool("Jumping") == false)
			{	
				if(hInput != 0)
				{
					rigidbody2D.velocity.x += hMove.moveSpeed/2 * transform.localScale.x;
				}
				hMove.moveSpeed = 0;
			}
		}
		else if(Input.GetButton("Attack"))
		{
			chargeTimer += Time.deltaTime;
			if(chargeTimer >= 1)
			{
				charged = true;
				pBoxScript.charged = true;
				chargeTimer = 1;
			}
		}
		else if(Input.GetButtonUp("Attack") && pullBack == true)
		{
			attackTimer = 0;
			Attack();
			
			canAttack = false;
			
		}
	}
}

function Attack ()
{	
	pullBack = false;
	anim.SetTrigger("Attack");
	rigidbody2D.AddForce(Vector2(300,0)*transform.localScale.x);
	yield WaitForSeconds (attackSpeed/2);
	punchBox.audio.Play();
	punchBox.collider2D.enabled = true;
	yield WaitForSeconds (attackSpeed/4);
	punchBox.collider2D.enabled = false;
	hMove.moveSpeed = hMove.inSpeed;
	chargeTimer = 0;
	attackTimer = 0;
	charged = false;
	canAttack = false;
	pBoxScript.charged = false;
}