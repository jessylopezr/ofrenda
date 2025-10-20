import * as THREE from "../js/three.module.js";
export default function vela({x , y, z}, ) {

///luz
var pl01 = new THREE.PointLight(0xFA8820,2,20,0.8);
pl01.position.set(0,18,0);
//scene.add(pl01);

var pl02 = new THREE.PointLight(0xFAE81E,2,20,0.8);
pl02.position.set(0,18,0);
//scene.add(pl02);

/////vela
var geometry1 = new THREE.CylinderGeometry(0.5,0.5,5,10);
      var material1 = new THREE.MeshBasicMaterial({
        color:0xFFFBF0,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh1 = new THREE.Mesh(geometry1,material1);
    //scene.add(mesh1);
mesh1.castShadow = true;
      mesh1.position.set(0,4,0);
/////vasito
      var geometry2 = new THREE.SphereGeometry(1,8,8,0,Math.PI*2,1,Math.PI/2);
      var material2 = new THREE.MeshBasicMaterial({
        color:0xD1AA0D,side:THREE.DoubleSide,//wireframe: true
      })
      var mesh2 = new THREE.Mesh(geometry2,material2);
    //scene.add(mesh2);
mesh2.castShadow = true;
      mesh2.position.set(0,2.3,0);
 /////mecha
var geometry3 = new THREE.CylinderGeometry(0.1,0.1,0.4,10);
      var material3 = new THREE.MeshBasicMaterial({
        color:0x000000,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh3 = new THREE.Mesh(geometry3,material3);
    //scene.add(mesh3);
mesh3.castShadow = true;
      mesh3.position.set(0,6.75,0);     
/////base2
var geometry6 = new THREE.CylinderGeometry(0.5,0.5,1,10);
      var material6 = new THREE.MeshBasicMaterial({
        color:0xD1AA0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh6 = new THREE.Mesh(geometry6,material6);
      //scene.add(mesh6);
mesh6.castShadow = true;
      mesh6.position.set(0,1,0);
      
      /////base1
var geometry4 = new THREE.CylinderGeometry(0.5,0.9,0.4,10);
      var material4 = new THREE.MeshBasicMaterial({
        color:0xD1AA0D,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh4 = new THREE.Mesh(geometry4,material4);
      //scene.add(mesh4);
mesh4.castShadow = true;
      mesh4.position.set(0,0.3,0);
      ///////llama
      var geometry5 = new THREE.OctahedronGeometry(0.3,0);
      var material5 = new THREE.MeshBasicMaterial({
        color:0xFF7300,side:THREE.DoubleSide//,wireframe: true
      })
    var mesh5 = new THREE.Mesh(geometry5,material5);
    //scene.add(mesh5);
    mesh5.castShadow = true;
    mesh5.position.set(0,7,0); 


const vela = new THREE.Group();
vela.add(pl01, pl02, mesh1,mesh2,mesh3,mesh4,mesh5,mesh6);
vela.position.set(x, y, z);
 
return vela;

}