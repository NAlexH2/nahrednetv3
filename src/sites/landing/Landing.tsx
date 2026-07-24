import { Fragment } from "react";
import s from "./Landing.module.css";
import Sailboat from "./Sailboat";

const DESTINATIONS = [
  {
    href: "https://alex.underway.sh",
    title: "Alex Harris",
    sub: "Career & Bio",
  },
  {
    href: "https://q.underway.sh",
    title: "About Querium",
    sub: "Q",
  },
];

export const Landing = () => {
  return (
    <main className={s.page}>
      <div className={s.shipLayer}>
        <Sailboat className={s.ship} />
      </div>
      <div className={s.scrim} />

      <div className={s.wordmark}>underway.sh</div>

      <nav className={s.links} aria-label="Sites">
        {DESTINATIONS.map((d, i) => (
          <Fragment key={d.href}>
            {i > 0 && <span className={s.divider} aria-hidden="true" />}
            <a className={s.link} href={d.href}>
              <span className={s.linkMain}>{d.title}</span>
              <span className={s.linkSub}>{d.sub}</span>
              <span className={s.rule} aria-hidden="true" />
            </a>
          </Fragment>
        ))}
      </nav>

      <div className={s.footer}>under way &middot; making way</div>
    </main>
  );
};

export default Landing;
