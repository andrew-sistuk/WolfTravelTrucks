export const selectCampers = state => state.campers.items;

export const selectCamper = state => state.campers.item;

export const selectCamperGallery = state => state.campers.item.gallery;

export const selectCamperReviews = state => state.campers.item.reviews;

export const selectModal = state => state.campers.modal;

export const selectLocations = state => state.campers.filters.locations;

export const selectEquipments = state => state.campers.filters.equipments;

export const selectTypes = state => state.campers.filters.types;

export const selectCampersLoading = state => state.campers.loading;

export const selectCampersError = state => state.campers.error;
