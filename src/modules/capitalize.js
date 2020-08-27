const capitalize = (mString) => {
  if (typeof mString !== 'string') return '';
  mString = mString.charAt(0).toUpperCase().concat(mString.slice(1).toLowerCase());
  return mString;
};

export default capitalize;