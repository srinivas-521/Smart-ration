import React, { useState } from 'react';

const EligibilityCheck = () => {
    const [answers, setAnswers] = useState({
        state: false,
        income: false,
        governmentJob: false,
        familyMembers: false,
        age: false,
        education: false,
        maritalStatus: false,
        dependents: false,
        houseOwnership: false,
        savings: false,
    });

    const [eligible, setEligible] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prev) => ({ ...prev, [name]: value === 'yes' }));
    };

    const checkEligibility = () => {
        const correctAnswers = Object.values(answers).filter(answer => answer).length;
        setEligible(correctAnswers >= 7);
    };

    return (
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-4">Ration Card Eligibility Check</h2>

            <div className="mb-4">
                <label className="block mb-2">
                    1. Do you belong to Tamil Nadu?
                </label>
                <select name="state" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    2. Is your annual income below ₹80,000?
                </label>
                <select name="income" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    3. Does any family member work in a government job?
                </label>
                <select name="governmentJob" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    4. Are you a resident of Tamil Nadu for the last 3 years?
                </label>
                <select name="familyMembers" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    5. Are you married?
                </label>
                <select name="maritalStatus" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    6. Do you have children or dependents?
                </label>
                <select name="dependents" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    7. Do you own a house?
                </label>
                <select name="houseOwnership" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    8. Have you ever been registered for any government schemes?
                </label>
                <select name="savings" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    9. Are you unemployed?
                </label>
                <select name="employment" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    10. Are you a member of a self-help group?
                </label>
                <select name="selfHelpGroup" onChange={handleChange} className="border p-2 w-full rounded">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <button
                onClick={checkEligibility}
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
                Check Eligibility
            </button>

            {eligible !== null && (
                <div className="mt-4 text-center">
                    {eligible ? (
                        <p className="text-green-500">You are eligible for the ration card.</p>
                    ) : (
                        <p className="text-red-500">You are not eligible for the ration card.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default EligibilityCheck;
