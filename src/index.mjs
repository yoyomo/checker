//@flow
import {muv} from 'muvjs/muv'
import {initialModel} from './model/model'
import {update} from './update/update'
import {view} from './view/view'
import {ignition} from './ignition/ignition'
import {subscriptions} from './subscriptions/subscriptions'

muv({model: initialModel,update,view, ignition, subscriptions})('root')