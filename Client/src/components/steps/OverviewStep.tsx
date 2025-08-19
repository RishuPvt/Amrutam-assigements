// src/components/steps/OverviewStep.tsx
import React from 'react';

// This component receives all form data to display it
interface OverviewProps {
  formData: any; // Use 'any' to accept the full formData object
}

const OverviewStep: React.FC<OverviewProps> = ({ formData }) => {
  
  const { 
    ingredientName, scientificName, sanskritName, ingredientDescription, ingredientImage,
    whyToUse, prakritiImpact, benefits,
    rasa, guna, veerya, vipaka, formulations, therapeuticUses, // New properties
    plantParts, bestCombinedWith, geographicalLocations // New other fields
  } = formData;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Ingredient Overview</h2>

      {/* General Information Section */}
      <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">General Information</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p><strong>Ingredient Name:</strong> {ingredientName}</p>
          <p><strong>Scientific Name:</strong> {scientificName}</p>
          <p><strong>Sanskrit Name:</strong> {sanskritName}</p>
        </div>
        <p className="mt-3 text-sm"><strong>Description:</strong> {ingredientDescription}</p>
        {ingredientImage && (
          <div className="mt-3">
            <strong>Image:</strong>
            <img src={URL.createObjectURL(ingredientImage)} alt="Ingredient" className="mt-2 h-24 w-24 rounded-md object-cover"/>
          </div>
        )}
      </div>

      <hr className="border-gray-200" />

      {/* Benefits Section */}
      <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Benefits</h3>
        <div className="text-sm space-y-2">
          <div>
            <strong>Why to Use:</strong>
            <ul className="list-disc list-inside ml-4">
              {whyToUse?.map((item: string, index: number) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <strong>Benefits List:</strong>
            <ul className="list-disc list-inside ml-4">
              {benefits?.map((item: {text: string}, index: number) => <li key={index}>{item.text}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Properties Section (Ayurvedic Properties) */}
      <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Ayurvedic Properties</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p><strong>Rasa:</strong> {rasa}</p>
          <p><strong>Veerya:</strong> {veerya}</p>
          <p><strong>Guna:</strong> {guna}</p>
          <p><strong>Vipaka:</strong> {vipaka}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-600 mb-2">Important Formulations</h4>
          <ul className="list-disc list-inside ml-4">
            {formulations?.map((item: { description: string }, index: number) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-600 mb-2">Therapeutic Uses</h4>
          <ul className="list-disc list-inside ml-4">
            {therapeuticUses?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <hr className="border-gray-200" />

      {/* Other Section */}
      <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Other Information</h3>
        <div className="text-sm space-y-2">
          <div>
            <strong>Plant Parts & Purpose:</strong>
            <ul className="list-disc list-inside ml-4">
              {plantParts?.map((item: { part: string; description: string }, index: number) => (
                <li key={index}><strong>{item.part}:</strong> {item.description}</li>
              ))}
            </ul>
          </div>
          <p><strong>Best Combined With:</strong> {bestCombinedWith}</p>
          <p><strong>Geographical Locations:</strong> {geographicalLocations}</p>
        </div>
      </div>

    </div>
  );
};

export default OverviewStep;