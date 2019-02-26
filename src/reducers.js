import { combineReducers } from 'redux'
import careersRerducer from './api/careers/careers.reducer'
import careerDetailsRerducer from './api/career-details/career-details.reducer'
import filters from './api/filters/filters.reducer'
import careerActionsReducer from './api/career-actions/career-actions.reducer'
import coursesReducer from './api/courses/courses.reducer'
import courseActionsReducer from './api/course-actions/course-actions.reducer'

const careersApp = combineReducers({
  careersRerducer,
  careerDetailsRerducer,
  filters,
  careerActionsReducer,
  coursesReducer,
  courseActionsReducer
})

export default careersApp
