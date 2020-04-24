import './FormInput.scss';

import { TextFieldTypes } from '@ionic/core';
import { IonCol, IonInput, IonRow } from '@ionic/react';
import React from 'react';

interface FormInput {
  name: string;
  color: string;
  value: string;
  onChange: (event: any) => void;
  clearInput: boolean;
  type: TextFieldTypes;
  placeholder: string;
}

const FormInput: React.FC<FormInput> = ({
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
