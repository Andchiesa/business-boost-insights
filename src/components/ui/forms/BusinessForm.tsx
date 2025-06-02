import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import { BusinessAnalysisData } from '../../types';
import InputField from './InputField';
import SelectField from './SelectField';
import CheckboxField from './CheckboxField';
import FormStep from './FormStep';
import LoadingSpinner from '../common/LoadingSpinner';

interface BusinessFormProps {
  onSubmit: (data: BusinessAnalysisData) => void;
}

const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit }) => {
  const { texts, language } = useLanguage();
  const { validateRequired, validateEmail, validateUrl } = useFormValidation();

  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form data
  const [businessData, setBusinessData] = useState<BusinessAnalysisData>({
    businessName: '',
    website: '',
    industry: '',
    email: '',
    employeeCount: '',
    socialMedia: {
      facebook: false,
      instagram: false,
      linkedin: false,
      twitter: false,
    },
    hasGoogleBusiness: false,
    acceptTerms: false,
  });

  // Industry options based on language
  const industryOptions = texts.form.segments.map((segment) => ({
    value: segment.value,
    label: segment.label,
  }));

  const steps = texts.form.steps;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setBusinessData((prev) => ({ ...prev, [id]: value }));
    
    // Clear error when typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setBusinessData((prev) => ({ ...prev, [id]: value }));
    
    // Clear error when selecting
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setBusinessData((prev) => ({
      ...prev,
      socialMedia: { ...prev.socialMedia, [id]: checked },
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setBusinessData((prev) => ({ ...prev, [id]: checked }));
    
    // Clear error when checking
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 0) {
      // Basic info validation
      const businessNameError = validateRequired(businessData.businessName, texts.form.validation.required);
      if (businessNameError) newErrors.businessName = businessNameError;

      const websiteError = validateUrl(businessData.website, texts.form.validation.invalidUrl);
      if (websiteError) newErrors.website = websiteError;

      const industryError = validateRequired(businessData.industry, texts.form.validation.required);
      if (industryError) newErrors.industry = industryError;
    } else if (currentStep === 1) {
      // Contact info validation
      const emailError = validateEmail(businessData.email, texts.form.validation.invalidEmail);
      if (emailError) newErrors.email = emailError;
    } else if (currentStep === 2) {
      // Terms validation
      if (!businessData.acceptTerms) {
        newErrors.acceptTerms = texts.form.validation.termsRequired;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        onSubmit(businessData);
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{texts.form.title}</h2>
      
      <FormStep currentStep={currentStep} steps={steps} />
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <LoadingSpinner />
          <p className="mt-4 text-gray-600">{texts.form.loading}</p>
        </div>
      ) : (
        <form>
          {currentStep === 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h3>
              <InputField
                id="businessName"
                label={texts.form.fields.businessName}
                value={businessData.businessName}
                onChange={handleInputChange}
                error={errors.businessName}
                required
              />
              <InputField
                id="website"
                label={texts.form.fields.website}
                type="url"
                value={businessData.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
                error={errors.website}
                required
              />
              <SelectField
                id="industry"
                label={texts.form.fields.industry}
                options={industryOptions}
                value={businessData.industry}
                onChange={handleSelectChange}
                error={errors.industry}
                required
              />
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h3>
              <InputField
                id="email"
                label={texts.form.fields.email}
                type="email"
                value={businessData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
              <SelectField
                id="employeeCount"
                label={texts.form.fields.employeeCount}
                options={[
                  { value: '1-10', label:
                    import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import { BusinessAnalysisData } from '../../types';
import InputField from './InputField';
import SelectField from './SelectField';
import CheckboxField from './CheckboxField';
import FormStep from './FormStep';
import LoadingSpinner from '../common/LoadingSpinner';

interface BusinessFormProps {
  onSubmit: (data: BusinessAnalysisData) => void;
}

const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit }) => {
  const { texts, language } = useLanguage();
  const { validateRequired, validateEmail, validateUrl } = useFormValidation();

  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form data
  const [businessData, setBusinessData] = useState<BusinessAnalysisData>({
    businessName: '',
    website: '',
    industry: '',
    email: '',
    employeeCount: '',
    socialMedia: {
      facebook: false,
      instagram: false,
      linkedin: false,
      twitter: false,
    },
    hasGoogleBusiness: false,
    acceptTerms: false,
  });

  // Industry options based on language
  const industryOptions = texts.form.segments.map((segment) => ({
    value: segment.value,
    label: segment.label,
  }));

  const steps = texts.form.steps;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setBusinessData((prev) => ({ ...prev, [id]: value }));
    
    // Clear error when typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setBusinessData((prev) => ({ ...prev, [id]: value }));
    
    // Clear error when selecting
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setBusinessData((prev) => ({
      ...prev,
      socialMedia: { ...prev.socialMedia, [id]: checked },
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setBusinessData((prev) => ({ ...prev, [id]: checked }));
    
    // Clear error when checking
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 0) {
      // Basic info validation
      const businessNameError = validateRequired(businessData.businessName, texts.form.validation.required);
      if (businessNameError) newErrors.businessName = businessNameError;

      const websiteError = validateUrl(businessData.website, texts.form.validation.invalidUrl);
      if (websiteError) newErrors.website = websiteError;

      const industryError = validateRequired(businessData.industry, texts.form.validation.required);
      if (industryError) newErrors.industry = industryError;
    } else if (currentStep === 1) {
      // Contact info validation
      const emailError = validateEmail(businessData.email, texts.form.validation.invalidEmail);
      if (emailError) newErrors.email = emailError;
    } else if (currentStep === 2) {
      // Terms validation
      if (!businessData.acceptTerms) {
        newErrors.acceptTerms = texts.form.validation.termsRequired;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        onSubmit(businessData);
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{texts.form.title}</h2>
      
      <FormStep currentStep={currentStep} steps={steps} />
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <LoadingSpinner />
          <p className="mt-4 text-gray-600">{texts.form.loading}</p>
        </div>
      ) : (
        <form>
          {currentStep === 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h3>
              <InputField
                id="businessName"
                label={texts.form.fields.businessName}
                value={businessData.businessName}
                onChange={handleInputChange}
                error={errors.businessName}
                required
              />
              <InputField
                id="website"
                label={texts.form.fields.website}
                type="url"
                value={businessData.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
                error={errors.website}
                required
              />
              <SelectField
                id="industry"
                label={texts.form.fields.industry}
                options={industryOptions}
                value={businessData.industry}
                onChange={handleSelectChange}
                error={errors.industry}
                required
              />
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h3>
              <InputField
                id="email"
                label={texts.form.fields.email}
                type="email"
                value={businessData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
              <SelectField
                id="employeeCount"
                label={texts.form.fields.employeeCount}
                options={[
                  { value: '1-10', label:
