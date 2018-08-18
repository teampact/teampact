import React, { Component } from 'react';
import styled from 'styled-components';

import { Input } from '../../components/input';
import { Button } from '../../components/button/button';
import { H1Block } from '../../styled/header';
import { FormGroupBlock } from '../../styled/form_group_block';
import { LoginFormBlock } from '../../styled/login_form_block';
import { CenterBlock } from '../../styled/center_block';
import { FormLabel } from '../../styled/form_label';
import { FormHelper } from '../../styled/form_helper';
import { Checkbox } from '../../components/checkbox/checkbox';


const LoginWithGoogleBlock = styled.div`
  margin-top: 30px;
`;

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    remember_me: false,
  };

  onChange = (patch) => {
    this.setState(patch);
  };

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    const { email, password, remember_me } = this.state;

    return (
      <LoginFormBlock>
        <CenterBlock>
          <H1Block>
            Login
          </H1Block>
        </CenterBlock>

        <FormGroupBlock>

          <FormLabel>
            Enter your email:
          </FormLabel>
          <Input
            onChange={this.onChange}
            name="email"
            placeholder="Email"
            type="email"
            value={email}
          />
        </FormGroupBlock>

        <FormGroupBlock>
          <FormLabel>
            Enter your password:
          </FormLabel>

          <Input
            onChange={this.onChange}
            name="password"
            placeholder="Password"
            type="password"
            value={password}
          />

          <FormHelper>
            Restore your password
          </FormHelper>
        </FormGroupBlock>

        <FormGroupBlock>
          <label>
            <Checkbox
              checked={remember_me}
              name='remember_me'
              onChange={(patch) => console.log(patch)}
            />

            Remember me
          </label>
        </FormGroupBlock>

        <FormGroupBlock>
          <CenterBlock>
            <Button value="Log in" onClick={this.onSubmit} />
          </CenterBlock>
        </FormGroupBlock>


        <CenterBlock>
          <LoginWithGoogleBlock>
            or log in with
            {' '}
            <a href="/auth/google_oauth2">
              Google account
            </a>
          </LoginWithGoogleBlock>
        </CenterBlock>

      </LoginFormBlock>
    );
  }
}

export { LoginScreen };
