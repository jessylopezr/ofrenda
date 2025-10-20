import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";
export default function lip({x , y, z}) {

 var geometry1 = new THREE.BoxGeometry(8,1,4,2,12,20);
      var material1 = new THREE.MeshBasicMaterial({
        color:0x857261,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh1 = new THREE.Mesh(geometry1,material1);
//      scene.add(mesh1);

      mesh1.position.set(0,0,0);

      var geometry2 = new THREE.BoxGeometry(6,1,4,2,12,20);
      var material2 = new THREE.MeshBasicMaterial({
        color:0x7D7269,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh2 = new THREE.Mesh(geometry2,material2);
 //     scene.add(mesh2);

      mesh2.position.set(0,1,0);
/////////
var geometry3 = new RoundedBoxGeometry(5.5,6,2,3,4);
var material3=new THREE.MeshBasicMaterial({color: 0xD4CECB, side: THREE.DoubleSide});
var mesh3 = new THREE.Mesh (geometry3,material3);
mesh3.position.set(0,3.5,0);
//scene.add(mesh3);

 var geometry4 = new THREE.BoxGeometry(6,1,6,2,12,20);
      var material4 = new THREE.MeshBasicMaterial({
        color:0x7D7269,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh4 = new THREE.Mesh(geometry4,material4);
      //scene.add(mesh4);

      mesh4.position.set(0,0,5);

/////cruz

var geometry5 = new THREE.CylinderGeometry(1,1,10,20);
var material5 = new THREE.MeshBasicMaterial({color:0x453533,side:THREE.DoubleSide});
var mesh5 =new THREE.Mesh(geometry5,material5);
//scene.add(mesh5);
mesh5.position.set(0,7.9,0);

mesh5.scale.set(0.33, 0.33, 0.33);

var geometry6 = new THREE.CylinderGeometry(1,1,8,20);
var material6 = new THREE.MeshBasicMaterial({color:0x453533,side:THREE.DoubleSide});
var mesh6 =new THREE.Mesh(geometry6,material6);
//scene.add(mesh6);
mesh6.position.set(0,8.5,0);
mesh6.rotation.set(0,0,1.57)

mesh6.scale.set(0.33, 0.33, 0.33);


var geometry7 = new THREE.TorusGeometry(1.5,.2,10,20);
var material7 = new THREE.MeshBasicMaterial({color:0xB09E9E,side:THREE.DoubleSide});
var mesh7 =new THREE.Mesh(geometry7,material7);
//scene.add(mesh7);
mesh7.position.set(0,8.5,0);
mesh7.rotation.set(2,1,0)

mesh7.scale.set(0.33, 0.33, 0.33);

var geometry8 = new THREE.TorusGeometry(1.5,.2,10,20);
var material8 = new THREE.MeshBasicMaterial({color:0xB09E9E,side:THREE.DoubleSide});
var mesh8 =new THREE.Mesh(geometry8,material8);
//scene.add(mesh8);
mesh8.position.set(0,8.5,0);
mesh8.rotation.set(-2,1,0)

mesh8.scale.set(0.33, 0.33, 0.33);

const lip = new THREE.Group()
lip.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8);
lip.position.set(x, y, z);

return lip;


}