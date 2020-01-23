function main(){
    const canvas = document.querySelector("#glCanvas");
    //Initialize gl context
    const gl = canvas.getContext("webgl");

    // Only continue is WebGl is working
    if (gl == null)
    {
        alert("Unable to initialize WebGL");
        return;
    }

    // set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // clear the color buffer with specified color
    gl.clear(gl.COLOR_BUFFER_BIT);
}
