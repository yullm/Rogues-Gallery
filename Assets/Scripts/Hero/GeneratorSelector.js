var generators : GameObject[];

function Start () 
{

}

function Update () 
{
	if(Input.GetButtonDown("Jump"))
	{
		generators[0].SendMessage("MoldHero");
	}
	
	if(Input.GetButtonDown("SP"))
	{
		generators[1].SendMessage("MoldHero");
	}
	
	
}