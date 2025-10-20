import * as THREE from "../js/three.module.js";
export default function pan({x , y, z}) {

var geometry1 = new THREE.SphereGeometry(2,8,8,0,Math.PI*2,0,Math.PI/2);
      var material1 = new THREE.MeshBasicMaterial({
        color:0xF5931D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh1 = new THREE.Mesh(geometry1,material1);
      //scene.add(mesh1);

      mesh1.position.set(0,1.1,0);
      ///////////////////plato
      var geometry2 = new THREE.CylinderGeometry(3,2,0.2,15);
      var material2 = new THREE.MeshBasicMaterial({
        color:0xFFFF44,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh2 = new THREE.Mesh(geometry2,material2);
      //scene.add(mesh2);

      mesh2.position.set(0,1,0);

      var geometry3 = new THREE.CylinderGeometry(2,2,0.2,10);
      var material3 = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh3 = new THREE.Mesh(geometry3,material3);
      //scene.add(mesh3);

      mesh3.position.set(0,0.9,0);
////////////////////circulos del pan
var geometry4 = new THREE.SphereGeometry(0.5);
      var material4 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh4 = new THREE.Mesh(geometry4,material4);
      //scene.add(mesh4);

      mesh4.position.set(0,3,0);
/////////////////////////////////////
      var geometry5 = new THREE.SphereGeometry(0.35);
      var material5 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh5 = new THREE.Mesh(geometry5,material5);
      //scene.add(mesh5);

      mesh5.position.set(1.90,1.4,0);

      var geometry6 = new THREE.SphereGeometry(0.4);
      var material6 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh6 = new THREE.Mesh(geometry6,material6);
      //scene.add(mesh6);

      mesh6.position.set(1.10,2.5,0);
      /////////////////////////////

      var geometry7 = new THREE.SphereGeometry(0.35);
      var material7 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh7 = new THREE.Mesh(geometry7,material7);
     // scene.add(mesh7);

      mesh7.position.set(-1.90,1.4,0);

      var geometry8 = new THREE.SphereGeometry(0.4);
      var material8 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh8 = new THREE.Mesh(geometry8,material8);
      //scene.add(mesh8);

      mesh8.position.set(-1.10,2.5,0);

      /////////////////////////////////

var geometry9 = new THREE.SphereGeometry(0.35);
      var material9 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh9 = new THREE.Mesh(geometry9,material9);
     // scene.add(mesh9);

      mesh9.position.set(0,1.4,-1.90);

      var geometry10 = new THREE.SphereGeometry(0.4);
      var material10 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh10 = new THREE.Mesh(geometry10,material10);
      //scene.add(mesh10);

      mesh10.position.set(0,2.5,-1.10);
      //////////////////////////////
      var geometry11 = new THREE.SphereGeometry(0.35);
      var material11 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh11 = new THREE.Mesh(geometry11,material11);
      //scene.add(mesh11);

      mesh11.position.set(0,1.4,1.90);

      var geometry12 = new THREE.SphereGeometry(0.4);
      var material12 = new THREE.MeshBasicMaterial({
        color:0x8C4E0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh12 = new THREE.Mesh(geometry12,material12);
      //scene.add(mesh12);

      mesh12.position.set(0,2.5,1.10);

      const pan = new THREE.Group()
      pan.add(mesh1, mesh2, mesh3,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12);
      pan.position.set(x, y, z);
      
      return pan;
      
      }