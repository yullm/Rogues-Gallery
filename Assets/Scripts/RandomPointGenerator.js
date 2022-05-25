/*
Creates Point. Point chooses what type of terrain it is. Based off that the next is spawned at new end pos.
*/
var points = new Array();
var i_Num : int = 0;
var previousPoint : GameObject;
var nextPos : Vector2;
var fTerrain : Sprite;
var uTerrain : Sprite;
var dTerrain : Sprite;

function Start () 
{
	previousPoint = this.gameObject;
	nextPos = this.gameObject.transform.position;
	for(i_Num=0;i_Num<36;i_Num++)
	{
		var p = new GameObject("Point",SpriteRenderer);
		r = p.gameObject.GetComponent(SpriteRenderer);
		p.transform.position = nextPos;
		var type :int = Random.Range(0,3);//excludes max when using int
		if(type == 0)
		{
			r.sprite = fTerrain;
			nextPos = p.transform.position + Vector2(2,0);
		}
		else if(type == 1)
		{
			r.sprite = uTerrain;
			nextPos = p.transform.position + Vector2(2,0.6);
		}
		else if(type == 2)
		{
			r.sprite = dTerrain;
			nextPos = p.transform.position + Vector2(2,-0.6);
		}
		p.AddComponent(PolygonCollider2D);
		
		
		previousPoint = p;
		points.push(p);
		
	}

}

function Update () 
{

}