using UnityEngine;
//using IndieEffects;

[RequireComponent(typeof(IndieEffects))]
public class IndieEffects_Depth : MonoBehaviour
{
    public Shader shader;
    public static Texture2D DepthTex;
    private GameObject DepthCam;

    private void Start () 
    {
	    DepthTex = new Texture2D(Screen.width, Screen.height, TextureFormat.RGB24, false);
    }

    private void OnPreCull()
    {
	    if (!DepthCam)
        {
	        DepthCam = new GameObject("DepthCamera");
	        DepthCam.AddComponent("Camera");
	        DepthCam.camera.SetReplacementShader(shader,"");
	        DepthCam.camera.enabled = false;
	        DepthCam.camera.farClipPlane = camera.farClipPlane;
	        DepthCam.camera.backgroundColor = Color.white;
	        DepthCam.camera.clearFlags = CameraClearFlags.SolidColor;
	        DepthCam.camera.depth = camera.depth-2;
	    }

	    DepthCam.transform.position = transform.position;
	    DepthCam.transform.rotation = transform.rotation;
	    DepthCam.camera.Render();
	    DepthTex.Resize(Screen.width,Screen.height,TextureFormat.RGB24,false);
	    DepthTex.ReadPixels(new Rect(0,0,Screen.width, Screen.height), 0, 0);
	    DepthTex.Apply();	
    }
}