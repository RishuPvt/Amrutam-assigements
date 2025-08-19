// src/components/steps/PropertiesStep.tsx
import React from 'react';

// Define the shape of the props this component expects
interface PropertiesProps {
  formData: {
    rasa: string;
    guna: string;
    veerya: string;
    vipaka: string;
    formulations: { icon: string; description: string }[]; // <--- Array
    therapeuticUses: string[]; // <--- Array
  };
  updateFormData: (data: Partial<PropertiesProps['formData']>) => void;
}

const PropertiesStep: React.FC<PropertiesProps> = ({ formData, updateFormData }) => {

  // --- Handlers for "Ayurvedic Properties" section ---
  const handleAyurvedicPropertyChange = (field: 'rasa' | 'guna' | 'veerya' | 'vipaka', value: string) => {
    updateFormData({ [field]: value });
  };

  // --- Handlers for "Important Formulations" section ---
  const handleFormulationChange = (index: number, field: 'description', value: string) => {
    const newFormulations = [...formData.formulations];
    newFormulations[index][field] = value;
    updateFormData({ formulations: newFormulations });
  };

  const addFormulationItem = () => {
    updateFormData({ formulations: [...formData.formulations, { icon: '', description: '' }] });
  };

  const removeFormulationItem = (index: number) => {
    const newFormulations = formData.formulations.filter((_, i) => i !== index);
    updateFormData({ formulations: newFormulations });
  };

  // --- Handlers for "Therapeutic Uses" section ---
  const handleTherapeuticUseChange = (index: number, value: string) => {
    const newUses = [...formData.therapeuticUses];
    newUses[index] = value;
    updateFormData({ therapeuticUses: newUses });
  };

  const addTherapeuticUseItem = () => {
    updateFormData({ therapeuticUses: [...formData.therapeuticUses, ''] });
  };

  const removeTherapeuticUseItem = (index: number) => {
    const newUses = formData.therapeuticUses.filter((_, i) => i !== index);
    updateFormData({ therapeuticUses: newUses });
  };


  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-semibold text-gray-800">Ayurvedic Properties</h2>
      
      {/* Ayurvedic Properties Section */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rasa <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.rasa}
            onChange={(e) => handleAyurvedicPropertyChange('rasa', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Type here..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Veerya <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.veerya}
            onChange={(e) => handleAyurvedicPropertyChange('veerya', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Type here..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Guna <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.guna}
            onChange={(e) => handleAyurvedicPropertyChange('guna', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Type here..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vipaka <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.vipaka}
            onChange={(e) => handleAyurvedicPropertyChange('vipaka', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Type here..."
          />
        </div>
      </div>

      <hr className="border-gray-200" />
      
      <h2 className="text-2xl font-semibold text-gray-800">Important Formulations</h2>
      
      {/* Important Formulations Section */}
      <div className="space-y-4">
        {formData.formulations.map((formulation, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* You would replace this with an actual upload component */}
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-md">
              <span className="text-gray-500">
                {/* Placeholder for upload icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </span>
            </div>
            <input
              type="text"
              value={formulation.description}
              onChange={(e) => handleFormulationChange(index, 'description', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Lorem ipsum"
            />
            <button onClick={() => removeFormulationItem(index)} className="text-gray-400 hover:text-gray-600 font-bold text-xl">
              &times;
            </button>
          </div>
        ))}
        <button onClick={addFormulationItem} className="mt-3 text-sm font-semibold text-green-700 hover:text-green-800 flex items-center space-x-1">
          <span>+ Add Another Items</span>
        </button>
      </div>

      <hr className="border-gray-200" />

      <h2 className="text-2xl font-semibold text-gray-800">Therapeutic Uses</h2>
      
      {/* Therapeutic Uses Section */}
      <div className="space-y-4">
        {formData.therapeuticUses.map((use, index) => (
          <div key={index} className="flex items-center space-x-4">
            <input
              type="text"
              value={use}
              onChange={(e) => handleTherapeuticUseChange(index, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter Here..."
            />
            <button onClick={() => removeTherapeuticUseItem(index)} className="text-gray-400 hover:text-gray-600 font-bold text-xl">
              &times;
            </button>
          </div>
        ))}
        <button onClick={addTherapeuticUseItem} className="mt-3 text-sm font-semibold text-green-700 hover:text-green-800 flex items-center space-x-1">
          <span>+ Add Another Items</span>
        </button>
      </div>
    </div>
  );
};

export default PropertiesStep;