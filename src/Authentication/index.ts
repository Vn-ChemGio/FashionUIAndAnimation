import {slides}                     from "./OnBoarding/OnBoarding";
import {picture} from './Welcome';


export {default as OnBoarding}      from './OnBoarding'
export {default as Welcome}         from './Welcome'
export {default as Login}           from './Login'
export {default as SignUp}          from './SignUp'
export {default as ForgotPassword}  from './ForgotPassword'
export {default as PasswordChanged} from './PasswordChanged'

export  const assets = [...slides.map(each=> each.picture.src), picture.src]


