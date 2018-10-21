import React, { Component } from 'react';
import { LoginFormBlock, LoginFormContainer, } from '../styled/login_form_block';
import { H1Block } from '../styled/header';
import { CenterBlock } from '../styled/center_block';
import { Input } from '../components/input';
import { FormGroupBlock } from '../styled/form_group_block';
import Button from '../components/button';
import { FormLabel } from '../styled/form_label';

export default class RestorePasswordScreen extends Component {
  state = {
    email: '',
  };

  onChange = patch => this.setState(patch);

  submit = () => console.log(this.state);

  render() {
    const { email } = this.state;
    return (
      <LoginFormContainer>
        <LoginFormBlock>
          <CenterBlock>
            <H1Block>
              Restore password
            </H1Block>
          </CenterBlock>

          <FormGroupBlock>
            <FormLabel>
              Enter your email:
            </FormLabel>

            <Input
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="Email"
              type="email"
            />
          </FormGroupBlock>

          <FormGroupBlock>
            <CenterBlock>
              <Button value="Restore" onClick={this.submit} />
            </CenterBlock>

          </FormGroupBlock>
        </LoginFormBlock>
      </LoginFormContainer>
    );
  }
}
