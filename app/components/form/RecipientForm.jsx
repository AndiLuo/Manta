// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Animation
import _withFadeInAnimation from '../../components/shared/hoc/_withFadeInAnimation';

// Styles
import styled from 'styled-components';
import { Part, Row, Field } from '../shared/Part';

export function RecipientForm({ t, formData, updateRecipientForm }) {
  const { fullname, company, email, phone, make, model, unit, vin, mileage } = formData;
  return (
    <div>
    <Part>
      <Row>
        <Field>
          <label className="itemLabel">{t('common:fields:fullname')} *</label>
          <input
            name="fullname"
            type="text"
            value={fullname || ''}
            onChange={updateRecipientForm}
          />
        </Field>
        <Field>
          <label className="itemLabel">{t('common:fields:company')}</label>
          <input
            name="company"
            type="text"
            value={company || ''}
            onChange={updateRecipientForm}
          />
        </Field>
      </Row>
      <Row>
        <Field>
          <label className="itemLabel">{t('common:fields:email')} *</label>
          <input
            name="email"
            type="text"
            value={email || ''}
            onChange={updateRecipientForm}
          />
        </Field>
        <Field>
          <label className="itemLabel">{t('common:fields:phone')}</label>
          <input
            name="phone"
            type="text"
            value={phone || ''}
            onChange={updateRecipientForm}
          />
        </Field>
      </Row>
    </Part>
    <Part>
    <Row>
        <Field>
          <label className="itemLabel">{t('common:fields:make')} *</label>
          <input
            name="make"
            type="text"
            value={make || ''}
            onChange={updateRecipientForm}
          />
        </Field>
        <Field>
          <label className="itemLabel">{t('common:fields:model')}</label>
          <input
            name="model"
            type="text"
            value={model|| ''}
            onChange={updateRecipientForm}
          />
        </Field>
      </Row>
      <Row>
        <Field>
          <label className="itemLabel">{t('common:fields:unit')} *</label>
          <input
            name="unit"
            type="text"
            value={unit || ''}
            onChange={updateRecipientForm}
          />
        </Field>
        <Field>
          <label className="itemLabel">{t('common:fields:vin')}</label>
          <input
            name="vin"
            type="text"
            value={vin|| ''}
            onChange={updateRecipientForm}
          />
        </Field>
      </Row>
      <Row>
        <Field>
          <label className="itemLabel">{t('common:fields:mileage')} *</label>
          <input
            name="mileage"
            type="text"
            value={mileage || ''}
            onChange={updateRecipientForm}
          />
        </Field>
      </Row>

    </Part>
    </div>
  );
}

// PropTypes Validation
RecipientForm.propTypes = {
  formData: PropTypes.object,
  t: PropTypes.func.isRequired,
  updateRecipientForm: PropTypes.func.isRequired,
};

RecipientForm.defaultProps = {
  formData: {},
};

export default _withFadeInAnimation(RecipientForm);
