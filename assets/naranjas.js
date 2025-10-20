import * as THREE from "../js/three.module.js";
export default function naranja({x, y, z}) {
    
    
//naranja 
    var naranjaGeometria = new THREE.SphereGeometry(5,32,32);
    var naranjaTextura = new THREE.TextureLoader().load('/assets/naranja.jpg');
    var naranjaMaterial = new THREE.MeshBasicMaterial({map: naranjaTextura});
    var naranjaMalla = new THREE.Mesh(naranjaGeometria, naranjaMaterial);
    naranjaMalla.position.set(0,5,0);
 //   scene.add(naranjaMalla);


//hoja
    var hojaGeometria = new THREE.PlaneGeometry(3,6,32);
    var hojaTextura = new THREE.TextureLoader().load('/assets/hoja.jpg');
    var hojaMaterial = new THREE.MeshBasicMaterial({map: hojaTextura, side: THREE.DoubleSide, transparent: true});
    var hojaMalla = new THREE.Mesh(hojaGeometria, hojaMaterial);
    hojaMalla.position.set(1.5,8,2);
    hojaMalla.rotation.set(0,0.5,0);
 //   scene.add(hojaMalla);

//palo
    var paloGeometria = new THREE.CylinderGeometry(0.5,0.5,8,32);
    var paloTextura = new THREE.TextureLoader().load('/assets/palo.jpg');
    var paloMaterial = new THREE.MeshBasicMaterial({map: paloTextura, side: THREE.DoubleSide});
    var paloMalla = new THREE.Mesh(paloGeometria, paloMaterial);
    paloMalla.position.set(0,8,0);
//    scene.add(paloMalla);

       var naranja = new THREE.Group()
    naranja.add(naranjaMalla,hojaMalla,paloMalla);
    naranja.position.set(x, y, z);
    return naranja;
}