import {
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  PostActions,
  PostCardShape,
  NavigateAction,
  NavigationActions,
  Screens,
} from "../types/types";

export const navigate = (screen: Screens): NavigateAction => {
  return {
    action: NavigationActions.NAVIGATE,
    payload: screen,
  };
};

export const addPost = (post: PostCardShape): AddPostAction => ({
  action: PostActions.ADD_POST,
  payload: post,
});

export const deletePost = (id: string): DeletePostAction => ({
  action: PostActions.DELETE_POST,
  payload: { id },
});

export const updatePost = (post: PostCardShape): UpdatePostAction => ({
  action: PostActions.UPDATE_POST,
  payload: post,
});
