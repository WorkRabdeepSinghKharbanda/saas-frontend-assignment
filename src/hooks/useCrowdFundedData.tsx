import { create } from "zustand";

export interface CrownFundedData {
  "s.no": number;
  "amt.pledged": number;
  blurb: string;
  by: string;
  country: string;
  currency: string;
  "end.time": string;
  location: string;
  "percentage.funded": number;
  "num.backers": string;
  state: string;
  title: string;
  type: string;
  url: string;
}

interface crownFundedData {
  crowdFundData: CrownFundedData | null;
  loadingStatus: boolean;
  fetchCrowdFundData: () => Promise<void>;
}

const useCrownFundedData = create<crownFundedData>((set) => ({
  crowdFundData: null,
  loadingStatus: true,
  fetchCrowdFundData: async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );
      const crowdFundData = await response.json();
      set({ crowdFundData, loadingStatus: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ loadingStatus: false });
    }
  },
}));

export default useCrownFundedData;
