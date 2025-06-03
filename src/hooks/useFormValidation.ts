import { useLanguage } from '@/contexts/LanguageContext';

export const useFormValidation = () => {
  const { texts } = useLanguage();

  const validateRequired = (value: string): string | null => {
    return value.trim() === '' ? texts.form.validation.required : null;
  };

  const validateUrl = (value: string): string | null => {
    if (value.trim() === '') return null; // Optional field
    
    const urlPattern = /^https?:\/\/.+\..+/;
    return !urlPattern.test(value) ? texts.form.validation.invalidUrl : null;
  };

  const validateEmail = (value: string): string | null => {
    if (value.trim() === '') return null; // Optional field
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(value) ? texts.form.validation.invalidEmail : null;
  };

  return {
    validateRequired,
    validateUrl,
    validateEmail
  };
};
