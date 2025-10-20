import * as THREE from "../js/three.module.js";

export default function caña({x, y, z}) {
//cañas
    var cilindro = new THREE.CylinderGeometry(2,2,15,32);
    var material01 = new THREE.MeshBasicMaterial({color:0x8BBF3B
, side: THREE.DoubleSide});
    var mesh2 = new THREE.Mesh(cilindro,material01);
    //scene.add(mesh2);
    mesh2.position.y=4;
    mesh2.castShadow = true;
    

var geometria06 = new THREE.TorusGeometry(2,.5,18,25);
var material02 = new THREE.MeshBasicMaterial({color:0x405C05
, side: THREE.DoubleSide});
var mesh01 = new THREE.Mesh(geometria06,material02);
//scene.add(mesh01);
mesh01.rotation.set(8,0,0);
mesh01.position.set(0,7.5,0);
mesh01.castShadow = true;

var mesh02 = new THREE.Mesh(geometria06,material02);
//scene.add(mesh02);
mesh02.rotation.set(8,0,0);
mesh02.position.set(0,1,0);
mesh02.castShadow = true;

//grupo de cañas
var grupo = new THREE.Group();
grupo.add(mesh01,mesh2,mesh02);
//scene.add(grupo);
grupo.position.set(5,5,-3);
grupo.rotation.set(1.6,0,0);
grupo.castShadow = true;

var caña2 = grupo.clone();
//scene.add(caña2);
caña2.position.set(-5,5,-3);

var caña3 = grupo.clone();
//scene.add(caña3);
caña3.position.set(2,8.7,-3);

var caña4 = grupo.clone();
//scene.add(caña4);
caña4.position.set(-2,8.7,-3);

var caña5 = grupo.clone();
//scene.add(caña5);
caña5.position.set(0,11.5,-3);

var caña6 = grupo.clone();
//scene.add(caña6);
caña6.position.set(0,5,-3);


//canastita
var cilindro = new THREE.CylinderGeometry(12, 6, 4, 32);
var textura2=new THREE.TextureLoader().load("assets/tejido.jpg");
var material2=new THREE.MeshLambertMaterial({map:textura2});
var mesh3 = new THREE.Mesh(cilindro,material2);
//scene.add(mesh3);
mesh3.position.set(0,0,0);
mesh3.castShadow = true;

var cilindro2 = new THREE.CylinderGeometry(12, 12, 2, 32,1,1,true);
var material3=new THREE.MeshLambertMaterial({map:textura2});
var mesh4 = new THREE.Mesh(cilindro2,material3);
//scene.add(mesh4);
mesh4.position.set(0,2,0);
mesh4.castShadow = true;

   var caña = new THREE.Group()
    caña.add(caña2,caña3,grupo,mesh3,mesh4);

    caña.position.set(x, y, z);
    return caña;
}