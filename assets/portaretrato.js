import * as THREE from "../js/three.module.js";
export default function retrato({x , y, z}) {

var geometry08 = new THREE.BoxGeometry(4,4,.2,4,12,20);
var textura1=new THREE.TextureLoader().load("assets/valentin-elizalde-especial_0_0_678_422.jpg");
var material08 = new THREE.MeshLambertMaterial({map:textura1})
var mesh08 =new THREE.Mesh(geometry08,material08);
//scene.add(mesh08);
mesh08.position.set(0,5,-5);

var geometry8 = new THREE.BoxGeometry(5,5,.2,4,12,20);
var material8 = new THREE.MeshLambertMaterial({color:0x57392e,side:THREE.DoubleSide});
var mesh081 =new THREE.Mesh(geometry8,material8);
//scene.add(mesh08);
mesh081.position.set(0,5,-5.1);

var geometry9 = new THREE.BoxGeometry(1,5,.2,4,12,20);
var material9 = new THREE.MeshLambertMaterial({color:0x57392e,side:THREE.DoubleSide});
var mesh082 =new THREE.Mesh(geometry9,material9);
//scene.add(mesh08);
mesh082.position.set(0,5,-6.55);
mesh082.rotation.set(.5,0,0);

const retrato = new THREE.Group()
retrato.add(mesh08,mesh081,mesh082);
retrato.position.set(x, y, z);

return retrato;

}