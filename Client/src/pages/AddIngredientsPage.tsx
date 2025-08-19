// src/pages/AddIngredientsPage.tsx
import React, { useState } from 'react';
import GeneralInformationStep from '../components/steps/GeneralInformationStep';
import BenefitsStep from '../components/steps/BenefitsStep';
import PropertiesStep from '../components/steps/PropertiesStep';
import OtherStep from '../components/steps/OtherStep';
import OverviewStep from '../components/steps/OverviewStep';

// This component manages the entire multi-step form
const AddIngredientsPage: React.FC = () => {
  // State to track the current active step in the form
  const [currentStep, setCurrentStep] = useState(1);

  // State to hold all the form data from all steps
  const [formData, setFormData] = useState({
    // Step 1: General Information
    ingredientName: '',
    scientificName: '',
    sanskritName: '',
    ingredientDescription: '',
    ingredientImage: null as File | null,

    // Step 2: Benefits
    whyToUse: [''],
    prakritiImpact: { vata: '', pitta: '', kapha: '', vataReason: '', pittaReason: '', kaphaReason: '' },
    benefits: [{ emoji: '😀', text: '' }],

    // Step 3: Properties (This was the old structure)
    // properties: [{ name: '', value: '' }],
    // Step 3: Properties (Updated to the new structure from the image)
    rasa: '',
    guna: '',
    veerya: '',
    vipaka: '',
    formulations: [], // <--- ADD THIS LINE
    therapeuticUses: [], // <--- ADD THIS LINE
    
    // Step 4: Other
    usage: '',
    maxUsage: '',
    sideEffects: '',
      // Step 5: Other (Update this section)
  plantParts: [], // Initialize as an empty array
  bestCombinedWith: '', // Initialize as an empty string
  geographicalLocations: '', // Initialize as an empty string
  });

  const totalSteps = 5;

  // Function to go to the next step
  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  // Function to go to the previous step
  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Function to update form data from child step components
  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  // The Stepper component UI
  const Stepper = () => {
    const steps = ['General Information', 'Benefits', 'Properties', 'Other', 'Overview'];
    return (
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-medium ${
                  currentStep > index + 1 ? 'bg-green-700 border-green-700 text-white' : ''
                } ${
                  currentStep === index + 1 ? 'border-green-700 text-green-700 bg-green-50' : 'border-gray-300 text-gray-400'
                }`}
              >
                {currentStep > index + 1 ? '✔' : `0${index + 1}`}
              </div>
              <p className={`mt-2 text-sm ${currentStep === index + 1 ? 'text-green-700 font-semibold' : 'text-gray-500'}`}>
                {step}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-auto border-t-2 mx-4 ${currentStep > index + 1 ? 'border-green-700' : 'border-gray-300'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  // Function to render the correct step component based on the current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <GeneralInformationStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <BenefitsStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <PropertiesStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <OtherStep formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <OverviewStep formData={formData} />;
      default:
        return <GeneralInformationStep formData={formData} updateFormData={updateFormData} />;
    }
  };

  return (
    <div className="space-y-4">
      <nav className="text-sm text-gray-500">
        <span>Ingredient</span>
        <span className="mx-2">&gt;</span>
        <span className="font-semibold">Add Ingredient</span>
      </nav>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Stepper />
        <div className="my-8 min-h-[300px]">
          {renderCurrentStep()}
        </div>
        <div className="flex justify-between pt-6 border-t">
          <div>
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="px-6 py-2 bg-green-700 text-white rounded-md text-sm font-semibold hover:bg-green-800"
            >
              {currentStep === totalSteps ? 'Finish' : 'Save'}
            </button>
            {currentStep < totalSteps && (
              <button
                onClick={handleNext}
                className="px-6 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIngredientsPage;