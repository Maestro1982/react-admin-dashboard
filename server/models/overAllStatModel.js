import mongoose from 'mongoose';

const overAllStatSchema = new mongoose.Schema(
  {
    totalCustomers: {
      type: Number,
    },
    yearlySalesTotal: {
      type: Number,
    },
    yearlyTotalSoldUnits: {
      type: Number,
    },
    year: {
      type: Number,
    },
    monthlyData: [
      {
        month: {
          type: String,
        },
        totalSales: {
          type: Number,
        },
        totalUnits: {
          type: Number,
        },
      },
    ],
    dailyData: [
      {
        date: {
          type: String,
        },
        totalSales: {
          type: Number,
        },
        totalUnits: {
          type: Number,
        },
      },
    ],
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  {
    timestamps: true,
  }
);

const overAllStat = new mongoose.model('OverAllStat', overAllStatSchema);
export default overAllStat;
