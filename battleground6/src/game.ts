
let section = new Entity();
section.addComponent(new GLTFShape("models/Section6.gltf"));
section.addComponent(new Transform({
  position: new Vector3(-384, 0, 0),
  rotation: Quaternion.Euler(0, 180, 0)
}));
engine.addEntity(section);
