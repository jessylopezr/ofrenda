import * as THREE from "../js/three.module.js";
export default function cruz1({x , y, z}) {

var geometry11 = new THREE.CylinderGeometry(1,1,10,20);
var material10 = new THREE.MeshLambertMaterial({color:0x57392e,side:THREE.DoubleSide});
var mesh11 =new THREE.Mesh(geometry11,material10);
//scene.add(mesh11);
mesh11.position.set(0,5,0);

var geometry11 = new THREE.CylinderGeometry(1,1,8,20);
var material10 = new THREE.MeshLambertMaterial({color:0x57392e,side:THREE.DoubleSide});
var mesh12 =new THREE.Mesh(geometry11,material10);
//scene.add(mesh12);
mesh12.position.set(0,7,0);
mesh12.rotation.set(0,0,1.57)


var geometry12 = new THREE.TorusGeometry(1.5,.2,10,20);
var material11 = new THREE.MeshLambertMaterial({color:0xB09E9E,side:THREE.DoubleSide});
var mesh13 =new THREE.Mesh(geometry12,material11);
//scene.add(mesh13);
mesh13.position.set(0,7,0);
mesh13.rotation.set(2,1,0)

var geometry12 = new THREE.TorusGeometry(1.5,.2,10,20);
var material11 = new THREE.MeshLambertMaterial({color:0xB09E9E,side:THREE.DoubleSide});
var mesh14 =new THREE.Mesh(geometry12,material11);
//scene.add(mesh14);
mesh14.position.set(0,7,0);
mesh14.rotation.set(-2,1,0)

const cruz1 = new THREE.Group()
cruz1.add(mesh11,mesh12,mesh13,mesh14);
cruz1.position.set(x, y, z);

return cruz1;


}