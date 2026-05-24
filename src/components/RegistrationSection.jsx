import { CalendarDays, Globe2, Mail, MapPin, Phone, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n.js';

const icons = [UserRound, UserRound, CalendarDays, UserRound, Phone, Mail, MapPin, Globe2, UserRound, Globe2];

export function RegistrationSection() {
  const { t } = useI18n();
  const fields = t('registration.fields');

  return (
    <section className="registration-section" id="registration">
      <form className="registration-form">
        <div className="registration-form__header">
          <h2>{t('registration.title')}</h2>
          <p>{t('registration.subtitle')}</p>
        </div>

        <div className="registration-form__grid">
          {fields.map((field, index) => {
            const Icon = icons[index] || UserRound;

            return (
              <label className={field.type === 'textarea' ? 'field field--wide' : 'field'} key={field.name}>
                <span>{field.label}</span>
                {field.type === 'radio' ? (
                  <span className="choice-row">
                    {field.options.map((option) => (
                      <label key={option}>
                        <input name={field.name} type="radio" value={option} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </span>
                ) : field.type === 'select' ? (
                  <span className="field__control">
                    <select name={field.name}>
                      {field.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                ) : field.type === 'textarea' ? (
                  <span className="field__control field__control--textarea">
                    <textarea name={field.name} />
                    <Icon size={18} aria-hidden="true" />
                  </span>
                ) : (
                  <span className="field__control">
                    <input name={field.name} type={field.type} />
                    <Icon size={18} aria-hidden="true" />
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </form>

      <article className="impact-card">
        <h2>{t('impact.title')}</h2>
        <p>{t('impact.subtitle')}</p>
        <Link className="button button--primary" to="/registration">
          {t('impact.action')}
        </Link>
      </article>
    </section>
  );
}
