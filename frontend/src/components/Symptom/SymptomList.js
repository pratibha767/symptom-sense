import React from 'react';

function SymptomList({ symptoms }) {
  return (
    <ul>
      {symptoms.map((symptom) => (
        <li key={symptom._id}>
          {symptom.description} - Severity: {symptom.severity}
        </li>
      ))}
    </ul>
  );
}

export default SymptomList;