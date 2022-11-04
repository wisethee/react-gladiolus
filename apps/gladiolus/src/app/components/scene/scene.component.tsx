import { OrbitControls } from '@react-three/drei';
import { Fragment, Suspense } from 'react';
import Tablet from '../tablet/tablet.component';

const Scene = () => {
  return (
    <Fragment>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />

      <Suspense>
        <Tablet />
      </Suspense>
    </Fragment>
  );
};

export default Scene;
