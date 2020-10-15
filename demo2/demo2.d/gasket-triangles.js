"use strict";

const { vec3 } = glMatrix;

var canvas;
var gl;
var numTimesToSubdivide;
var points = [];

var theta;

function inpuchange(){
	numTimesToSubdivide=document.getElementById("iptNum").value;
}
function inputheta(){
	theta=document.getElementById("iptheta").value/180*Math.PI;
}
//window.onload = 
function initTriangles(){
	points = [];
	canvas = document.getElementById( "gl-canvas" );

	gl = WebGLUtils.setupWebGL( canvas );
	if( !gl ){
		alert( "WebGL isn't available" );
	}

	// initialise data for Sierpinski gasket

	// first, initialise the corners of the gasket with three points.
	var vertices = [
		-1, -1,  0,
		 0,  1,  0,
		 1, -1,  0
	];

	// var u = vec3.create();
	// vec3.set( u, -1, -1, 0 );
	var u = vec3.fromValues( vertices[0], vertices[1], vertices[2] );
	// var v = vec3.create();
	// vec3.set( v, 0, 1, 0 );
	var v = vec3.fromValues( vertices[3], vertices[4], vertices[5] );
	// var w = vec3.create();
	// vec3.set( w, 1, -1, 0 );
	var w = vec3.fromValues( vertices[6], vertices[7], vertices[8] );

	divideTriangle( u, v, w, numTimesToSubdivide );

	// configure webgl
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

	// load shaders and initialise attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	// load data into gpu
	var vertexBuffer = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( points ), gl.STATIC_DRAW );

	// associate out shader variables with data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );

	renderTriangles();
}

function triangle( a, b, c ){
	//var k;
	points.push( a[0]*Math.cos(theta)-a[1]*Math.sin(theta), a[0]*Math.sin(theta)+a[1]*Math.cos(theta), a[2] );
	points.push( b[0]*Math.cos(theta)-b[1]*Math.sin(theta), b[0]*Math.sin(theta)+b[1]*Math.cos(theta), b[2] );
	
	points.push( b[0]*Math.cos(theta)-b[1]*Math.sin(theta), b[0]*Math.sin(theta)+b[1]*Math.cos(theta), b[2] );
	points.push( c[0]*Math.cos(theta)-c[1]*Math.sin(theta), c[0]*Math.sin(theta)+c[1]*Math.cos(theta), c[2] );
	
	points.push( c[0]*Math.cos(theta)-c[1]*Math.sin(theta), c[0]*Math.sin(theta)+c[1]*Math.cos(theta), c[2] );
	points.push( a[0]*Math.cos(theta)-a[1]*Math.sin(theta), a[0]*Math.sin(theta)+a[1]*Math.cos(theta), a[2] );
	// for( k = 0; k < 3; k++ )
	// 	points.push( a[k] );
	// for( k = 0; k < 3; k++ )
	// 	points.push( b[k] );
	// for( k = 0; k < 3; k++ )
	// 	points.push( c[k] );
}

function divideTriangle( a, b, c, count ){
	// check for end of recursion
	if( count == 0 ){
		triangle( a, b, c );
	}else{
		var ab = vec3.create();
		vec3.lerp( ab, a, b, 0.5 );             //ab=a*0.5+b*0.5;向量
		var bc = vec3.create();
		vec3.lerp( bc, b, c, 0.5 );
		var ca = vec3.create();
		vec3.lerp( ca, c, a, 0.5 );


		// three new triangles
		divideTriangle( a, ab, ca, count-1 );
		divideTriangle( b, bc, ab, count-1 );
		divideTriangle( c, ca, bc, count-1 );
				
		divideTriangle( ab, bc, ca, count-1 );
	}
}

function renderTriangles(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	gl.drawArrays( gl.LINES, 0, points.length/3 );
}