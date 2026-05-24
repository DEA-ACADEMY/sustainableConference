import { BookOpen, Boxes, ChartNoAxesColumnIncreasing, Compass, Handshake, Layers3, Network, Route, Scale, Sparkles, Target, UsersRound } from 'lucide-react';
import { useI18n } from '../i18n/useI18n.js';

const iconSet = [Target, Compass, Sparkles, Scale, Layers3, Network, BookOpen, Handshake, UsersRound, Route, Boxes, ChartNoAxesColumnIncreasing];

export function InstituteSections() {
  const { t } = useI18n();
  const groups = t('institute.groups');

  return (
    <section className="institute-sections">
      {groups.map((group, groupIndex) => (
        <article className="content-band" key={group.title}>
          <div className="content-band__header">
            <span>{String(groupIndex + 1).padStart(2, '0')}</span>
            <h2>{group.title}</h2>
            <p>{group.description}</p>
          </div>

          <div className={group.featured ? 'content-grid content-grid--featured' : 'content-grid'}>
            {group.items.map((item, index) => {
              const Icon = iconSet[(groupIndex + index) % iconSet.length];

              return (
                <div className="content-card" key={`${group.title}-${item}`}>
                  <Icon size={26} aria-hidden="true" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </section>
  );
}
