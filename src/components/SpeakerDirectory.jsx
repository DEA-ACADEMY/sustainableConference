import { Circle, MessageCircle, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { speakers } from '../data/speakers.js';
import { useI18n } from '../i18n/useI18n.js';

export function SpeakerDirectory() {
  const { language, t } = useI18n();
  const [query, setQuery] = useState('');
  const filteredSpeakers = speakers.filter((speaker) => {
    const name = language === 'en' ? speaker.nameEn : speaker.name;
    const role = language === 'en' ? speaker.roleEn : speaker.role;
    const category = language === 'en' ? speaker.categoryEn : speaker.category;

    return name.includes(query) || role.includes(query) || category.includes(query);
  });

  return (
    <section className="speaker-directory">
      <div className="speaker-tools">
        <label className="speaker-search">
          <input placeholder={t('speakers.search')} type="search" value={query} onChange={(event) => setQuery(event.target.value)} />
          <Search size={24} aria-hidden="true" />
        </label>
      </div>

      <div className="speaker-grid">
        {filteredSpeakers.map((speaker) => (
          <Link className="directory-card" to={`/speakers/${speaker.slug}`} key={speaker.slug}>
            <div className="directory-card__portrait" style={speaker.image ? { '--speaker-image': `url("${speaker.image}")` } : undefined} aria-hidden="true" />
            <h2>{language === 'en' ? speaker.nameEn : speaker.name}</h2>
            <div className="directory-card__socials">
              <Circle size={19} aria-hidden="true" />
              <MessageCircle size={19} aria-hidden="true" />
              <X size={19} aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
