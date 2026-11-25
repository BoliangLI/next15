import Image from 'next/image';
import daily30 from './daily-30.png';

export default function ImageTestPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Image Optimization Test</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Image</h2>
        <Image
          src="https://picsum.photos/id/237/1280/800"
          alt="Responsive test image"
          width={640}
          height={400}
          quality={75}
          priority
          style={{ borderRadius: '8px' }}
        />
      </section>

      <section>
        <h2>Multiple Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Image
            src="https://picsum.photos/id/10/800/600"
            alt="Medium test image"
            width={320}
            height={240}
            quality={75}
            style={{ borderRadius: '8px' }}
          />
          <Image
            src="https://picsum.photos/id/20/800/600"
            alt="Small test image"
            width={320}
            height={240}
            quality={75}
            style={{ borderRadius: '8px' }}
          />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Local Images</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <h3>Public Path</h3>
            <Image
              src="/image-test/codex-start.png"
              alt="Codex start screen"
              width={408}
              height={167}
              style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div>
            <h3>Static Import</h3>
            <Image
              src={daily30}
              alt="Daily 30 playlist cover"
              style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
