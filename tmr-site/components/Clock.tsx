'use client';
import { useEffect, useState } from 'react';
import { site, stats } from '@/data/site';

function daysUntil(iso: string) {
  return Math.max(0, Math.ceil((new Date(iso).getTime() - Date.now()) / 86_400_000));
}

export default function Clock() {
  // Render a placeholder on the server, the real number on the client, so static export never disagrees with the browser.
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    setDays(daysUntil(site.nextDeadline.dueISO));
    const t = setInterval(() => setDays(daysUntil(site.nextDeadline.dueISO)), 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="clock">
      <div className="wrap">
        <div className="cell">
          <div className="lbl">Next regulation deadline</div>
          <div className="val">
            {days ?? '—'}<small>DAYS</small>
          </div>
          <div className="what">{site.nextDeadline.label} · {site.nextDeadline.dueText}</div>
        </div>
        {stats.map((s) => (
          <div className="cell" key={s.label}>
            <div className="lbl">{s.label}</div>
            <div className="val">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
