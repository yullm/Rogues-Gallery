

import System.IO;

var width : int;//number of rooms horizontally
var height : int;//number of floors vertically
var key : GameObject;
var curWidth = 0;

var tPiece : GameObject;//chosen piece that gets placed

var s1Tpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Top Entrance Pieces
var s1Mpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Middle Entrance Pieces
var s1Bpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom Entrance Pieces
var s1TMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Middle Entrance Pieces
var s1TBpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Bottom Entrance Pieces
var s1BMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom & Middle Entrance Pieces
var s1Apieces : GameObject[];//section 1 rooms array. Must end with Elevator	//All 3 Entrance Pieces

var s2Tpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Top Entrance Pieces
var s2Mpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Middle Entrance Pieces
var s2Bpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom Entrance Pieces
var s2TMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Middle Entrance Pieces
var s2TBpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Bottom Entrance Pieces
var s2BMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom & Middle Entrance Pieces
var s2Apieces : GameObject[];//section 1 rooms array. Must end with Elevator	//All 3 Entrance Pieces

var s3Tpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Top Entrance Pieces
var s3Mpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Middle Entrance Pieces
var s3Bpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom Entrance Pieces
var s3TMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Middle Entrance Pieces
var s3TBpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Bottom Entrance Pieces
var s3BMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom & Middle Entrance Pieces
var s3Apieces : GameObject[];//section 1 rooms array. Must end with Elevator	//All 3 Entrance Pieces

var s4Tpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Top Entrance Pieces
var s4Mpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Middle Entrance Pieces
var s4Bpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom Entrance Pieces
var s4TMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Middle Entrance Pieces
var s4TBpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Bottom Entrance Pieces
var s4BMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom & Middle Entrance Pieces
var s4Apieces : GameObject[];//section 1 rooms array. Must end with Elevator	//All 3 Entrance Pieces

var s5Tpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Top Entrance Pieces
var s5Mpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Middle Entrance Pieces
var s5Bpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom Entrance Pieces
var s5TMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Middle Entrance Pieces
var s5TBpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Bottom Entrance Pieces
var s5BMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom & Middle Entrance Pieces
var s5Apieces : GameObject[];//section 1 rooms array. Must end with Elevator	//All 3 Entrance Pieces

var s6Tpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Top Entrance Pieces
var s6Mpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Middle Entrance Pieces
var s6Bpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom Entrance Pieces
var s6TMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Middle Entrance Pieces
var s6TBpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Top & Bottom Entrance Pieces
var s6BMpieces : GameObject[];//section 1 rooms array. Must end with Elevator	//Bottom & Middle Entrance Pieces
var s6Apieces : GameObject[];//section 1 rooms array. Must end with Elevator	//All 3 Entrance Pieces

var s7Mpieces : GameObject[];//section 1 rooms array. Must end with Elevator 	//Middle Entrance Pieces

var bossPieces : GameObject[];

var s1Rooms = Array();
var s2Rooms = Array();
var s3Rooms = Array();
var s4Rooms = Array();
var s5Rooms = Array();
var s6Rooms = Array();
var s7Rooms = Array();

function Start()
{
	GenerateTower();
}

function GenerateTower () 
{

	for(var y = 0;y<height;y++)		//Create Array for each section placed. for key drop and boss.
	{
		if(y<=2)
		{
			for(var x1 = 0;x1<width;x1++)
			{
				if(x1==0)//end caps
				{
					tPiece = s1Mpieces[s1Mpieces.Length-1];//places elevator at beginning and end of each level. // switch to work for west and east elevators.
					var room : GameObject = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);
					var rWidth = room.GetComponent(RoomStats);
					var preExit : String = rWidth.exitType;
					print(preExit);
					curWidth += rWidth.roomWidth;
					
				}
				else 
				{
					if(preExit == "Middle")
					{
						tPiece = s1Mpieces[Random.Range(0,s1Mpieces.Length-1)];
					}
					else if(preExit == "Top")
					{
						tPiece = s1Tpieces[Random.Range(0,s1Tpieces.Length-1)];
					}
					else if(preExit == "Bottom")
					{
						tPiece = s1Bpieces[Random.Range(0,s1Bpieces.Length-1)];
					}
					else if(preExit == "TopMiddle")
					{
						tPiece = s1TMpieces[Random.Range(0,s1TMpieces.Length-1)];
					}
					else if(preExit == "TopBottom")
					{
						tPiece = s1TBpieces[Random.Range(0,s1TBpieces.Length-1)];
					}
					else if(preExit == "BottomMiddle")
					{
						tPiece = s1BMpieces[Random.Range(0,s1BMpieces.Length-1)];
					}
					else if(preExit == "All")
					{
						tPiece = s1Apieces[Random.Range(0,s1Apieces.Length-1)];
					}
					
					
					room = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 256x128 with a pixel unit ratio of 16
					s1Rooms.Push(room);
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}//at end choose one room and replace with section 1 boss
				
				if(x1 == width-1)//end caps
				{
					tPiece = s1Mpieces[s1Mpieces.Length-1];//places elevator at beginning and end of each level. // switch to work for west and east elevators.
					room = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x384 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth = 0;
				}
				
			}
		}
		
		if(y>=3 && y<=5)
		{
			for(var x2 = 0;x2<width;x2++)
			{
				if(x2==0)//end caps
				{
					tPiece = s2Mpieces[s2Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x384 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}
				else
				{
					if(preExit == "Middle")
					{
						tPiece = s2Mpieces[Random.Range(0,s2Mpieces.Length-1)];
					}
					else if(preExit == "Top")
					{
						tPiece = s2Tpieces[Random.Range(0,s2Tpieces.Length-1)];
					}
					else if(preExit == "Bottom")
					{
						tPiece = s2Bpieces[Random.Range(0,s2Bpieces.Length-1)];
					}
					else if(preExit == "TopMiddle")
					{
						tPiece = s2TMpieces[Random.Range(0,s2TMpieces.Length-1)];
					}
					else if(preExit == "TopBottom")
					{
						tPiece = s2TBpieces[Random.Range(0,s2TBpieces.Length-1)];
					}
					else if(preExit == "BottomMiddle")
					{
						tPiece = s2BMpieces[Random.Range(0,s2BMpieces.Length-1)];
					}
					else if(preExit == "All")
					{
						tPiece = s2Apieces[Random.Range(0,s2Apieces.Length-1)];
					}
					room = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 256x128 with a pixel unit ratio of 16
					s2Rooms.Push(room);
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}//at end choose one room and replace with section 2 boss
				
				if(x2 == width-1)//end caps
				{
					tPiece = s2Mpieces[s2Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x384 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth = 0;
				}
				
			}
		}
		
		if(y>=6 && y<=8)
		{
			for(var x3 = 0;x3<width;x3++)
			{
				if(x3==0)//end caps
				{
					tPiece = s3Mpieces[s3Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x384 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}
				else
				{
					if(preExit == "Middle")
					{
						tPiece = s3Mpieces[Random.Range(0,s3Mpieces.Length-1)];
					}
					else if(preExit == "Top")
					{
						tPiece = s3Tpieces[Random.Range(0,s3Tpieces.Length-1)];
					}
					else if(preExit == "Bottom")
					{
						tPiece = s3Bpieces[Random.Range(0,s3Bpieces.Length-1)];
					}
					else if(preExit == "TopMiddle")
					{
						tPiece = s3TMpieces[Random.Range(0,s3TMpieces.Length-1)];
					}
					else if(preExit == "TopBottom")
					{
						tPiece = s3TBpieces[Random.Range(0,s3TBpieces.Length-1)];
					}
					else if(preExit == "BottomMiddle")
					{
						tPiece = s3BMpieces[Random.Range(0,s3BMpieces.Length-1)];
					}
					else if(preExit == "All")
					{
						tPiece = s3Apieces[Random.Range(0,s3Apieces.Length-1)];
					}
					room = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 256x128 with a pixel unit ratio of 16
					s3Rooms.Push(room);
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}//at end choose one room and replace with section 2 boss
				if(x3 == width-1)//end caps
				{
					tPiece = s3Mpieces[s3Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x384 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth = 0;
				}
				
			}
		}
		
		if(y>=9 && y<=11)
		{
			for(var x4 = 0;x4<width;x4++)
			{
				if(x4==0)//end caps
				{
					tPiece = s4Mpieces[s4Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x484 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}
				else
				{
					if(preExit == "Middle")
					{
						tPiece = s4Mpieces[Random.Range(0,s4Mpieces.Length-1)];
					}
					else if(preExit == "Top")
					{
						tPiece = s4Tpieces[Random.Range(0,s4Tpieces.Length-1)];
					}
					else if(preExit == "Bottom")
					{
						tPiece = s4Bpieces[Random.Range(0,s4Bpieces.Length-1)];
					}
					else if(preExit == "TopMiddle")
					{
						tPiece = s4TMpieces[Random.Range(0,s4TMpieces.Length-1)];
					}
					else if(preExit == "TopBottom")
					{
						tPiece = s4TBpieces[Random.Range(0,s4TBpieces.Length-1)];
					}
					else if(preExit == "BottomMiddle")
					{
						tPiece = s4BMpieces[Random.Range(0,s4BMpieces.Length-1)];
					}
					else if(preExit == "All")
					{
						tPiece = s4Apieces[Random.Range(0,s4Apieces.Length-1)];
					}
					room = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 256x128 with a pixel unit ratio of 16
					s4Rooms.Push(room);
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}//at end choose one room and replace with section 2 boss
				
				if(x4 == width-1)//end caps
				{
					tPiece = s4Mpieces[s4Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x484 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth = 0;
				}
				
			}
		}
		
		if(y>=12 && y<=14)
		{
			for(var x5 = 0;x5<width;x5++)
			{
				if(x5==0)//end caps
				{
					tPiece = s5Mpieces[s5Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x484 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}
				else
				{
					if(preExit == "Middle")
					{
						tPiece = s5Mpieces[Random.Range(0,s5Mpieces.Length-1)];
					}
					else if(preExit == "Top")
					{
						tPiece = s5Tpieces[Random.Range(0,s5Tpieces.Length-1)];
					}
					else if(preExit == "Bottom")
					{
						tPiece = s5Bpieces[Random.Range(0,s5Bpieces.Length-1)];
					}
					else if(preExit == "TopMiddle")
					{
						tPiece = s5TMpieces[Random.Range(0,s5TMpieces.Length-1)];
					}
					else if(preExit == "TopBottom")
					{
						tPiece = s5TBpieces[Random.Range(0,s5TBpieces.Length-1)];
					}
					else if(preExit == "BottomMiddle")
					{
						tPiece = s5BMpieces[Random.Range(0,s5BMpieces.Length-1)];
					}
					else if(preExit == "All")
					{
						tPiece = s5Apieces[Random.Range(0,s5Apieces.Length-1)];
					}
					room = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 256x128 with a pixel unit ratio of 16
					s5Rooms.Push(room);
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}//at end choose one room and replace with section 2 boss
				
				if(x5 == width-1)//end caps
				{
					tPiece = s5Mpieces[s5Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x484 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth = 0;
				}
				
			}
		}
		
		if(y>=15 && y<=17)
		{
			for(var x6 = 0;x6<width;x6++)
			{
				if(x6==0)//end caps
				{
					tPiece = s6Mpieces[s6Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x484 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}
				else
				{
					if(preExit == "Middle")
					{
						tPiece = s6Mpieces[Random.Range(0,s6Mpieces.Length-1)];
					}
					else if(preExit == "Top")
					{
						tPiece = s6Tpieces[Random.Range(0,s6Tpieces.Length-1)];
					}
					else if(preExit == "Bottom")
					{
						tPiece = s6Bpieces[Random.Range(0,s6Bpieces.Length-1)];
					}
					else if(preExit == "TopMiddle")
					{
						tPiece = s6TMpieces[Random.Range(0,s6TMpieces.Length-1)];
					}
					else if(preExit == "TopBottom")
					{
						tPiece = s6TBpieces[Random.Range(0,s6TBpieces.Length-1)];
					}
					else if(preExit == "BottomMiddle")
					{
						tPiece = s6BMpieces[Random.Range(0,s6BMpieces.Length-1)];
					}
					else if(preExit == "All")
					{
						tPiece = s6Apieces[Random.Range(0,s6Apieces.Length-1)];
					}
					room = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 256x128 with a pixel unit ratio of 16
					s6Rooms.Push(room);
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}//at end choose one room and replace with section 2 boss
				
				if(x6 == width-1)//end caps
				{
					tPiece = s6Mpieces[s6Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x484 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth = 0;
				}
				
			}
		}
		
		if(y>=18)
		{
			for(var x7 = 0;x7<width;x7++)
			{
				if(x7==0)//end caps
				{
					tPiece = s7Mpieces[s7Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x484 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}
				else
				{
					tPiece = s7Mpieces[Random.Range(0,s7Mpieces.Length-1)];
					room = Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 256x128 with a pixel unit ratio of 16
					s7Rooms.Push(room);
					rWidth = room.GetComponent(RoomStats);
					curWidth += rWidth.roomWidth;
					preExit = rWidth.exitType;
				}//at end choose one room and replace with section 2 boss
				if(x7 == width-1)//end caps
				{
					tPiece = s7Mpieces[s7Mpieces.Length-1];
					Instantiate(tPiece,Vector2(curWidth,y*64),Quaternion.identity);//places for rooms that are 768x484 with a pixel unit ratio of 16
					rWidth = room.GetComponent(RoomStats);
					curWidth = 0;
				}
			}
		}
	}
	PlaceBosses();
}

function PlaceBosses()
{
	//Section 1
	var s1BossIndex : int = Random.Range(3,14);//chooses an index number for which room will be replaced by the Boss Room
	var s1BossPos = s1Rooms[s1BossIndex];//Variable for the Chosen Room that will be replaced.
	Instantiate(bossPieces[0],s1BossPos.transform.position,Quaternion.identity);//Place Boss at Position of old Room
	Destroy(s1BossPos);//Destroys old Room.
	//After Boss Rooms have been created choose of the remaining and place the key in it.
	
	//Section 2
	var s2BossIndex : int = Random.Range(3,14);
	var s2BossPos = s2Rooms[s2BossIndex];
	Instantiate(bossPieces[0],s2BossPos.transform.position,Quaternion.identity);//must change index of bossPiece when there are more.
	Destroy(s2BossPos);
	
	//Section 3
	var s3BossIndex : int = Random.Range(3,14);
	var s3BossPos = s3Rooms[s3BossIndex];
	Instantiate(bossPieces[0],s3BossPos.transform.position,Quaternion.identity);
	Destroy(s3BossPos);
	
	//Section 4
	var s4BossIndex : int = Random.Range(3,14);
	var s4BossPos = s4Rooms[s4BossIndex];
	Instantiate(bossPieces[0],s4BossPos.transform.position,Quaternion.identity);
	Destroy(s4BossPos);
	
	//Section 5
	var s5BossIndex : int = Random.Range(3,14);
	var s5BossPos = s5Rooms[s5BossIndex];
	Instantiate(bossPieces[0],s5BossPos.transform.position,Quaternion.identity);
	Destroy(s5BossPos);
	
	//Section 6
	var s6BossIndex : int = Random.Range(3,14);
	var s6BossPos = s6Rooms[s6BossIndex];
	Instantiate(bossPieces[0],s6BossPos.transform.position,Quaternion.identity);
	Destroy(s6BossPos);
	
	//Section 3
	var s7BossIndex : int = Random.Range(0,4);
	var s7BossPos = s7Rooms[s7BossIndex];
	Instantiate(bossPieces[0],s7BossPos.transform.position,Quaternion.identity);
	Destroy(s7BossPos);
	
	PlaceKeys();

}

function PlaceKeys()//for now. Try to place it on an enemy on spawn. //find enemy or with cameraholder
{
	//Section 1
	var floor1Index : int = Random.Range(0,4);//can make it so that if this number is the bossIndex then change.
	var floor2Index : int = Random.Range(5,9);
	var floor3Index : int = Random.Range(10,14);
	
	Instantiate(key,s1Rooms[floor1Index].transform.position + Vector2(24,12),Quaternion.identity);
	Instantiate(key,s1Rooms[floor2Index].transform.position + Vector2(24,12),Quaternion.identity);
	Instantiate(key,s1Rooms[floor3Index].transform.position + Vector2(24,12),Quaternion.identity);
}


