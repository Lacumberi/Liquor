import { create } from 'zustand';

// Mock Tile38 integration for geolocation
const fetchBrands = async () => {
  // Simulate Tile38 query for nearby stores (replace with actual Tile38 client in production)
  return [
    { id: 1, name: 'Jack Daniel\'s', price: 25.99, store: 'Store A', lat: 40.7128, lon: -74.0060 },
    { id: 2, name: 'Smirnoff', price: 15.99, store: 'Store B', lat: 40.7129, lon: -74.0061 },
    { id: 3, name: 'Patron', price: 45.99, store: 'Store C', lat: 40.7130, lon: -74.0062 },
  ];
};

export const useBrandStore = create((set) => ({
  brands: [],
  fetchBrands: async () => {
    const brands = await fetchBrands();
    set({ brands });
  },
}));

// Load brands on store initialization
useBrandStore.getState().fetchBrands();
