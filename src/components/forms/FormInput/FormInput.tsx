import React from 'react';
import './FormInput.scss';
import { IonCol, IonRow, IonInput } from '@ionic/react';
import { IFormInput } from '../../interfaces';

const FormInput: React.FC<IFormInput> = ({
  name,
  color,
  value,
  onChange,
  clearInput,
  type,
  placeholder,
}) => {
  return (
    <IonRow className="FormInput">
      <IonCol>
        <div className="input-container">
          <IonInput
            padding-horizontal
            name={name}
            color={color}
            value={value}
            onIonChange={onChange}
            clearInput={clearInput}
            type={type}
            placeholder={placeholder}
            class="input"
          ></IonInput>
        </div>
      </IonCol>
    </IonRow>
  );
};

export default FormInput;
