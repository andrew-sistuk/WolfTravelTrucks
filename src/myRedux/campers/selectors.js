export const selectCampers = state => state.campers.items;

export const selectCamper = state => state.campers.item;

export const selectCamperReviews = state => state.campers.item.reviews;

export const selectModal = state => state.campers.modal;

export const selectCamperLocations = state => state.campers.filters.locations;

export const selectEquipments = state => state.campers.filters.equipments;

export const selectTypes = state => state.campers.filters.types;

export const selectCampersError = state => state.campers.error;
