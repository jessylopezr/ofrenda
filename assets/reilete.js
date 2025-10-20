import * as THREE from "../js/three.module.js";
export default function reilete({x , y, z}) {

    
//reiilete
    var textura = new THREE.TextureLoader().load('/assets/madera.jpg');
    var palito = new THREE.CylinderGeometry(1,1,49,32);
    var material = new THREE.MeshBasicMaterial({map: textura});
    var palo = new THREE.Mesh(palito, material);
    palo.position.set(0,7,0);
    //scene.add(palo);
//platiquito rojo
    var textura2 = new THREE.TextureLoader().load('/assets/rojo.jpg');
    var plastico = new THREE.ConeGeometry(5,10,66,2);
    var material2 = new THREE.MeshBasicMaterial({map: textura2});
    var plasticored = new THREE.Mesh(plastico, material2);
    plasticored.position.set(0,37,0.5);
    plasticored.rotation.set(3.14,0,0);
    //scene.add(plasticored);
//plastiquito azul
    var textura3 = new THREE.TextureLoader().load('/assets/azul.jpg');
    var plastico2 = new THREE.ConeGeometry(5,10,66,2);
    var material3 = new THREE.MeshBasicMaterial({map: textura3});
    var plasticoblue = new THREE.Mesh(plastico2, material3);
    plasticoblue.position.set(0,27,0.5);
    //scene.add(plasticoblue);
//plastiquito verde
    var textura4 = new THREE.TextureLoader().load('/assets/verde.jpg');
    var plastico3 = new THREE.ConeGeometry(5,10,66,2);
    var material4 = new THREE.MeshBasicMaterial({map: textura4});
    var plasticogreen = new THREE.Mesh(plastico3, material4);
    plasticogreen.position.set(0,32,-3.5);
    plasticogreen.rotation.set(8,0,0);
    //scene.add(plasticogreen);
//plastiquito amarillo
    var textura5 = new THREE.TextureLoader().load('/assets/amarillo.jpg');
    var plastico4 = new THREE.ConeGeometry(5,10,66,2);
    var material5 = new THREE.MeshBasicMaterial({map: textura5});
    var plasticoamarillo = new THREE.Mesh(plastico4, material5);
    plasticoamarillo.position.set(0,32,4.5);
    plasticoamarillo.rotation.set(-8,0,0);
    //scene.add(plasticoamarillo);

const reilete = new THREE.Group()
reilete.add(palo,plasticored, plasticoblue,plasticogreen,plasticoamarillo);
reilete.position.set(x, y, z);

return reilete;

}