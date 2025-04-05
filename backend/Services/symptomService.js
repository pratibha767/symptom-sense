const SymptomEntry = require('../models/SymptomEntry');

exports.getFilteredAndSortedSymptoms = async (userId, filters, sort) => {
  try {
    let query = { userId: userId }; // Ensure user-specific data

    // Apply filters
    if (filters.severity) {
      query.severity = { $gte: filters.severity };
    }
    if (filters.date) {
      query.date = { $gte: filters.date };
    }

    // Apply sorting
    let sortOptions = {};
    if (sort.sortBy) {
      sortOptions[sort.sortBy] = sort.sortOrder === 'desc' ? -1 : 1;
    }

    const symptoms = await SymptomEntry.find(query).sort(sortOptions);
    return symptoms;
  } catch (error) {
    throw error;
  }
};

exports.calculateSeveritySummary = async (userId, days) => {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    const highSeverityEntries = await SymptomEntry.find({
      userId: userId,
      severity: { $gte: 5 }, // Define "high severity" as 5 or more
      date: { $gte: cutoffDate },
    });

    return {
      totalHighSeverity: highSeverityEntries.length,
      entries: highSeverityEntries,
    };
  } catch (error) {
    throw error;
  }
};

exports.transformSymptomData = (symptomEntry) => {
  // Example: Convert date to a more readable format
  const formattedDate = new Date(symptomEntry.date).toLocaleDateString();

  return {
    ...symptomEntry.toObject(),
    formattedDate: formattedDate,
    // Add other transformations as needed
  };
};

exports.createSymptomEntry = async (userId, symptomData) => {
  try {
    const newEntry = new SymptomEntry({ ...symptomData, userId: userId });
    const savedEntry = await newEntry.save();
    return savedEntry;
  } catch (error) {
    throw error;
  }
};

// Add other service functions as needed (e.g., updateSymptom, deleteSymptom)