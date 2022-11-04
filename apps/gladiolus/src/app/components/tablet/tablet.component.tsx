import { useGLTF } from '@react-three/drei';

export const Tablet = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials }: { nodes: any; materials: any } = useGLTF(
    '../../../assets/gltf/tablet.glb'
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior.geometry}
        material={materials.interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.edges.geometry}
        material={materials.frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back.geometry}
        material={materials.frame}
      />
    </group>
  );
};

useGLTF.preload('../../../assets/gltf/tablet.glb');

export default Tablet;
