import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import GeneralInformationStep from '../components/steps/GeneralInformationStep';
import BenefitsStep from '../components/steps/BenefitsStep';
import PropertiesStep from '../components/steps/PropertiesStep';
import OtherStep from '../components/steps/OtherStep';
import OverviewStep from '../components/steps/OverviewStep';

interface AddIngredientStepsPageProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  onNavigate: (page: string) => void;
}

const AddIngredientStepsPage: React.FC<AddIngredientStepsPageProps> = ({ 
  currentStep, 
  setCurrentStep, 
  onNavigate 
}) => {
  const [formData, setFormData] = useState({
    ingredientName: '',
    scientificName: '',
    sanskritName: '',
    description: '',
    image: null,
    benefits: [],
    properties: {},
    other: {},
    whyToUse: []
  });

  const steps = [
    { number: 1, label: 'General Information', id: 'general' },
    { number: 2, label: 'Benefits', id: 'benefits' },
    { number: 3, label: 'Properties', id: 'properties' },
    { number: 4, label: 'Other', id: 'other' },
    { number: 5, label: 'Overview', id: 'overview' }
  ];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSave = () => {
    console.log('Saving data:', formData);
    // Handle save logic
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <GeneralInformationStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <BenefitsStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <PropertiesStep formData={formData} setFormData={setFormData} />;
      case 4:
        return <OtherStep formData={formData} setFormData={setFormData} />;
      case 5:
        return <OverviewStep formData={formData} setFormData={setFormData} />;
      default:
        return <GeneralInformationStep formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 flex items-center space-x-2">
        <span>Ingredient</span>
        <span>/</span>
        <span>Add Ingredient</span>
      </nav>

      {/* Progress Steps */}
      <div className="flex items-center justify-center space-x-8 mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center space-x-2">
            <div className={`flex items-center space-x-2 ${
              currentStep === step.number ? 'text-green-600' : 
              currentStep > step.number ? 'text-green-600' : 'text-gray-400'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                currentStep === step.number ? 'border-green-600 bg-green-600 text-white' : 
                currentStep > step.number ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300 text-gray-400'
              }`}>
                {step.number < 10 ? `0${step.number}` : step.number}
              </div>
              <span className="text-sm font-medium">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-px ${
                currentStep > step.number ? 'bg-green-600' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {renderStepContent()}

        {/* Action Buttons */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-center space-x-4">
          <button
            onClick={handleSave}
            className="px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Save
          </button>
          {currentStep < 5 && (
            <button
              onClick={handleNext}
              className="px-8 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddIngredientStepsPage;