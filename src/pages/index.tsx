import * as React from 'react';
import {Button} from 'baseui/button';
import {useStyletron} from 'baseui';
import {toaster, ToasterContainer} from 'baseui/toast';

export const sum = (a: number, b: number) => a + b;

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <ToasterContainer>
      <div>
        <Button onClick={() => toaster.positive('ok', {})}>Hello</Button>
        <p className={css({color: theme.colors.accent600})}>Styled by hook</p>
      </div>
    </ToasterContainer>
  );
};

export default Index;
