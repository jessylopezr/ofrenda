import * as THREE from "../js/three.module.js";
export default function flor2({x , y, z}) {

var geometry13 = new THREE.TorusKnotGeometry(.2,0.3,20,4,6,0);
var material12 = new THREE.MeshLambertMaterial({color:0xB09E9E,side:THREE.DoubleSide});
var mesh13 =new THREE.Mesh(geometry13,material12);
//scene.add(mesh13);
mesh13.position.set(0,2,10);

    var flor2 = new THREE.Group()
    flor2.add(mesh13);
    flor2.position.set(x, y, z);
    return flor2;
}