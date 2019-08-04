
let section = new Entity();
section.addComponent(new GLTFShape("models/Section7.gltf"));
section.addComponent(new Transform({
  position: new Vector3(-256, 0, 0),
  rotation: Quaternion.Euler(0, 180, 0)
}));
engine.addEntity(section);
