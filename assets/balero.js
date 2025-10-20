import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";
export default function balero({x, y, z}) {

///Balero parte medio

var geometry1 = new THREE.CylinderGeometry(1,1,2,10);
var textura1=new THREE.TextureLoader().load("assets/madera1.jpg");
      var material1 = new THREE.MeshLambertMaterial({map:textura1})
      var mesh1 = new THREE.Mesh(geometry1,material1);
//      scene.add(mesh1);

      mesh1.position.set(0,2.9,0);
////Madera superior
var geometry2 = new THREE.CylinderGeometry(0.7,1,0.2,10);
var textura2=new THREE.TextureLoader().load("assets/madera1.jpg");
      var material2 = new THREE.MeshBasicMaterial({map:textura2})
      var mesh2 = new THREE.Mesh(geometry2,material2);
  //    scene.add(mesh2);

      mesh2.position.set(0,4.2,0);

      var geometry3 = new THREE.CylinderGeometry(1,0.7,0.2,10);
      var textura3=new THREE.TextureLoader().load("assets/madera1.jpg");
      var material3 = new THREE.MeshBasicMaterial({map:textura3})
      var mesh3 = new THREE.Mesh(geometry3,material3);
    //  scene.add(mesh3);

      mesh3.position.set(0,1.6,0);
//////Colores de enmedio

var geometry4 = new THREE.CylinderGeometry(1,1,0.2,10);
      var material4 = new THREE.MeshBasicMaterial({
        color:0xFF500F,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh4 = new THREE.Mesh(geometry4,material4);
      //scene.add(mesh4);

      mesh4.position.set(0,4,0);

      var geometry5 = new THREE.CylinderGeometry(1,1,0.2,10);
      var material5 = new THREE.MeshBasicMaterial({
        color:0x028700,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh5 = new THREE.Mesh(geometry5,material5);
     // scene.add(mesh5);

      mesh5.position.set(0,1.8,0);

      //////palito

    var geometry6 = new THREE.CylinderGeometry(1,1,0.2,10);
    var textura6=new THREE.TextureLoader().load("assets/madera1.jpg");
      var material6 = new THREE.MeshBasicMaterial({map:textura6})
      var mesh6 = new THREE.Mesh(geometry6,material6);
      //scene.add(mesh6);
      mesh6.position.set(0,1,0);
      mesh6.scale.set(0.40, 0.40, 0.40);

       var geometry7 = new THREE.CylinderGeometry(0.5,0.5,1,10);
    var textura7=new THREE.TextureLoader().load("assets/madera1.jpg");
      var material7 = new THREE.MeshBasicMaterial({map:textura7})
      var mesh7 = new THREE.Mesh(geometry7,material7);
     // scene.add(mesh7);

      mesh7.position.set(0,1.2,0);
      mesh7.scale.set(0.40, 0.40, 0.40);

      var geometry8 = new THREE.CylinderGeometry(0.4,0.5,0.5,10);
    var textura8=new THREE.TextureLoader().load("assets/madera1.jpg");
      var material8 = new THREE.MeshBasicMaterial({map:textura8})
      var mesh8 = new THREE.Mesh(geometry8,material8);
     // scene.add(mesh8);

      mesh8.position.set(0,1.4,0);
      mesh8.scale.set(0.40, 0.40, 0.40);

var geometry9 = new THREE.CylinderGeometry(0.5,0.5,3.5,10);
    var textura9=new THREE.TextureLoader().load("assets/madera1.jpg");
      var material9 = new THREE.MeshBasicMaterial({map:textura9})
      var mesh9 = new THREE.Mesh(geometry9,material9);
     // scene.add(mesh9);

      mesh9.position.set(0,0.3,0);
      mesh9.scale.set(0.40, 0.40, 0.40);

      var geometry10 = new THREE.CylinderGeometry(0.5,0.4,0.5,10);
    var textura10=new THREE.TextureLoader().load("assets/madera1.jpg");
      var material10 = new THREE.MeshBasicMaterial({map:textura10})
      var mesh10 = new THREE.Mesh(geometry10,material10);
     // scene.add(mesh10);

      mesh10.position.set(0,-0.5,0);
      mesh10.scale.set(0.40, 0.40, 0.40);

         var balero = new THREE.Group()
    balero.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10);

    balero.position.set(x, y, z);
    return balero;
}