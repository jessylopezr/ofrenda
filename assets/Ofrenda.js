import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";


export default function jarron({x, y, z}) {
//Jarro jiji 
const material = new THREE.MeshBasicMaterial({
      color: 0x8b5a2b,
    });

    // Parte inferior del jarro 
    const base = new THREE.SphereGeometry(2);
    const base1 = new THREE.Mesh(base, material);
    base1.castShadow = true;
    base1.position.set(0,2,0)
    //scene.add(base1);

    // Cuello del jarro
    const cuello = new THREE.CylinderGeometry(1, 1.5, 2, 30);
    const cuello1 = new THREE.Mesh(cuello, material);
    cuello1.castShadow = true;
    cuello1.position.y = 4;
    //scene.add(cuello1);

    
    // Borde
    const borde = new THREE.TorusGeometry(1, 0.3, 16, 50);
    const borde1 = new THREE.Mesh(borde, material);
    borde1.castShadow = true;
    borde1.rotation.set(1.57,0,0)
    borde1.position.set(0,5.2,0)
    //scene.add(borde1);

    // agarradera
    const agarradera = new THREE.TorusGeometry(1, 0.3, 16, 50);
    const agarradera1 = new THREE.Mesh(agarradera, material);
    agarradera1.castShadow = true;
    agarradera1.rotation.set(0,0.785,0)
    agarradera1.position.set(1,2,-2)
    //scene.add(agarradera1);


    
//Flor
//Colores
var material02=new THREE.MeshLambertMaterial({color: 0xFF370F, side: THREE.DoubleSide});
var material03=new THREE.MeshLambertMaterial({color: 0xE68E00, side: THREE.DoubleSide});
var material1=new THREE.MeshLambertMaterial({color: 0x067009, side: THREE.DoubleSide});


//inicia la flor
var geometry02 = new RoundedBoxGeometry(2,8,2,15,0.8);
var mesh02 = new THREE.Mesh (geometry02,material03);
mesh02.position.set(0,0,0);
//scene.add(mesh02);

var mesh03 = new THREE.Mesh (geometry02,material02);
mesh03.position.set(0,0,0);
mesh03.rotation.set(0,0,0.785)
//scene.add(mesh03);

var mesh04 = new THREE.Mesh (geometry02,material03);
mesh04.position.set(0,0,0);
mesh04.rotation.set(0,0,1.57)
//scene.add(mesh04);


var mesh05 = new THREE.Mesh (geometry02,material02);
mesh05.position.set(0,0,0);
mesh05.rotation.set(0,0,2.355)
//scene.add(mesh05);

//Flor de cempasuchill

var copo1 = new THREE.Group();
    copo1.add(mesh02, mesh03, mesh04, mesh05);
    //copo1.position.set(0,5,0)
    //scene.add(copo1);
    copo1.rotation.set(0,0,0)

    var copo2 = copo1.clone();
    //scene.add(copo2);
    //copo2.position.set(0,5,0)
    copo2.rotation.set(0,0.785,0)

    var copo3 = copo1.clone();
    //scene.add(copo3);
    //copo3.position.set(0,5,0)
    copo3.rotation.set(0,1.57,0)

    var copo4 = copo1.clone();
    //scene.add(copo4);
    //copo4.position.set(0,5,0)
    copo4.rotation.set(0,2.355,0)
    
    //Tallo
    const tallo = new THREE.CylinderGeometry(.2, .2, 5, 30);
    const tallo1 = new THREE.Mesh(tallo, material1);
    tallo1.castShadow = true;
    tallo1.position.set(-.6,6,0)
    //scene.add(tallo1);
    tallo1.rotation.set(0,0,-2.7)

//FIGURAS COMPLETAS 

    var FLOR = new THREE.Group()
    FLOR.add(copo1, copo2, copo3, copo4);
    FLOR.position.set(-1.5,7.5,0)
    //scene.add(FLOR);
    FLOR.scale.set(.3, .3, .3); 
    FLOR.castShadow=true;

    const jarron = new THREE.Group();
    jarron.add(base1, cuello1, borde1, agarradera1, tallo1, FLOR);
    jarron.position.set(x, y, z);
    jarron.scale.set(0.5, 0.5, 0.5);
    //scene.add(jarron);

    return jarron;

    }
