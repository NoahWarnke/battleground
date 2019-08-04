
let section = new Entity();
section.addComponent(new GLTFShape("models/Section2.gltf"));
section.addComponent(new Transform({
  position: new Vector3(-256, 0, -128),
  rotation: Quaternion.Euler(0, 180, 0)
}));
engine.addEntity(section);
