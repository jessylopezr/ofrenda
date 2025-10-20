import * as THREE from "../js/three.module.js";
export default function lapida1({x , y, z}) {

    
//lapida
    var textura = new THREE.TextureLoader().load('/assets/rip.png');
    var lapida = new THREE.BoxGeometry(10,15,1);
    var material = new THREE.MeshBasicMaterial({map: textura});
    var lapidaMalla = new THREE.Mesh(lapida, material);
    lapidaMalla.position.set(0,7,0);
    //scene.add(lapidaMalla);

    var textura2 = new THREE.TextureLoader().load('/assets/piedra.jpg');
    var lapida2 = new THREE.CylinderGeometry(1.5,1.5,10,32);
    var material2 = new THREE.MeshBasicMaterial({map: textura2, side: THREE.DoubleSide});
    var lapida02 = new THREE.Mesh(lapida2, material2);
    lapida02.position.set(0,0,0);
    lapida02.rotation.set(1.57,0,4.7);
    //scene.add(lapida02);

    var piso = new THREE.BoxGeometry(9.2,20,2);
    var textura3 = new THREE.TextureLoader().load('/assets/cruz.jpg');
    var material3 = new THREE.MeshBasicMaterial({map: textura3, side: THREE.DoubleSide});
    var pisoMalla = new THREE.Mesh(piso, material3);
    pisoMalla.rotation.set(1.57,0,0);
    pisoMalla.position.set(0,-1,8);
    //scene.add(pisoMalla);

const lapida1 = new THREE.Group()
lapida1.add(lapidaMalla,lapida02,pisoMalla);
lapida1.position.set(x, y, z);

return lapida1;


}