import * as THREE from "../js/three.module.js";
export default function vaso({x , y, z}) {

var geometry11 = new THREE.CylinderGeometry(1.1,1,3,22,4,true);
var material10 = new THREE.MeshLambertMaterial({color:0xFFFFFF
,side: THREE.DoubleSide,transparent: true,opacity:0.5});
var mesh11 =new THREE.Mesh(geometry11,material10);
//scene.add(mesh11);
mesh11.position.set(0,2,5);

var geometry12 = new THREE.CylinderGeometry(1,1,2.5,22,4);
var material11 = new THREE.MeshLambertMaterial({color:0x9EFFFC
,side:THREE.DoubleSide});
var mesh12 =new THREE.Mesh(geometry12,material11);
//scene.add(mesh12);
mesh12.position.set(0,1.8,5);


const vaso = new THREE.Group();
vaso.add(mesh11, mesh12);
vaso.position.set(x, y, z);

return vaso;

}