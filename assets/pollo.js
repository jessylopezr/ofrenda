import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";
export default function pollo({x , y, z}) {

////Pollo centro
var geometry1 = new THREE.TorusGeometry(1,2,5,8);
      var material1 = new THREE.MeshBasicMaterial({
        color:0xD96004,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh1 = new THREE.Mesh(geometry1,material1);
      //scene.add(mesh1);

      mesh1.position.set(0,3,0);
      mesh1.rotation.set(1.57,0,0);
  ///plato
var geometry2 = new THREE.CylinderGeometry(4,2,0.2,15);
      var material2 = new THREE.MeshBasicMaterial({
        color:0x8BD904,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh2 = new THREE.Mesh(geometry2,material2);
      //scene.add(mesh2);

      mesh2.position.set(0,1,0);

      var geometry3 = new THREE.CylinderGeometry(3,2,0.2,10);
      var material3 = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh3 = new THREE.Mesh(geometry3,material3);
      //scene.add(mesh3);
      mesh3.position.set(0,0.9,0);

      ////Huesitos de patitas pollo izq

var geometry4 = new RoundedBoxGeometry(0.5,1.5,0.5,3,4);
var material4=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh4 = new THREE.Mesh (geometry4,material4);
mesh4.position.set(1.5,4.9,2.3);
//scene.add(mesh4);
mesh4.rotation.set(0,0,1.99);

var geometry5 = new RoundedBoxGeometry(1.2,1.6,1,3,4);
var material5=new THREE.MeshBasicMaterial({color: 0xE86807, side: THREE.DoubleSide});
var mesh5 = new THREE.Mesh (geometry5,material5);
mesh5.position.set(0.8,4.5,2.3);
//scene.add(mesh5);
mesh5.rotation.set(0,0,1.99);

var geometry6 = new THREE.SphereGeometry(0.33);
      var material6 = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh6 = new THREE.Mesh(geometry6,material6);
      //scene.add(mesh6);

      mesh6.position.set(2,5.5,2.3);

var geometry7 = new THREE.SphereGeometry(0.33);
      var material7 = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh7 = new THREE.Mesh(geometry7,material7);
      //scene.add(mesh7);

      mesh7.position.set(2.3,5,2.3);

////Huesitos de patitas pollo der

var geometry8 = new RoundedBoxGeometry(0.5,1.5,0.5,3,4);
var material8=new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh8 = new THREE.Mesh (geometry8,material8);
mesh8.position.set(1.5,4.9,-2.3);
//scene.add(mesh8);
mesh8.rotation.set(0,0,1.99);

var geometry9 = new RoundedBoxGeometry(1.2,1.6,1,3,4);
var material9=new THREE.MeshBasicMaterial({color: 0xE86807, side: THREE.DoubleSide});
var mesh9 = new THREE.Mesh (geometry9,material9);
mesh9.position.set(0.8,4.5,-2.3);
//scene.add(mesh9);
mesh9.rotation.set(0,0,1.99);

var geometry10 = new THREE.SphereGeometry(0.33);
      var material10 = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh10 = new THREE.Mesh(geometry10,material10);
      //scene.add(mesh10);

      mesh10.position.set(2,5.5,-2.3);

var geometry11 = new THREE.SphereGeometry(0.33);
      var material11 = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh11 = new THREE.Mesh(geometry11,material11);
      //scene.add(mesh11);

      mesh11.position.set(2.3,5,-2.3);

      //////patitas de abajo izq

      var geometry12 = new THREE.CylinderGeometry(0.2,0.3,2.5,10);
      var material12 = new THREE.MeshBasicMaterial({
        color:0xD94B02,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh12 = new THREE.Mesh(geometry12,material12);
      //scene.add(mesh12);

      mesh12.position.set(-1,1.5,2.05);
      mesh12.rotation.set(0,0,1.37);

var geometry13 = new THREE.SphereGeometry(0.39);
      var material13 = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh13 = new THREE.Mesh(geometry13,material13);
      //scene.add(mesh13);

      mesh13.position.set(-2.5,1.75,2.05);

      //////patitas de abajo der

var geometry14 = new THREE.CylinderGeometry(0.2,0.3,2.5,10);
      var material14 = new THREE.MeshBasicMaterial({
        color:0xD94B02,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh14 = new THREE.Mesh(geometry14,material14);
      //scene.add(mesh14);

      mesh14.position.set(-1,1.5,-2.05);
      mesh14.rotation.set(0,0,1.37);

var geometry15 = new THREE.SphereGeometry(0.39);
      var material15 = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh15 = new THREE.Mesh(geometry15,material15);
      //scene.add(mesh15);

      mesh15.position.set(-2.5,1.75,-2.05);

const pollo = new THREE.Group()
pollo.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15);
pollo.position.set(x, y, z);

return pollo;

}