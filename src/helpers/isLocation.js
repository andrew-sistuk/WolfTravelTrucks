export const isLocation = (itemLocation, locations) => {
  for (const location of locations) {
    // if (!location) return false;
    if (
      itemLocation.location.toLowerCase().includes(location.label.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};
