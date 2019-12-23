//@flow

import React from 'react';
import { View } from './view.jsx';
import { initialModel } from '../model/model'
import { ignition } from '../ignition/ignition'
import { subscriptions } from '../subscriptions/subscriptions'
import { update } from '../update/update'

export class ReactRoot extends React.Component {

  constructor(props) {
    super(props);
    this.dispatch = this.dispatch.bind(this);
    this.reduceEffects = this.reduceEffects.bind(this);

    this.state = { ...initialModel };
    this.services = subscriptions(this.dispatch);

  }

  componentDidMount() {
    ignition(this.dispatch)
  }

  reduceActions(model, action) {
    console.log("action", action);
    return update(model)(action);
  };

  reduceEffects(effects) {
    effects.map(effect => {
      console.log("effect", effect);
      return this.services(effect);
    })
  };

  dispatch(action) {
    let oldModel = { ...this.state };
    let reduction = this.reduceActions(oldModel, action);
    this.setState(reduction.model, () => {
      console.log("newModel", this.state);
      this.reduceEffects(reduction.effects);
    });
  };

  render() {
    let model = { ...this.state };
    let ViewContent = View(this.dispatch);
    return ViewContent(model);
  }
}