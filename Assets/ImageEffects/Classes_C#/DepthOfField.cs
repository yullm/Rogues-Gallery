using UnityEngine;
//using IndieEffects;
//using IndieEffects_Depth;

[RequireComponent(typeof(IndieEffects))]
[RequireComponent(typeof(IndieEffects_Depth))]
public class DepthOfField : MonoBehaviour
{
    public Shader shader;
    private Material DOFMat;
    [Range (0f,20f)]
    public float FStop;
    [Range (0f,2.5f)]
    public float BlurAmount;

    private void Start () 
    {
	    DOFMat = new Material(shader);
    }

    private void Update () 
    {
        DOFMat.SetTexture("_MainTex", IndieEffects.renderTexture);
        DOFMat.SetTexture("_Depth", IndieEffects_Depth.DepthTex);
	    DOFMat.SetFloat ("_FStop", FStop/10);
	    DOFMat.SetFloat ("_Amount", BlurAmount);
    }

    private void OnPostRender()
    {
        IndieEffects.FullScreenQuad(DOFMat);
    }
}