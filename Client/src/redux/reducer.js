import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_ALL_POSTS,
  GET_POST_BY_ID,
  SELECT_CATEGORY,
  SELECT_LOCALITY,
  SELECT_PROVINCE,
  GET_POST_BY_CATEGORY,
  GET_POST_BY_PROVINCE,
  GET_POST_BY_LOCALITY,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "./actionTypes";

const initialState = {
  allUsers: [],
  selectedUser: "",
  allPosts: [],
  allPostsCopy: [],
  selectedPost: "",
  postsCategory: [],
  postsByProvince: [],
  postsByLocality: [],
  selectedProvince: "",
  selectedLocality: "",
  selectedCategory: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case GET_USER_BY_ID:
      return {
        ...state,
        selectedUser: action.payload,
      };

    case CREATE_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

    case UPDATE_USER:
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case DELETE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter(
          (user) => user.id !== action.payload.id
        ),
      };

    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        allPostsCopy: action.payload,
      };

    case GET_POST_BY_ID:
      return {
        ...state,
        selectedPost: action.payload,
      };

    case SELECT_PROVINCE:
      return {
        ...state,
        selectedProvince: action.payload,
        selectedLocality: "",
      };

    case SELECT_LOCALITY:
      return {
        ...state,
        selectedLocality: action.payload,
      };

    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case GET_POST_BY_CATEGORY:
      return {
        ...state,
        postsCategory: action.payload,
      };

    case GET_POST_BY_PROVINCE:
      return {
        ...state,
        allPosts: action.payload,
      };

    case GET_POST_BY_LOCALITY:
      return {
        ...state,
        postsByLocality: action.payload,
      };

    case CREATE_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
      };

    case UPDATE_POST:
      return {
        ...state,
        allPosts: state.allPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };

    case DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(
          (post) => post.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}

export default rootReducer;
