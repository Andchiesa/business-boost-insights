import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FormStep as FormStepType } from '../../types';

interface FormStepProps {
  currentStep: number;
  steps: FormStepType[];
}

const FormStep: React.FC<FormStepProps> = ({ currentStep, steps }) => {
  const { texts } = useLanguage();

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index < steps.length - 1 ? 'w-full' : ''
            }`}
          >
            <div
              className={`relative flex items-center justify-center w-10 h-10 rounded-full ${
                index < currentStep
                  ? 'bg-blue-600 text-white'
                  : index === currentStep
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index < currentStep ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'
              }`}
            >
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`hidden sm:block absolute top-5 w-full h-0.5 ${
                  index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                style={{ left: '50%', marginLeft: '20px' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormStep;

