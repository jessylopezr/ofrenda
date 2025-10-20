import * as THREE from "../js/three.module.js";
export default function pozole({x , y, z}) {
    
//Pozole
    var cilindro = new THREE.CylinderGeometry(10,10,8,32);
    var textura2=new THREE.TextureLoader().load("assets/plato (1).jpg");
    var material2=new THREE.MeshLambertMaterial({map:textura2});
    var mesh2 = new THREE.Mesh(cilindro,material2);
    //scene.add(mesh2);
    mesh2.position.y=4;
    mesh2.castShadow = true;

    var cilindro2 = new THREE.CylinderGeometry(9,9,1,32);
    var textura3=new THREE.TextureLoader().load("assets/sopa2.jpg");
    var material3=new THREE.MeshLambertMaterial({map:textura3});
    var mesh3 = new THREE.Mesh(cilindro2,material3);
    //scene.add(mesh3);
    mesh3.position.y=7.6;
    mesh3.castShadow = true;

    const pozole1 = new THREE.Group();
    pozole1.add(mesh2, mesh3);
    pozole1.position.set(x, y, z);

    return pozole1;

    }