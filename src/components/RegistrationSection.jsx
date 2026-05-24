import { CalendarDays, Globe2, Mail, MapPin, Phone, UserRound } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n.js';

const icons = [UserRound, UserRound, CalendarDays, UserRound, Phone, Mail, MapPin, Globe2, UserRound, Globe2];

export function RegistrationSection() {
  const { language, t } = useI18n();
  const fields = t('registration.fields');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(t('registration.sending'));

    const formData = new FormData(event.currentTarget);
    const payload = {
      language,
      fields: fields.map((field) => ({
        label: field.label,
        name: field.name,
        value: formData.get(field.name) || '',
      })),
    };

    try {
      const response = await fetch('/api/register', {
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Registration email failed.');
      }

      event.currentTarget.reset();
      setStatus(t('registration.success'));
    } catch {
      setStatus(t('registration.error'));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="registration-section" id="registration">
      <form className="registration-form" onSubmit={handleSubmit}>
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
                        <input name={field.name} type="radio" value={option} required />
                        <span>{option}</span>
                      </label>
                    ))}
                  </span>
                ) : field.type === 'select' ? (
                  <span className="field__control">
                    <select name={field.name} required>
                      {field.options.map((option) => (
                        <option value={option} key={option}>{option}</option>
                      ))}
                    </select>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                ) : field.type === 'textarea' ? (
                  <span className="field__control field__control--textarea">
                    <textarea name={field.name} required />
                    <Icon size={18} aria-hidden="true" />
                  </span>
                ) : (
                  <span className="field__control">
                    <input name={field.name} type={field.type} required />
                    <Icon size={18} aria-hidden="true" />
                  </span>
                )}
              </label>
            );
          })}
        </div>

        <div className="registration-form__footer">
          <button className="button button--primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('registration.sending') : t('registration.submit')}
          </button>
          <p>{status || t('registration.emailNote')}</p>
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
