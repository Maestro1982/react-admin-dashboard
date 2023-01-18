import OverAllStat from '../models/overAllStatModel.js';

export const getSales = async (req, res) => {
  try {
    const overAllStats = await OverAllStat.find();

    res.status(200).json(overAllStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
