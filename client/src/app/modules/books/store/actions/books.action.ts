import { createAction } from '@ngrx/store';

// Action constants

export const LOAD_BOOKS_DATA = '[Books] Load books data';
export const LOAD_BOOKS_SUCCESS = '[Books] Load books success';
export const LOAD_BOOKS_ERROR = '[Books] Load books error';

// Action creators

export const loadBooksAction = createAction(LOAD_BOOKS_DATA);
export const loadBooksSuccessAction = createAction(LOAD_BOOKS_SUCCESS);
export const loadBooksErrorAction = createAction(LOAD_BOOKS_ERROR);
