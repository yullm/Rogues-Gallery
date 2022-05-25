var enemies : GameObject[];

function Start () 
{
var enemy = enemies[Random.Range(0,enemies.Length)];
var spawn = Instantiate(enemy,transform.position,Quaternion.identity);
spawn.transform.parent = transform.parent;
Destroy(gameObject);
}
