"use strict";

var gl;
var points;
var a=1;
var vertices = [
			-0.5, 0, 
			0, -0.7, 
			-0.5, -0.7,
			
			-0.5, 0,
			0, 0,
			0, -0.7, 
			
			0, 0,
			0, -0.7,
			1, 0.2,
			
			0, -0.7,
			1, 0.2,
			1, -0.5,
			
			-0.5, 0,
			-0.25, 0.3,
			0, 0,
			
			-0.25, 0.3,
			0, 0,
			0.75, 0.5,
			
			0, 0,
			1, 0.2,
			0.75, 0.5,
			
			0.25, 0.2,
			0.25, 0.5,
			0.12, 0.17,
			
			0.25, 0.5,
			0.12, 0.4,
			0.12, 0.17,
			
		];
var Colors = [
			0.7,0.7,0.8,1.0, //1
			0.7,0.7,0.8,1.0,
			0.7,0.7,0.8,1.0,
			
			0.7,0.7,0.8,1.0,  //2
			0.7,0.7,0.8,1.0,
			0.7,0.7,0.8,1.0,
			
			0.8,0.7,0.8,1.0,  //3
			0.8,0.7,0.8,1.0,
			0.8,0.7,0.8,1.0,
			
			0.8,0.7,0.8,1.0,  //4
			0.8,0.7,0.8,1.0,
			0.8,0.7,0.8,1.0,
			
			1.0,0.0,0.2,0.85,  //5
			1.0,0.0,0.2,0.85,
			1.0,0.0,0.2,0.85,
			
			1.0,0.0,0.2,1.0,  //6
			1.0,0.0,0.2,1.0,
			1.0,0.0,0.2,1.0,
			
			1.0,0.0,0.2,1.0,  //7
			1.0,0.0,0.2,1.0,
			1.0,0.0,0.2,1.0,
			
			
			0, 0.5, 0.5, 1.0,  //8
			0, 0.5, 0.5, 1.0,
			0, 0.5, 0.5, 1.0,
			
			0, 0.5, 0.5, 1.0,  //9
			0, 0.5, 0.5, 1.0,
			0, 0.5, 0.5, 1.0,
			
			
		];
function makemeals(){
	if(a==1){
		 vertices = [
					-0.5, 0, 
					0, -0.7, 
					-0.5, -0.7,
					
					-0.5, 0,
					0, 0,
					0, -0.7, 
					
					0, 0,
					0, -0.7,
					1, 0.2,
					
					0, -0.7,
					1, 0.2,
					1, -0.5,
					
					-0.5, 0,
					-0.25, 0.3,
					0, 0,
					
					-0.25, 0.3,
					0, 0,
					0.75, 0.5,
					
					0, 0,
					1, 0.2,
					0.75, 0.5,
					
					0.25, 0.2,
					0.25, 0.5,
					0.12, 0.17,
					
					0.25, 0.5,
					0.12, 0.4,
					0.12, 0.17,
					
					0.2,0.5,
					0.2,0.6,
					0.1,0.6,
					
					0.1,0.7,
					0.1,0.8,
					0.0,0.7,
					
					0.0,0.7,
					0.0,0.6,
					0.1,0.6,
				];
				
			Colors = [
						0.7,0.7,0.8,1.0, //1
						0.7,0.7,0.8,1.0,
						0.7,0.7,0.8,1.0,
						
						0.7,0.7,0.8,1.0,  //2
						0.7,0.7,0.8,1.0,
						0.7,0.7,0.8,1.0,
						
						0.8,0.7,0.8,1.0,  //3
						0.8,0.7,0.8,1.0,
						0.8,0.7,0.8,1.0,
						
						0.8,0.7,0.8,1.0,  //4
						0.8,0.7,0.8,1.0,
						0.8,0.7,0.8,1.0,
						
						1.0,0.0,0.2,0.85,  //5
						1.0,0.0,0.2,0.85,
						1.0,0.0,0.2,0.85,
						
						1.0,0.0,0.2,1.0,  //6
						1.0,0.0,0.2,1.0,
						1.0,0.0,0.2,1.0,
						
						1.0,0.0,0.2,1.0,  //7
						1.0,0.0,0.2,1.0,
						1.0,0.0,0.2,1.0,
						
						
						0, 0.5, 0.5, 1.0,  //8
						0, 0.5, 0.5, 1.0,
						0, 0.5, 0.5, 1.0,
						
						0, 0.5, 0.5, 1.0,  //9
						0, 0.5, 0.5, 1.0,
						0, 0.5, 0.5, 1.0,
						
						0.5, 0.5, 0.5, 1.0,  //10
						0.5, 0.5, 0.5, 1.0,
						0.5, 0.5, 0.5, 1.0,
						
						0.5, 0.5, 0.5, 1.0,  //10
						0.5, 0.5, 0.5, 1.0,
						0.5, 0.5, 0.5, 1.0,
						
						0.5, 0.5, 0.5, 1.0,  //10
						0.5, 0.5, 0.5, 1.0,
						0.5, 0.5, 0.5, 1.0,
					];
					
					a=0;
					document.getElementById("cook").value="做完啦";
	}
	else if(a==0){
		vertices = [
					-0.5, 0, 
					0, -0.7, 
					-0.5, -0.7,
					
					-0.5, 0,
					0, 0,
					0, -0.7, 
					
					0, 0,
					0, -0.7,
					1, 0.2,
					
					0, -0.7,
					1, 0.2,
					1, -0.5,
					
					-0.5, 0,
					-0.25, 0.3,
					0, 0,
					
					-0.25, 0.3,
					0, 0,
					0.75, 0.5,
					
					0, 0,
					1, 0.2,
					0.75, 0.5,
					
					0.25, 0.2,
					0.25, 0.5,
					0.12, 0.17,
					
					0.25, 0.5,
					0.12, 0.4,
					0.12, 0.17,
					
				];
		Colors = [
					0.7,0.7,0.8,1.0, //1
					0.7,0.7,0.8,1.0,
					0.7,0.7,0.8,1.0,
					
					0.7,0.7,0.8,1.0,  //2
					0.7,0.7,0.8,1.0,
					0.7,0.7,0.8,1.0,
					
					0.8,0.7,0.8,1.0,  //3
					0.8,0.7,0.8,1.0,
					0.8,0.7,0.8,1.0,
					
					0.8,0.7,0.8,1.0,  //4
					0.8,0.7,0.8,1.0,
					0.8,0.7,0.8,1.0,
					
					1.0,0.0,0.2,0.85,  //5
					1.0,0.0,0.2,0.85,
					1.0,0.0,0.2,0.85,
					
					1.0,0.0,0.2,1.0,  //6
					1.0,0.0,0.2,1.0,
					1.0,0.0,0.2,1.0,
					
					1.0,0.0,0.2,1.0,  //7
					1.0,0.0,0.2,1.0,
					1.0,0.0,0.2,1.0,
					
					
					0, 0.5, 0.5, 1.0,  //8
					0, 0.5, 0.5, 1.0,
					0, 0.5, 0.5, 1.0,
					
					0, 0.5, 0.5, 1.0,  //9
					0, 0.5, 0.5, 1.0,
					0, 0.5, 0.5, 1.0,
					
				];
		a = 1;
		document.getElementById("cook").value="做饭";	
	}
}

/* window.onload = */
function init(){
	var canvas = document.getElementById( "triangle-canvas" );
	gl = WebGLUtils.setupWebGL( canvas );
	if( !gl ){
		alert( "WebGL isn't available" );
	}


	// Three Vertices
	
		
	// Configure WebGL
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );

	// Load the data into the GPU
	var colorID = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, colorID );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( Colors ), gl.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var vColor = gl.getAttribLocation( program, "vColor" );
	gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vColor);
	
	render();
	
}	
function render(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
	gl.drawArrays( gl.TRIANGLES, 0, vertices.length/2 );
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}
