import { Fragment } from 'react';
import { Leva } from 'leva';
import { Canvas } from '@react-three/fiber';
import Scene from './components/scene/scene.component';

const App = () => {
  return (
    <Fragment>
      <Leva collapsed />
      <Canvas
        shadows
        camera={{
          fov: 60,
          near: 0.1,
          far: 200,
          position: [-3, 2, 6],
        }}
      >
        <Scene />
      </Canvas>
    </Fragment>
  );
};

export default App;
