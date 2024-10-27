export const selectStyles = {
  container: styles => ({
    ...styles,
    marginBottom: 40,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
  }),
  control: styles => ({
    ...styles,
    position: 'relative',
    width: 360,
    minHeight: 56,
    borderRadius: 12,
    backgroundColor: 'transparent',
    paddingLeft: 20,
  }),
  menu: styles => ({
    ...styles,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
  }),
  option: styles => ({
    ...styles,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    cursor: 'pointer',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
