
import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";
export default function calaca({x , y, z}) {

          ///////////////////////////////Cabeza
var geometry1 = new THREE.SphereGeometry(2);
var material1 = new THREE.MeshBasicMaterial({
color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
})
var mesh1 = new THREE.Mesh(geometry1,material1);
 //scene.add(mesh1);

mesh1.position.set(0,1.1,0);
////////////////////////boca1

var geometry2 = new RoundedBoxGeometry(2.5,2,2,3,4);
var material2=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh2 = new THREE.Mesh (geometry2,material2);
mesh2.position.set(0,-0.3,1.3);
//scene.add(mesh2);

////////////////////////boca2

var geometry3 = new RoundedBoxGeometry(1.5,1,1,3,4);
var material3=new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
var mesh3 = new THREE.Mesh (geometry3,material3);
mesh3.position.set(0,-0.3,1.9);
//scene.add(mesh3);

////////////////////////ojo

var geometry4 = new RoundedBoxGeometry(1,1.5,1,3,4);
var material4=new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
var mesh4 = new THREE.Mesh (geometry4,material4);
mesh4.position.set(-0.7,2,1.6);
//scene.add(mesh4);

var geometry5 = new RoundedBoxGeometry(1,1.5,1,3,4);
var material5=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh5 = new THREE.Mesh (geometry5,material5);
mesh5.position.set(-0.7,2,1.9);
mesh5.scale.set(0.5, 0.5, 0.5);
//scene.add(mesh5);

//////////////////////////OJO2

var geometry6 = new RoundedBoxGeometry(1,1.5,1,3,4);
var material6=new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
var mesh6 = new THREE.Mesh (geometry6,material6);
mesh6.position.set(0.7,2,1.6);
//scene.add(mesh6);

var geometry7 = new RoundedBoxGeometry(1,1.5,1,3,4);
var material7=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh7 = new THREE.Mesh (geometry7,material7);
mesh7.position.set(0.7,2,1.9);
mesh7.scale.set(0.5, 0.5, 0.5);
//scene.add(mesh7);

//////Nariz

var geometry8 = new THREE.OctahedronGeometry(0.5,0);
      var material8 = new THREE.MeshBasicMaterial({
        color:0x000000,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh8 = new THREE.Mesh(geometry8,material8);
     // scene.add(mesh8);
mesh8.position.set(0,1,1.9);

//////Dientes

var geometry9 = new RoundedBoxGeometry(1,1.5,1,3,4);
var material9=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh9 = new THREE.Mesh (geometry9,material9);
mesh9.position.set(0.4,-0.1,2.35);
mesh9.scale.set(0.3, 0.3, 0.3);
//scene.add(mesh9);

var geometry10 = new RoundedBoxGeometry(1,1.5,1,3,4);
var material10=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh10 = new THREE.Mesh (geometry10,material10);
mesh10.position.set(-0.4,-0.1,2.35);
mesh10.scale.set(0.3, 0.3, 0.3);
//scene.add(mesh10);

var geometry11 = new RoundedBoxGeometry(1,1.5,1,3,4);
var material11=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh11 = new THREE.Mesh (geometry11,material11);
mesh11.position.set(-0.15,-0.4,2.35);
mesh11.scale.set(0.3, 0.3, 0.3);
//scene.add(mesh11);

var geometry12 = new RoundedBoxGeometry(1,1.5,1,3,4);
var material12=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh12 = new THREE.Mesh (geometry12,material12);
mesh12.position.set(0.15,-0.4,2.35);
mesh12.scale.set(0.3, 0.3, 0.3);
//scene.add(mesh12);

const calaca = new THREE.Group()
calaca.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12);
calaca.position.set(x, y, z);

return calaca;




}