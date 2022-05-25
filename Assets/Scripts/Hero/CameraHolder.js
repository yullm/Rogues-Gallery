var hero : GameObject;
var rStats : RoomStats;

var xLimit : float;
var xStart :float;

function Start () 
{

hero = GameObject.FindGameObjectWithTag("Player");//Identifies Hero
gameObject.SetActiveRecursively(false);//Sets all Children Inactive
gameObject.SetActive(true);//Reactivates self
rStats = gameObject.GetComponent(RoomStats);
}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.gameObject.tag == "Player")	//If hero Enters Room Activate Room and Children
	{
		gameObject.SetActiveRecursively(true);
		
	}
}

function OnTriggerStay2D(other : Collider2D)//if player is within bounds camera follow player//if player is too close to edge lock camera.
{
	if(other.gameObject.tag == "Player")
	{
		
		
		if(hero == null)
		{
			hero = other.gameObject;
		}
		
		Camera.main.transform.position = Vector3.Lerp(Camera.main.transform.position,hero.transform.position - Vector3(-3,-3,20),Time.deltaTime*2);
		if(Camera.main.transform.position.x <= transform.position.x + xStart)
		{
			Camera.main.transform.position.x = transform.position.x + xStart;
		}
		if(Camera.main.transform.position.x >= transform.position.x + (rStats.roomWidth - xLimit))
		{
			Camera.main.transform.position.x = transform.position.x + (rStats.roomWidth - xLimit);
		}
		
			
	}
	
}

function OnTriggerExit2D(other : Collider2D) //enemies will have to be detached from parent on load or they will continue to work just not shown
{
	if(other.gameObject.tag == "Player") //When Hero Leaves Deactivate Room and Children. Leaving Master Active but not visible for Collision Sake.
	{
		
		gameObject.SetActiveRecursively(false);
		
		gameObject.SetActive(true);
	}
}