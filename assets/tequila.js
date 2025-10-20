import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";
export default function tequila({x, y, z}) {


var geometry1 = new RoundedBoxGeometry(5.5,6,3,3,4);
var material1=new THREE.MeshBasicMaterial({color: 0x590B06, side: THREE.DoubleSide});
var mesh1 = new THREE.Mesh (geometry1,material1);
mesh1.position.set(0,3.2,0);
//scene.add(mesh1);

var geometry2 = new THREE.BoxGeometry(3,1,1,4,12,20);
      var material2 = new THREE.MeshBasicMaterial({
        color:0xEEFF33,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh2 = new THREE.Mesh(geometry2,material2);
  //    scene.add(mesh2);

      mesh2.position.set(0,6.5,0);

////////Etiqueta

      var geometry3 = new THREE.BoxGeometry(3,3,3.25,4,12,20);
      var textura3=new THREE.TextureLoader().load("assets/don.jpg");
      var material3 = new THREE.MeshLambertMaterial({map:textura3})
      var mesh3 = new THREE.Mesh(geometry3,material3);
    //  scene.add(mesh3);

      mesh3.position.set(0,3.5,0);

      //////////Tapa

      var geometry4 = new THREE.CylinderGeometry(0.5,0.7,1.5,10);
      var material4 = new THREE.MeshBasicMaterial({
        color:0x590B06,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh4 = new THREE.Mesh(geometry4,material4);
      //scene.add(mesh4);

      mesh4.position.set(0,7.75,0);

      var geometry5 = new THREE.CylinderGeometry(0.55,0.2,1.5,10);
      var material5 = new THREE.MeshBasicMaterial({
        color:0xEEFF33,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh5 = new THREE.Mesh(geometry5,material5);
      //scene.add(mesh5);

      mesh5.position.set(0,8,0);

      var geometry6 = new THREE.TorusGeometry(1,2,5,8);
      var material6 = new THREE.MeshBasicMaterial({
        color:0x7C8A03,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh6 = new THREE.Mesh(geometry6,material6);
      //scene.add(mesh6);

      mesh6.position.set(0,9.4,0);
      mesh6.rotation.set(1.57,0,0);
      mesh6.scale.set(0.33, 0.33, 0.33);

   var tequila = new THREE.Group()
    tequila.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6);

    tequila.position.set(x, y, z);
    return tequila;
}