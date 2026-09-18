import Image from 'next/image';
import { marks } from '@/data/site';

export default function Identity() {
  return (
    <section id="identity">
      <div className="wrap">
        <p className="eyebrow">Identity</p>
        <h2>One team, three marks</h2>
        <p className="lede">
          The crest for anything with a signature on it. The number board for the bike. The speed mark for
          everything a student would actually wear.
        </p>
        <div className="kit">
          {marks.map((m) => (
            <figure key={m.src}>
              <Image src={m.src} alt={m.alt} width={700} height={700} />
              <figcaption>{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
