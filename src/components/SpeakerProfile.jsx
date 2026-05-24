import { Circle, MessageCircle, Trophy, UserRound, X } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { getSpeakerBySlug } from '../data/speakers.js';
import { useI18n } from '../i18n/useI18n.js';

export function SpeakerProfile() {
  const { speakerId } = useParams();
  const { language, t } = useI18n();
  const speaker = getSpeakerBySlug(speakerId);
  const profile = {
    name: language === 'en' ? speaker.nameEn : speaker.name,
    role: language === 'en' ? speaker.roleEn : speaker.role,
    category: language === 'en' ? speaker.categoryEn : speaker.category,
    bio: language === 'en' ? speaker.bioEn : speaker.bio,
    lecture: language === 'en' ? speaker.lectureEn : speaker.lecture,
  };

  return (
    <section className="speaker-profile">
      <article className="profile-card">
        <div className="profile-card__portrait" style={{ '--speaker-image': `url(${speaker.image})` }} aria-hidden="true" />
        <div className="profile-card__copy">
          <span>{profile.category}</span>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <div className="profile-socials">
            <Circle size={28} aria-hidden="true" />
            <MessageCircle size={28} aria-hidden="true" />
            <X size={28} aria-hidden="true" />
          </div>
        </div>
      </article>

      <div className="profile-detail">
        <div>
          <UserRound size={48} aria-hidden="true" />
          <h2>{t('speakers.cvTitle')}</h2>
        </div>
        <p>{profile.bio}</p>
      </div>

      <div className="profile-detail">
        <div>
          <Trophy size={48} aria-hidden="true" />
          <h2>{t('speakers.lectureTitle')}</h2>
        </div>
        <div className="profile-copy">
          <p>{profile.lecture || t('speakers.lecturePending')}</p>
          <ul>
            {(language === 'en' ? speaker.highlightsEn : speaker.highlights).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
