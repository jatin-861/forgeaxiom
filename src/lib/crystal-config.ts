export const CRYSTAL_CONFIG = {
  camera: { position: [0, 0, 6], fov: 45 },
  material: {
    samples: { mobile: 4, desktop: 8 },
    thickness: 2.5,
    chromaticAberration: 1.2,
    anisotropy: 0.5,
    distortion: 0.3,
    distortionScale: 0.5,
    transmission: 1.0,
    roughness: 0.02,
    ior: 1.8,
    color: "#2e1065",
    attenuationColor: "#f472b6"
  },
  bloom: {
    intensity: 1.5,
    threshold: 1.1,
    radius: 0.4
  }
};
