import React, {Suspense} from 'react';
import { useRouter } from 'next/router';

const LoadingUI = () => {
  const router = useRouter();

  return (
    <section className="flex justify-center">
      <p>Loading...</p>
    </section>

  )
}

export default LoadingUI;