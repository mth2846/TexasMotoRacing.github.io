import { milestones } from '@/data/site';

export default function Calendar() {
  return (
    <section id="calendar" className="alt">
      <div className="wrap">
        <p className="eyebrow">Fixed by regulation</p>
        <h2>Every deadline, already set</h2>
        <p className="lede">
          None of these dates are ours to move. They come straight from the MS2627 competition regulations,
          and missing one carries a penalty.
        </p>
        <div className="tablewrap">
          <table>
            <thead><tr><th>Window</th><th>Deliverable</th><th>Article</th></tr></thead>
            <tbody>
              {milestones.map((m) => (
                <tr key={m.article + m.what} className={m.current ? 'now' : undefined}>
                  <td className="when">{m.when}</td>
                  <td>{m.what}</td>
                  <td className="art">{m.article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
