import { specs, site } from '@/data/site';

export default function Machine() {
  return (
    <section id="machine">
      <div className="wrap">
        <p className="eyebrow">The machine</p>
        <h2>MotoStudent eFuel · No. {site.bikeNumber}</h2>
        <p className="lede">
          We compete in the combustion category. The organiser leases each team a four-stroke competition
          engine and supplies slicks; everything around it — frame, swingarm, suspension, bodywork, wiring,
          cooling — is ours to design and build.
        </p>
        <dl className="spec">
          {specs.map((s) => (
            <div key={s.k}><dt>{s.k}</dt><dd>{s.v}</dd></div>
          ))}
        </dl>
        <p className="muted" style={{ fontSize: 15, marginTop: 22 }}>
          A single-track vehicle is a different problem from a car: the engine is a stressed structural member
          of the frame, stability depends on steering geometry and gyroscopic effects, and the rider is an
          actively repositioned fraction of total system mass.
        </p>
      </div>
    </section>
  );
}
