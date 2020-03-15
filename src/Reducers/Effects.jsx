import * as ACTIONS from "./ActionConstants.jsx";

const { TOGGLE_MOBILE_NAV, HIDE_MOBILE_NAV, TOGGLE_LOADER } = ACTIONS;

export const toggleMobileNav = () => ({
  type: TOGGLE_MOBILE_NAV
});

export const toggleLoader = option => ({
  type: TOGGLE_LOADER,
  option
});

export const hideMobileNav = option => ({
  type: HIDE_MOBILE_NAV,
  option
});

export default function reducer(
  state = {
    showNav: false,
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case TOGGLE_MOBILE_NAV:
      return {
        ...state,
        showNav: !state.showNav
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.option
      };
    case HIDE_MOBILE_NAV:
      return {
        ...state,
        showNav: action.option
      };
    default:
      return state;
  }
}
