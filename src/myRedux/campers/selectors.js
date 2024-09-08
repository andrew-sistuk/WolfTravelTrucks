export const selectCampers = state => state.campers.items;

export const selectCamper = state => state.campers.item;

export const selectCamperGallery = state => state.campers.item.gallery;

export const selectCamperReviews = state => state.campers.item.reviews;

export const selectModal = state => state.campers.modal;

export const selectModalIsOpen = state => state.campers.modal.isOpen;

export const selectCampersLoading = state => state.campers.loading;

export const selectCampersError = state => state.campers.error;
