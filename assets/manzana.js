import * as THREE from "../js/three.module.js";
export default function manzana({x , y, z}) {

var geometry1 = new THREE.TorusGeometry(1,2,5,8);
      var material1 = new THREE.MeshBasicMaterial({
        color:0xF21111,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh1 = new THREE.Mesh(geometry1,material1);
      //scene.add(mesh1);

      mesh1.position.set(0,1,0);
      mesh1.rotation.set(1.57,0,0);

      var geometry2 = new THREE.CylinderGeometry(0.4,0.24,2,10);
      var material2 = new THREE.MeshBasicMaterial({
        color:0xD94B02,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh2 = new THREE.Mesh(geometry2,material2);
      //scene.add(mesh2);

      mesh2.position.set(0,3.3,0);

var geometry3 = new THREE.ConeGeometry(0.5,2,8,8);
      var material3 = new THREE.MeshBasicMaterial({
        color:0x00B006,side:THREE.DoubleSide//,wireframe: true
      })
      var mesh3 = new THREE.Mesh(geometry3,material3);
      //scene.add(mesh3);

      mesh3.position.set(0,4,-1);
      mesh3.rotation.set(2.22,0,0);
    
      
            const manzana = new THREE.Group()
            manzana.add(mesh1, mesh2, mesh3);
            manzana.position.set(x, y, z);
            
            return manzana;
            
    
    }