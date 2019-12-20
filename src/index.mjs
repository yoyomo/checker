//@flow
import {muv} from 'muvjs/muv'
import {model} from './model/model'
import {update} from './update/update'
import {view} from './view/view'


muv({model,update,view})('root')